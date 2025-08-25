"use client";
import { Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import {useState} from "react";

export default function page() {

    const [loading, setLoading] = useState
    <boolean>(false);
    const handleClick:(index: boolean)=>void = (index: boolean) => {
        setLoading(index)
    };
    return(
        <div >
            <Button
                type="primary"
                loading={loading}
                onClick={() => handleClick(true)}
                iconPosition="end"
                icon={<SearchOutlined/>}
            >
                Icon End
            </Button>


        </div>
    )
}
