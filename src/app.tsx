import {createRoot} from "react-dom/client";
import React from "react";
import {Main} from "./view/main";
import {DarkThemeToggle, Flowbite} from "flowbite-react";

const root = createRoot(document.body);

function render() {
    return root.render(
        <div>
            <h2 className="font-bold text-2xl mb-2 dark:text-white">FFXIV Electron Overlay Manager</h2>

              <Flowbite>
                    <DarkThemeToggle/>
              </Flowbite>
            <Main/>

            <p>
                Alpha v.0.0.1
            </p>
        </div>)
}

render();