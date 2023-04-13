import React, {useEffect} from 'react';
import {Button} from "flowbite-react";

export const WindowDetails = ({updateAllOverlays }: { updateAllOverlays: any}) => {

    const getDetails =  async () => {
        console.log("Getting details...");


        api.updateWindowDetails();

      setTimeout(() => {
        updateAllOverlays();
      },2000)

    }

    const handleCleanup  = async () => {
        api.cleanupWindows();
    }

    return <div>
        <Button onClick={getDetails}>Save Overlay Positions</Button>
        <Button onClick={handleCleanup}>Window Cleanup</Button>
    </div>
}

export default WindowDetails;