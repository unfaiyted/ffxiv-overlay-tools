import {OverlayConfig} from "../models/OverlayConfig";
import React, {useState, useEffect} from "react";
import OverlayListItem from "./overlay-list-item";


export const OverlayList = ({overlays, updateOverlays} : { overlays: OverlayConfig[], updateOverlays: any}) => {

    return (
        <div>
            {overlays.map((overlay: OverlayConfig) => (
                <OverlayListItem key={overlay.guid} config={overlay} updateOverlays={updateOverlays} />
            ))}
        </div>
    );

}

export default OverlayList;