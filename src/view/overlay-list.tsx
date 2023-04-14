import { OverlayConfig } from '../models/OverlayConfig'
import React, { useState, useEffect } from 'react'
import OverlayListItem from './overlay-list-item'

export const OverlayList = ({
    overlays,
    updateOverlay,
}: {
    overlays: OverlayConfig[]
    updateOverlay: any
}) => {
    return (
        <div>
            {overlays.map((overlay: OverlayConfig) => (
                <OverlayListItem
                    key={overlay.guid}
                    config={overlay}
                    updateOverlay={updateOverlay}
                />
            ))}
        </div>
    )
}

export default OverlayList
