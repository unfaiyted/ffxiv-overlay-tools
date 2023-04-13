import React, {useEffect, useState} from 'react';
import {OverlayConfig} from "../models/OverlayConfig";
import {Card, Dropdown} from "flowbite-react";

export const OverlayListItem = ({config, updateOverlays} : { config: OverlayConfig, updateOverlays: React.Dispatch<any> }) => {
    console.log("Creating overlay from configuration");
    console.log(config.url);

    const [overlay, editOverlay] = useState(config);

    const deleteOverlay = () => {
        console.log("Deleting overlay");
        api.deleteOverlay(overlay.guid);
        editOverlay((overlay: OverlayConfig) =>
            ({ ...overlay, name: "DELETE" }));
    }


    useEffect(() => {
        api.showOverlay(overlay)
    }, []);


    useEffect(() => {
        editOverlay(config);
    }, [config]);



    useEffect(() => {
        updateOverlays(overlay);
        api.editOverlay(overlay);
    }, [overlay]);


    const toggleEditOverlay = ()=> {
        // e.target.value = !overlay.locked;
        api.updateWindowDetails();
        editOverlay((overlay) =>
            ({ ...overlay, locked: !overlay.locked}))

    }



return <div>


        <Card
            horizontal={true}
            className="mb-3"
        >
            <div className="flex flew-row justify-between ">
                <div className="min-w-[50px] bg-green-100 justify-center text-center text-4xl pt-4 justify-self-start" >{overlay.name.split("")[0].toUpperCase()}</div>

                <div className="flex-grow pl-4 max-w-[80%]">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white overflow-hidden">{overlay.name}</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 overflow-hidden">{overlay.url}</p>
                </div>


                <div className="flex-none min-w-[25px] justify-self-end">
                    <Dropdown inline={true} label="">

                        <Dropdown.Item className="flex-initial">
                            <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white" type="button" onClick={deleteOverlay}>Delete</button>
                        </Dropdown.Item>

                        <Dropdown.Item>
                            Editable: <input type="checkbox"  onChange={toggleEditOverlay} name="isEditable" checked={!overlay.locked}/>
                        </Dropdown.Item>

                    </Dropdown>

                </div>

            </div>

        </Card>

    </div>

}

export default OverlayListItem;

