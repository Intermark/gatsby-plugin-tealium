declare global {
  interface Window {
    utag: any
  }
}

export type TealiumEvent = {
  type: string
}

export type OnRenderBodyOptions = {
  account: string
  profile: string
  env?: string
  utagData?: object
  injectUtagSync: boolean
  disableInitialTracking: boolean
}
