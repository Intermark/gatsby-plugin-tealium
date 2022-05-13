// TODO: Add descriptions
export const pluginOptionsSchema = ({ Joi }) => {
  return Joi.object({
    account: Joi.string().required().description(``),
    profile: Joi.string().required().description(``),
    utagData:Joi.string().required().description(``),
    env: Joi.string().valid("dev", "qa", "prod").description(``).default(`default message`),
    injectUtagSync: Joi.boolean().description(``).default(true),
    disableInitialTracking: Joi.boolean().description(``).default(`default message`)
  }).external(async (pluginOptions) => {
    const url = `https://tags.tiqcdn.com/utag/${pluginOptions.account}/${pluginOptions.profile}/${pluginOptions.env}/utag.sync.js`
    try {
      const res = await fetch(url)
      const js = await res.json()
      if (js.length) return true
    } catch (err) {
      throw new Error(
        `Cannot access Tealium utag at "${url}". Please check your gatsby-plugin-tealium settings and try again!`
      );
    }
  });
};
