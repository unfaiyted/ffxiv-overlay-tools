import {OverlayConfig} from "../app";
import {BrowserWindow} from "electron";

interface Window {
    config: OverlayConfig
    browser: BrowserWindow;
}
