"use client";
import { Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import {useState} from "react";

export default function page() {

    function handleSubmit():void {

    }
    const [loading, setLoading] = useState
    <boolean>(false);

    function handleClick(index:boolean):void {
        setLoading(index)
    }
    return(
        <div >
            <Button size="middle" type="primary" shape="circle" icon={<SearchOutlined/>}
                    onClick={() => handleSubmit()}/>
            <Button
                type="primary"
                loading={loading}
                onClick={() => handleClick(true)}
                iconPosition="end"
            >
                Icon End
            </Button>

        </div>
    )
}
