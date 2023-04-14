import React, { useEffect, useState } from 'react'
import { OverlayConfig } from '../models/OverlayConfig'
import { Button, Card, Dropdown, ToggleSwitch } from 'flowbite-react'

export const OverlayListItem = ({
    config,
    updateOverlay,
}: {
    config: OverlayConfig
    updateOverlay: React.Dispatch<any>
}) => {
    console.log('Creating overlay from configuration')

    const [overlay, editOverlay] = useState(config)

    const deleteOverlay = () => {
        console.log('Deleting overlay')
        api.deleteOverlay(overlay.guid)
        editOverlay((overlay: OverlayConfig) => ({
            ...overlay,
            name: 'DELETE',
        }))
    }

    useEffect(() => {
        api.showOverlay(overlay)
        api.listenForWindowDetails(getWinDetails)
    }, [])

    const getWinDetails = (event: Event, response: any) => {
        console.log('win-details-response', response)
    }

    useEffect(() => {
        editOverlay(config)
    }, [config])

    useEffect(() => {
        updateOverlay(overlay)
        api.editOverlay(overlay)
    }, [overlay])

    const toggleEditOverlay = async () => {
        //TODO: fix this implementation
        editOverlay((overlay) => ({ ...overlay, locked: !overlay.locked }))
    }

    return (
        <div>
            <Card horizontal={true} className="mb-3">
                <div className="flex flew-row justify-between ">
                    <div className="min-w-[50px] bg-green-100 justify-center text-center text-4xl pt-4 justify-self-start">
                        {overlay.name.split('')[0].toUpperCase()}
                    </div>

                    <div className="flex-grow pl-4 xs:max-w-[60%] sm:max-w-[400px] overflow-hidden">
                        <h5 className="mb-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white overflow-hidden">
                            {overlay.name}
                        </h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 overflow-hidden">
                            {overlay.url}
                        </p>
                    </div>

                    <div className="flex-none min-w-[25px] justify-self-end">
                        <Dropdown inline={true} label="">
                            <Dropdown.Item>
                                <ToggleSwitch
                                    checked={!overlay.locked}
                                    label="Editable"
                                    onChange={toggleEditOverlay}
                                />
                            </Dropdown.Item>

                            <Dropdown.Item className="flex-initial">
                                <Button
                                    size="sm"
                                    gradientMonochrome="failure"
                                    onClick={deleteOverlay}
                                >
                                    Delete
                                </Button>
                            </Dropdown.Item>
                        </Dropdown>
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default OverlayListItem
