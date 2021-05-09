import { Card, Col, Row } from 'antd'
import React from 'react'
import fetcher from '../../lib/fetcher'
// import styles from "../../styles/Lastposts.module.css"
export default function Lastposts({name}) {
    return (
        <div className="site-card-wrapper my-5">
            <Row gutter={16}>
                <Col span={8}>
                    <Card title="Card title" bordered={false}>
                        Card content
        </Card>
                </Col>
                <Col span={8}>
                    <Card title="Card title" bordered={false}>
                        Card content
        </Card>
                </Col>
                <Col span={8}>
                    <Card title="Card title" bordered={false}>
                        Card content
        </Card>
                </Col>
            </Row>
        </div>
    )
}
export async function getStaticProps(params) {
const res = await fetcher(RecentPost);
const post
}