import {OverlayConfig} from "./OverlayConfig";
import {BrowserDetail} from "./BrowserDetail";

export interface OverlayWindow {
    config: OverlayConfig
    browser: BrowserDetail;
}
