"use client";

import Father from "./Father";
import {ThemeContext} from "./themeContext";
import {useState} from "react";
export default function UseContext1() {
    const [theme, setTheme] = useState('dark')

    return(
        <>
            <button onClick={()=>theme==='dark'?setTheme('light'):setTheme('dark')} className={"border-2 border-gray-500"}>切换Theme</button>
            <ThemeContext value={theme}>
                <Father />
            </ThemeContext>
        </>

    )
}
