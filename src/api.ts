import { ipcRenderer  } from 'electron';
import { OverlayConfig } from "./app";

export default {
    openWindow: (config: OverlayConfig) => ipcRenderer.invoke('window:open', config)
}
