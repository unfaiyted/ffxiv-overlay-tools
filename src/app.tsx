import {createRoot} from "react-dom/client";
import React from "react";
import {Main} from "./view/main";
import {DarkThemeToggle, Flowbite} from "flowbite-react";
import AppHeader from "./view/header";

const root = createRoot(document.body);

function render() {
    return root.render(
        <div>

    <AppHeader/>
            <Main/>

            <p>
                Alpha v.0.0.1
            </p>
        </div>)
}

render();