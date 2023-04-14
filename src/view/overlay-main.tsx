import React, { useEffect, useState } from 'react'
import OverlayAdder from './overlay-creator'
import OverlayList from './overlay-list'
import { OverlayConfig } from '../models/OverlayConfig'
import Details from './overlay-actions'
import { DarkThemeToggle, Flowbite } from 'flowbite-react'
import { AppConfig } from '../models/AppConfig'

export const OverlayMain = ({ config }: { config: AppConfig }) => {
    const [overlays, setOverlays] = useState(config.overlays)

    console.log('Main window ready')
    api.mainWindowReady()

    useEffect(() => {
        setOverlays(config.overlays)
        return () => {
            console.log('Removing window api watchers')
            api.mainWindowReset()
        }
    }, [config.overlays])

    useEffect(() => {
        // save app config here
    }, [overlays])

    const updateOverlay = (overlay: OverlayConfig) => {
        console.log('Overlays updating...')

        const index = overlays.findIndex(
            (item: OverlayConfig) => item.guid === overlay.guid
        )

        setOverlays((data: OverlayConfig[]) => {
            data[index] = overlay

            // Deletes Overlays from List
            if (overlay.name === 'DELETE') {
                console.log('Deleting overlay ')
                data = data.filter(
                    (item: OverlayConfig) => item.name !== 'DELETE'
                )
            }

            console.log('Updated Overlays:', data)
            return data
        })
    }

    const addOverlays = (overlay: OverlayConfig) => {
        console.log('Adding overlay ')
        setOverlays((_overlays: OverlayConfig[]) => [..._overlays, overlay])
    }

    const updateAllOverlays = async () => {
        console.log('Updating all Overlays')
        const config = await api.syncConfig()
        setOverlays(config.overlays)
    }

    return (
        <div>
            {overlays ? (
                <OverlayList
                    overlays={overlays}
                    updateOverlay={updateOverlay}
                />
            ) : (
                <p>Loading Overlays</p>
            )}
            <Details updateAllOverlays={updateAllOverlays} />
            <OverlayAdder addOverlays={addOverlays} />
        </div>
    )
}
