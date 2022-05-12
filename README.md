# gatsby-plugin-tealium

## Example

```tsx
import {
  useTealiumViewEvent,
  useTealiumLinkEvent,
} from "gatsby-plugin-tealium";

const Page: GatsbyPage = () => {
  useTealiumViewEvent({
    key: "value",
  });

  const clickEvent = () => {
    useTealiumLinkEvent({
      key: "value",
    });
  };

  return (
    <>
      <h1>Hello, world.</h1>
      <button onClick={clickEvent}>Click here!</button>
    </>
  );
};
```
