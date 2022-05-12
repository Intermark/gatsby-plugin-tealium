import { useEffect } from 'react'
import { TealiumEvent } from '../global.d'

const useTealiumViewEvent = (data: TealiumEvent): void => {
    useEffect(() => {
        if (!window || !window.utag || !data) return
        window.utag.view(data);
    }, [])
};
export default useTealiumViewEvent;
