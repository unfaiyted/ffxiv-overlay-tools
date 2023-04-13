import {app, BrowserWindow, ipcMain} from 'electron';
import * as fs from "fs";
import {createMainWindow, findGuid} from "./backend/windows";
import {AppConfig, defaultAppConfig} from "./models/AppConfig";
import {BrowserDetail} from "./models/BrowserDetail";
// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
  app.quit();
}

export let appConfig: AppConfig = defaultAppConfig;
export let windowDetails: BrowserDetail[] = [];

import "./backend/overlay"

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', () => {
    createMainWindow();
});

ipcMain.on('get-config', async (event) => {

    if(appConfig.overlays.length === 0) {
         try {
            const config = fs.readFileSync("./overlays.config.json", 'utf-8');
            const updatedConfig = JSON.parse(config) as AppConfig;

            appConfig = {
                ...updatedConfig,
            }
            event.returnValue = JSON.parse(config);
        } catch (e) {
            console.log('read-file-error', e);
            event.returnValue = appConfig;
        }
    }

    event.returnValue = appConfig;
});


//TODO: look into injecting some sort or variables into the overlay pages, that I can then manipulate later to
// determine the guid of a given overlay, and maybe more things with that later.
ipcMain.on('update-window-details', async (event) => {


    async function getDetails() {
        windowDetails = [];
        console.log('Getting window details now...')

        const windows = BrowserWindow.getAllWindows();

        for (const win of windows) {
            const guid =  await findGuid(win);

            console.log('Guid returned: ' + guid);

            const detail: BrowserDetail = {
                OSProcessId: win.webContents.getOSProcessId(),
                processId: win.webContents.getProcessId(),
                guid,
                bounds: win.getBounds(),
                contentBounds: win.getContentBounds(),
                url: win.webContents.getURL(),
                title: win.webContents.getTitle(),

            }

            console.log('Detail returned: ' + detail);
            windowDetails.push(detail);

        }


            console.log("Window Details", windowDetails)
            return windowDetails
        }


    event.returnValue = await getDetails();


    console.log("Triggering overlay save")
  ipcMain.emit("save-overlay-positions");

});





ipcMain.on('window-details', (event, position) => {
    windowDetails.push(position);
})

ipcMain.on('app-window-ready', (event) => {
    console.log('app-window-ready');
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});


app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createMainWindow();
  }
});



// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
