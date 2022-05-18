import useTealiumViewEvent from "./hooks/useTealiumViewEvent"

export const onRouteUpdate = ({ location, prevLocation }, pluginOptions) => {
  useTealiumViewEvent({
    pathName: location.pathname,
    tealium_event: "page_view",
  })
}
