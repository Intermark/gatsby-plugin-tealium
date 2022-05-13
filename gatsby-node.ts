// TODO: Add remaining descriptions
export const pluginOptionsSchema = ({ Joi }) => {
  return Joi.object({
    account: Joi.string()
      .required()
      .description(`Tealium account name, e.g. "companyXYZ"`),
    profile: Joi.string()
      .required()
      .description(`Tealium profile name, e.g. "main"`),
    utagData: Joi.object().description(
      `Initial value for the Universal Data Object (UDO). If not provided, a UDO will not be set automatically. An empty object is accepted as a value.`
    ),
    env: Joi.string()
      .valid("dev", "qa", "prod")
      .description(`Tealium environment name, e.g. "prod"`)
      .default(`default message`),
    injectUtagSync: Joi.boolean().description(``).default(true),
    disableInitialTracking: Joi.boolean().description(``).default(false),
  }).external(async pluginOptions => {
    const url = `https://tags.tiqcdn.com/utag/${pluginOptions.account}/${pluginOptions.profile}/${pluginOptions.env}/utag.sync.js`
    try {
      const res = await fetch(url)
      const js = await res.json()
      if (js.length) return true
    } catch (err) {
      throw new Error(
        `Cannot access Tealium utag at "${url}". Please check your gatsby-plugin-tealium settings and try again!`
      )
    }
  })
}
