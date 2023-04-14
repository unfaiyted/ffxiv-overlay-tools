import { OverlayConfig } from './OverlayConfig'

export interface AppConfig {
    locked: boolean
    version: number
    theme: string
    overlays: OverlayConfig[]
}

export const defaultAppConfig: AppConfig = {
    version: 0,
    theme: 'dark',
    overlays: [],
    locked: false,
}
