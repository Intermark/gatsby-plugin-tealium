# gatsby-plugin-tealium

## Usage

`gatsby-config.js`

```js
module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-tealium`,
      options: {
        account: "YOUR ACCOUNT ID",
        profile: "YOUR PROFILE ID",
        utagData: { key : "value" } // Optional object for initial UDO (utag_data) definition.
        env: "dev", // Either dev, qa, or prod
        injectUtagSync: true, // Toggles async loading for utag script
        disableInitialTracking: false, // Toggles tracking of initial pageload
      },
    },
  ],
};
```

## Example

```tsx
import { useTealiumViewEvent, useTealiumLinkEvent } from "gatsby-plugin-tealium"

const Page: GatsbyPage = () => {
  useTealiumViewEvent({
    key: "value",
  })

  const clickEvent = () => {
    useTealiumLinkEvent({
      key: "value",
    })
  }

  return (
    <>
      <h1>Hello, world.</h1>
      <button onClick={clickEvent}>Click here!</button>
    </>
  )
}
```
