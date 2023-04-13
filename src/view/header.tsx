import React from 'react';
import {DarkThemeToggle, Flowbite} from "flowbite-react";

export const AppHeader= () => {
   return <div className="flex flex-row justify-between">
            <h2 className="font-bold text-2xl mb-2 dark:text-white">FFXIV Electron Overlay Manager</h2>

            <div>
                <Flowbite>
                    <DarkThemeToggle/>
                </Flowbite>
               </div>
   </div>
}

export default AppHeader;