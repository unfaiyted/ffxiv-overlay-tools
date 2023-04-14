import { createRoot } from 'react-dom/client'
import React from 'react'
import { OverlayMain } from './view/overlay-main'
import { DarkThemeToggle, Flowbite } from 'flowbite-react'
import AppHeader from './view/app-header'
import { AppConfig } from './models/AppConfig'

const root = createRoot(document.body)

const appConfig: AppConfig = api.syncConfig()

function render() {
    return root.render(
        <div>
            <AppHeader />
            <OverlayMain config={appConfig} />
            <p>Alpha v.0.0.1</p>
        </div>
    )
}

render()
