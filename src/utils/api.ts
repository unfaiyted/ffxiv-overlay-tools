import { ipcRenderer } from 'electron'
import { OverlayConfig } from '../models/OverlayConfig'
import { BrowserDetail } from '../models/BrowserDetail'

export default {
    mainWindowReady: () => () => {
        return ipcRenderer.send('app-window-ready', 'App Window Ready!')
    },
    syncConfig: () => ipcRenderer.sendSync('get-config'),
    updateWindowDetails: () => ipcRenderer.send('update-window-details'),
    getWindowDetailsByGuid: async (guid: string): Promise<BrowserDetail> =>
        ipcRenderer.sendSync('get-window-details', guid),
    // getWindowDetailsById: async (id: number) =>
    //     ipcRenderer.sendSync('get-window-details-by-id', id),
    deleteOverlay: (guid: string) => ipcRenderer.invoke('delete-overlay', guid),
    showOverlay: (overlay: OverlayConfig) =>
        ipcRenderer.invoke('show-overlay', overlay),
    addOverlay: (config: OverlayConfig) =>
        ipcRenderer.invoke('create-overlay', config),
    saveOverlayPositions: () => ipcRenderer.send('save-overlay-positions'),
    editOverlay: (config: OverlayConfig) => {
        ipcRenderer.invoke('edit-overlay', config)
    },
    mainWindowReset: () => {
        ipcRenderer.removeAllListeners('app-window-ready')
        ipcRenderer.send('close-all-windows')
    },
    cleanupWindows: () => ipcRenderer.send('cleanup-windows'),

    // Listeners
    listenForWindowDetails: (listenerFn: any) => {
        console.log('Registered listening for window-details')
        ipcRenderer.on('window-details', listenerFn)
    },
}
