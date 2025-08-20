"use client";
import {memo} from 'react'

export default memo(function Father(props){
    console.log('father is render')
    return <div onClick={props.call}>Father</div>
})
