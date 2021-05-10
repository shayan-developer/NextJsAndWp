import { Col, Row, Button } from 'antd'
import Head from"next/head"
import Link from 'next/link'
import React from 'react'
import Layout from '../components/Layaout/Layout'
import styles from "../styles/Custom404.module.css"
export default function Custom404() {
    return (
        <Layout>
            <Head>
                <title>صفحه یافت نشد</title>
            </Head>
            <Row className={styles.row} justify='center' align="center">
                <Col className={styles.col} span={24}>
                    <div className={`${styles.box} sahel`}>
                        <p className={styles.code}>404!</p>
                        <p className={styles.text}> صفحه مورد نظر یافت نشد</p>
                        <Link href="/" >
                            <Button className={styles.Link} type="primary" shape="round">صفحه اصلی </Button>
                        </Link>
                    </div>
                </Col>
            </Row>
        </Layout>
    )
}
