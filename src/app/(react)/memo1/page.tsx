"use client";

import Father from "./Father";
import {useState} from "react";
export default function UseContext1() {
    const [num, setNum] = useState(1)

    return(
        <>
            <button onClick={()=>{setNum(num+1)}}>增加1按钮</button>
            <p>pages的值={num}</p>
                <Father num={2}/>
        </>

    )
}
