declare global {
  interface Window {
    utag: any
  }
}

export type OnRenderBodyOptions = {
  account: string
  profile: string
  env?: string
  utagData?: object
  injectUtagSync: boolean
  disableInitialTracking: boolean
}
