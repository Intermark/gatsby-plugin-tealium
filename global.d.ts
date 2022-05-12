declare global {
    interface Window {
        utag: any
    }
}

export type TealiumEvent = {
    type: string
}