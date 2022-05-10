import { TealiumEvent } from '../global.d'

const useTealiumEvent = (data: TealiumEvent) => {
    const tealiumEvent = (data: TealiumEvent) => {
        if (!window || !window.utag) return
        window.utag.view(data);
    }

    return { tealiumEvent }
};
export default useTealiumEvent;
