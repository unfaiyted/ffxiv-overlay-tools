import {createRoot} from "react-dom/client";
import React from "react";
import {Main} from "./view/main";

const root = createRoot(document.body);

function render() {
    return root.render(
        <div>
            <h2 className="font-bold text-2xl mb-2">FFXIV Electron Overlay Manager</h2>

            <Main/>

            <p>
                Alpha v.0.0.1
            </p>
        </div>)
}

render();