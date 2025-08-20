"use client";
import Father from './Father'
import {useState,useCallback} from "react";

export default function UseCallback1() {
    const [v,setV] = useState('');
    //使用useCallback避免每次输入input，子组件因为call函数而更新
    const call = useCallback(()=>{
        console.log('call')
    },[])
    return(
        <div >

            page
            <input  onChange={(e)=>{setV(e.target.value)}}/>
            <Father call={call} />
        </div>
    )
}
