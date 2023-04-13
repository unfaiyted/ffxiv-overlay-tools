import * as Electron from "electron";


export interface BrowserDetail {
        bounds: Electron.Rectangle;
        contentBounds: Electron.Rectangle;
        guid: string;
        url: string;
        title: string;
        processId: number;
        OSProcessId: number;
}