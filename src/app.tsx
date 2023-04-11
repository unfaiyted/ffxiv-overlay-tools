import {createRoot} from "react-dom/client";
import {overlays} from "../overlays.config.json";
import OverlayAdder from "./view/overlay-adder";
import React from "react";
import OverlayList from "./view/overlay-list";

//
// import {BrowserWindow} from "electron";
//
// const createWindow = () => {
//
//     const win = new BrowserWindow({
//         width: 300,
//         height: 300,
//         transparent: true,
//         frame: false,
//     })
//
//     win.show();
// }




export interface OverlayConfig {
    guid: string;
    name: string;
    url: string;
    size: string;
    position: string;
    fullScreen: boolean;
    clickThrough: boolean;
    typeThrough: boolean;
    locked: boolean;
    hidden: boolean;
    fullScreenSize: string;
}



const _overlays = overlays.map((item) => item as OverlayConfig);


const root = createRoot(document.body);



function render() {
    return root.render(
        <div>
            <h2>FFXIV Electron Overlay Manager</h2>

            <OverlayAdder/>
            <OverlayList overlays={overlays}/>

            <p><span>What</span>
        This will lock the overlays so that they are no longer movable. You can also not change the size of them.
        </p>
        <button>Toggle Locking Overlays</button>


        </div>)
}

render();