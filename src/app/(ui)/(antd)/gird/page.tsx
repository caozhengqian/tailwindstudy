"use client";

import {Col, Row } from "antd";

export default function page() {

    return (
        <div>
            <Row justify="center" align="middle">
                <Col className={""} span={3} offset={1}>
                    <p>col-4</p>
                </Col>
            </Row>
        </div>
    )
}
