import { TealiumEvent } from '../global.d'

const useTealiumLinkEvent = (data: TealiumEvent): () => void => {
    const tealiumEvent = () => {
        if (!window || !window.utag) return
        window.utag.link(data);
    }

    return tealiumEvent
};
export default useTealiumLinkEvent;
