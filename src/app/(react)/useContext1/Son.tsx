"use client";
//useImperativeHandle 暴露给ref可调用的方法
import { useContext } from 'react';
import {ThemeContext} from "./themeContext";
export default function Son() {
    const theme= useContext(ThemeContext)
    return(
        <div className={"pl-6"}>
            子类{theme}
        </div>
    )
}
