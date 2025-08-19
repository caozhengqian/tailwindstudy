"use client";
import { useRef } from 'react';
export default function UseRef1(){
    let ref = useRef(0);
    const inputRef = useRef(null);
    function handleClick() {
        ref.current = ref.current + 1;
        console.log(ref.current);
        // alert('You clicked ' + ref.current + ' times!');
    }
    function handleClick1() {
        inputRef.current.focus();
    }
    return (
        <>
            <button onClick={handleClick} className={"border-2 border-gray-500"}>
                点击次数{ref.current}！
            </button>
            <div>
                <input ref={inputRef} className={"border-2 border-gray-500"}/>
                <button onClick={handleClick1} className={"border-2 border-gray-500"}>
                    聚焦输入框
                </button>
            </div>

        </>


    );
}
