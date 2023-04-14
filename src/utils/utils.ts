import { BrowserDetail } from '../models/BrowserDetail'
import { OverlayConfig } from '../models/OverlayConfig'
import OverlayListItem from '../view/overlay-list-item'

export const getCoord = (string: string) => {
    return string.split('|').map((item) => parseInt(item))
}

export const encodeCoords = (array: Array<number>) => {
    return array.join('|')
}

export const generateGuid = () => {
    function S4() {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
    }
    return (
        S4() +
        S4() +
        '-' +
        S4() +
        '-' +
        S4() +
        '-' +
        S4() +
        '-' +
        S4() +
        S4() +
        S4()
    )
}

export const mergeBrowserDetailsWithOverlays = (
    details: BrowserDetail[],
    overlay: OverlayConfig
) => {
    details.forEach((detail) => {
        mergeBrowserDetailsWithOverlay(detail, overlay)
    })
    return overlay
}

export const mergeBrowserDetailsWithOverlay = (
    detail: BrowserDetail,
    overlay: OverlayConfig
): OverlayConfig => {
    console.log('save-overlay-details', detail)
    if (detail.guid === overlay.guid) {
        console.log('Matching Details for overlay positions')
        overlay.position = encodeCoords([
            detail.contentBounds.x,
            detail.contentBounds.y,
        ])
        overlay.size = encodeCoords([detail.bounds.width, detail.bounds.height])
    }
    return overlay
}
