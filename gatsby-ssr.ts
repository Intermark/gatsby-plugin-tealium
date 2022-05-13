import React from "react"
import { oneLineTrim } from "common-tags"

export const onRenderBody = (
  { setHeadComponents, setPreBodyComponents },
  {
    account,
    profile,
    env = "dev",
    utagData,
    injectUtagSync = false,
    disableInitialTracking = false,
  }
) => {
  if (["dev", "qa", "prod"].includes(env)) {
    if (injectUtagSync) {
      setHeadComponents([
        React.createElement("script", {
          key: "plugin-tealium-utag-sync",
          src: `https://tags.tiqcdn.com/utag/${account}/${profile}/${env}/utag.sync.js`,
        }),
      ])
    }

    setPreBodyComponents([
      React.createElement("script", {
        key: "plugin-tealium-utag",
        dangerouslySetInnerHTML: {
          __html: oneLineTrim`
            ${
              disableInitialTracking
                ? `
              window.utag_cfg_ovrd = window.utag_cfg_ovrd || {};
              window.utag_cfg_ovrd.noview = true;
            `
                : ""
            }
            (function(a,b,c,d){
              a='//tags.tiqcdn.com/utag/${account}/${profile}/${env}/utag.js';
              b=document;c='script';d=b.createElement(c);
              d.onload=function() { b.dispatchEvent(new Event("utag-loaded")); };
              d.src=a;d.type='text/java'+c;d.async=true;
              a=b.getElementsByTagName(c)[0];a.parentNode.insertBefore(d,a)
            })();
          `,
        },
      }),
      // TODO: Check if the use of dangerouslySetInnerHTML here is a security risk.
      // If initial value for utag_data is not provided, do not set the utag_data variable
      React.createElement("script", {
        key: "utagDataObject",
        dangerouslySetInnerHTML: {
          __html: utagData
            ? `var utag_data = ${JSON.stringify(utagData)}`
            : null,
        },
      }),
    ])
  } else {
    throw new Error(
      `Unknown env: [${env}]. env must be "dev", "qa", or "prod".`
    )
  }
}

// Reorder the pre-body components to ensure that the utagDataObject is set prior to utag.js, which is added to the <body> via gatsby-plugin-tealium-utag
export const onPreRenderHTML = ({
  getPreBodyComponents,
  replacePreBodyComponents,
}) => {
  const preBodyComponents = getPreBodyComponents()
  preBodyComponents.sort((x, y) => {
    if (x.key === "utagDataObject") {
      return -1
    } else if (y.key === "utagDataObject") {
      return 1
    }
    return 0
  })
  replacePreBodyComponents(preBodyComponents)
}
