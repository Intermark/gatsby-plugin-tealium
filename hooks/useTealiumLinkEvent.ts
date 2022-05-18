import { TealiumEvent } from "../global.d"

const useTealiumLinkEvent = (data: TealiumEvent): (() => void) => {
  console.log("LinkData", data)
  const tealiumEvent = () => {
    if (!window || !window.utag) {
      console.error("utag.js had not loaded yet.")
      return
    }
    window.utag.link(data)
  }

  return tealiumEvent
}
export default useTealiumLinkEvent
