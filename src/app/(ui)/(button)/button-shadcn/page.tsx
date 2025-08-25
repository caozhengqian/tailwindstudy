"use client";
import { Button } from "@/components/ui/button"
import { Loader2Icon } from "lucide-react"
import {Col, Row} from "antd";
export default function page() {
    function handleSubmit():void {
        console.log('aa')
    }

    return (
        <div>
            <Button size="sm" variant="default" disabled onClick={() => handleSubmit()}>
                <Loader2Icon className="animate-spin"/>
                Please wait
            </Button>
            <Row justify="start" align="middle">
                <Col span={3} offset={1}>
                    <p>col-4</p>
                </Col>
            </Row>

        </div>
    );

}
