import { useEffect } from "react"

// Todo: rethink !data  - is this correct?

const useTealiumViewEvent = (data = {}): void => {
  // Because of SSR use, in order to reference the window object, we must first verify that we are in the browser.
  useEffect(() => {
    const isBrowser = () => typeof window !== "undefined"
    if (isBrowser) {
      if (!window || !window.utag) {
        console.error("utag.js has not loaded yet.")
        return
      } else {
        window.utag.view(data)
      }
    } else {
      console.error("window object is not currently available")
    }
  }, [])
}
export default useTealiumViewEvent
