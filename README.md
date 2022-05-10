# gatsby-plugin-tealium

## Example

```tsx
import { useTealiumEvent } from "gatsby-plugin-tealium";

const Page: GatsbyPage = () => {
  const loadEvent = useTealiumEvent({
    type: "load",
  });

  const clickEvent = useTealiumEvent({
    type: "click",
  });

  loadEvent();

  return (
    <>
      <h1>Hello, world.</h1>
      <button onClick={() => clickEvent()}>Click here!</button>
    </>
  );
};
```
