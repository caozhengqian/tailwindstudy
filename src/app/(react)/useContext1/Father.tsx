"use client";

import Son from "./Son";
import { useContext } from 'react';
import {ThemeContext} from "./themeContext";
export default function Father() {
    const theme= useContext(ThemeContext)
    return(
        <div>
            父类{theme}
            <Son />
        </div>
    )
}
