"use client";
import {memo} from "react";

export default memo(function Father(props) {
    console.log("父类执行了")
    return(
        <div>
            父{props.num}
        </div>
    )
})
