import { TealiumEvent } from "../global.d"

const useTealiumViewEvent = (data: TealiumEvent): void => {
  if (!window || !window.utag || !data) {
    console.error("utag.js has not loaded yet.")
    return
  }
  window.utag.view(data)
}
export default useTealiumViewEvent
