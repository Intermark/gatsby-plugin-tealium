import { TealiumEvent } from "../global.d"

const useTealiumViewEvent = (data: TealiumEvent): void => {
  console.log("Tealium view event", data)
  if (!window || !window.utag || !data) {
    console.error("utag.js has not loaded yet.")
    return
  }
  console.log("UTAG has loaded!", window.utag)
  window.utag.view(data)
}
export default useTealiumViewEvent
