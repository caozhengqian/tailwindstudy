'use client';
import { useState,useTransition } from 'react';

// http://localhost:3000/useTransition1
// useTransition降低更新的优先级
export default function UseStateObj() {
    const [inputV,setInputV] = useState<string>("");
    const [changeV,setChangeV] = useState<string>("");
    const [isPending,startTransition] = useTransition()
    const inputEvent=(e)=>{

        startTransition(()=>{//降低优先级
            setInputV(e.target.value);
        })
            setChangeV(e.target.value);//优先更新9999条
    }
    return (
        <div>
            <input onChange={inputEvent} className={"border-2 border-gray-500"}/>

            {isPending ? <div>loading...</div> :<p className={"text-red-500"}>{inputV}</p>}
            <p className={"text-red-500"}>{inputV}</p>
            <ol>
                {Array(9999).fill("react开发").map((_,i)=>{
                    return <li key={i}>{changeV}</li>
                })}
            </ol>
        </div>

    )
}
