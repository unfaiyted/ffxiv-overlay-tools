import {OverlayConfig} from "./OverlayConfig";

export interface AppConfig {
    locked: boolean;
    version: number;
    overlays: OverlayConfig[];
}


export const defaultAppConfig: AppConfig = {
    version: 0,
    overlays: [],
    locked: false
};

