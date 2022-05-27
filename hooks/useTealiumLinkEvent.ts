const useTealiumLinkEvent = (data = {}): void => {
  const isBrowser = typeof window !== "undefined"
  if (isBrowser) {
    if (!window || !window.utag) {
      console.error("utag.js has not loaded yet.")
      return
    } else {
      window.utag.link(data)
    }
  } else {
    console.error("window object is not currently available")
  }
}
export default useTealiumLinkEvent
