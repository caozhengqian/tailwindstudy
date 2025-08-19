"use client";
//useImperativeHandle 暴露给ref可调用的方法
import MyInput from "./MyInput";
import { useRef } from 'react';
export default function UseImperativeHandle1() {
    const ref = useRef(null);
    function handleClick() {
        ref.current.focus();
        // 下方代码不起作用，因为 DOM 节点并未被暴露出来：
        // ref.current.style.opacity = 0.5;
    }
    return(
        <form>
            <MyInput placeholder="Enter your name" ref={ref} />
            <button type="button" onClick={handleClick}>
                Edit
            </button>
        </form>
    )

}
