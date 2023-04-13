import React, {useEffect, useState} from "react";
import OverlayAdder from "./overlay-adder";
import OverlayList from "./overlay-list";
import {OverlayConfig} from "../models/OverlayConfig";
import Details from "./save-positions";
import {DarkThemeToggle, Flowbite} from "flowbite-react";

export const Main = () => {

   const [overlays , setOverlays] = useState(null);

    useEffect(() => {
        console.log("Main window ready");
        api.mainWindowReady();
        const config  = api.syncConfig();

        console.log("Config", config);

        setOverlays(config.overlays);

        return () => {
            console.log("Removing window api watchers");
            api.mainWindowReset();
        };
    }, []);

     const updateOverlay = (overlay: OverlayConfig) => {

         console.log("Overlays updating...")

         const index = overlays.findIndex((item: OverlayConfig) => item.guid === overlay.guid);


         setOverlays((data: OverlayConfig[]) => {


             console.log('DATA', data);
             console.log('overlays', overlays);

              data[index] = overlay;

              console.log('newOverlays[index]', data[index]);

              // Deletes Overlays from List
             if (overlay.name === "DELETE")  {
                console.log("Deleting overlay ")
                data = data.filter((item: OverlayConfig) => item.name !== "DELETE");

             }


             console.log("Updated Overlays:", data)
             return data;
         })

     }

     const addOverlays = (overlay: OverlayConfig) => {
             console.log("Adding overlay ");
             setOverlays((_overlays: OverlayConfig[]) => [..._overlays, overlay])
     }


     const updateAllOverlays = async () => {
         console.log("Updating all Overlays");
         const config = await api.syncConfig();
         setOverlays(config.overlays);
     }


    return (
        <div>
            {overlays ? <OverlayList overlays={overlays} updateOverlays={updateOverlay}/> : <p>Loading Overlays</p>}
            <Details updateAllOverlays={updateAllOverlays}/>
        <OverlayAdder addOverlays={addOverlays} />


        </div>
)

}