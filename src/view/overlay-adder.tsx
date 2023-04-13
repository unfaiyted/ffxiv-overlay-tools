// Create Overlay
import {useState} from "react";
import {OverlayConfig} from "../models/OverlayConfig";
import {generateGuid} from "../utils/utils";
import {Button, Label, TextInput} from "flowbite-react";

export const OverlayAdder = ({ addOverlays} : {addOverlays: any}) => {

    const [name, setName] = useState("Overlay");
    const [url, setUrl] = useState("");


    const submit = () => {
        // save the overlays new values
        console.log('Adding new overlay', name, url);

        const overlay: OverlayConfig = {
            guid: generateGuid(),
            name,
            url,
            size: "200|200",
            position: "0|0",
            fullScreen: false,
            clickThrough: true,
            typeThrough: true,
            locked: false,
            hidden: false,
            fullScreenSize: "200|200",
        }

    console.log(overlay);

    api.addOverlay(overlay);

    addOverlays(overlay);
    

    }


    return <div>
        <div className="mb-2 block">
            <Label
                htmlFor="name"
                value="Name:"
            />
        </div>
        <TextInput
            id="name"
            type="text"
            placeholder="Overlay Name"
            required={true}
            onChange={(e) => setName(e.target.value)}
        />
        <div className="mb-2 block">
            <Label
                htmlFor="url"
                value="URL"
            />
        </div>
        <TextInput
            id="url"
            type="text"
            placeholder="http://localhost:8080/"
            required={true}
            onChange={(e) => setUrl(e.target.value)}
        />


        <Button type="submit" onClick={submit} id="create-overlay-submit">+</Button>

</div>
}

export default OverlayAdder;