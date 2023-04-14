import { ipcMain } from 'electron'
import { OverlayConfig } from '../models/OverlayConfig'
import { createOverlayWindow } from './windows'
import * as fs from 'fs'

import { appConfig, windowDetails } from './index'
import { encodeCoords } from '../utils/utils'

ipcMain.handle('show-overlay', (event, config: OverlayConfig) => {
    console.log('show-overlay', config)
    createOverlayWindow(config)
})

ipcMain.handle('create-overlay', (event, config: OverlayConfig) => {
    console.log('create-overlay', config)

    createOverlayWindow(config)

    appConfig.overlays = [...appConfig.overlays, config]

    //save config
    fs.writeFileSync('./overlays.config.json', JSON.stringify(appConfig))

    return appConfig
})
ipcMain.handle('edit-overlay', (event, config: OverlayConfig) => {
    console.log('edit-overlay', config)

    createOverlayWindow(config)

    const matchingItem = appConfig.overlays.findIndex(
        (overlay) => overlay.guid === config.guid
    )

    appConfig.overlays[matchingItem] = config
    fs.writeFileSync('./overlays.config.json', JSON.stringify(appConfig))

    return appConfig
})
ipcMain.on('save-overlay-positions', (event) => {
    const details = windowDetails

    console.log('save-overlay-positions', details)

    const updatedOverlays = appConfig.overlays.map((item) => {
        details.forEach((detail) => {
            console.log('save-overlay-details', detail)

            if (detail.guid === item.guid) {
                console.log('Matching Details for overlay positions')
                item.position = encodeCoords([
                    detail.contentBounds.x,
                    detail.contentBounds.y,
                ])
                item.size = encodeCoords([
                    detail.bounds.width,
                    detail.bounds.height,
                ])
            }
        })
        return item
    })

    appConfig.overlays = updatedOverlays

    fs.writeFileSync('./overlays.config.json', JSON.stringify(appConfig))

    return appConfig
})
ipcMain.handle('delete-overlay', (event, guid: string) => {
    const matchingItem = appConfig.overlays.findIndex(
        (overlay) => overlay.guid === guid
    )

    console.log('delete-overlay', matchingItem)

    // close overlay window

    appConfig.overlays.splice(matchingItem, 1)

    fs.writeFileSync('./overlays.config.json', JSON.stringify(appConfig))
    return appConfig
})
