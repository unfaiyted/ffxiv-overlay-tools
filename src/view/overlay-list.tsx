import {OverlayConfig} from "../app";

const createWindow = (config: OverlayConfig) =>  api.openWindow(config);

const OverlayListItem = (overlay: OverlayConfig) => {
    console.log("Creating overlay from configuration");
    console.log(overlay.url);

    createWindow(overlay);

    return <div>
        <span>{overlay.name}</span>
        <span>[{overlay.url}]</span>
        <span>[Edit]</span>
    </div>
}



export const OverlayList = ({overlays} : { overlays: OverlayConfig[]}) => {
    return <div>
        {overlays.map((overlay: OverlayConfig) => OverlayListItem(overlay))}
    </div>
}

export default OverlayList;