import { TealiumEvent } from "../global.d"

const useTealiumLinkEvent = (data: TealiumEvent): void => {
  if (!window || !window.utag) {
    console.error("utag.js has not loaded yet.")
    return
  }
  window.utag.link(data)
}
export default useTealiumLinkEvent
