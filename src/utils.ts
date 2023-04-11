import fs from "fs";
import {OverlayConfig} from "./app";

export const getCoord = (string: string) => {
    return string.split("|").map((item) => parseInt(item));
}

export const encodeCoords = (array: Array<number>) => {
    return array.join("|");
}


// export const updateConfig = (overlays: Array<OverlayConfig>) => {
//     const CONFIG_PATH = "./overlays.conig.json";
//      const file = fs.readFileSync(CONFIG_PATH, 'utf8');
//
//     const json = JSON.parse(file);
//
//     json.overlays = overlays;
//
//     const string = JSON.stringify(json)
//
//     const fs.writeFileSync(CONFIG_PATH, string);
// }