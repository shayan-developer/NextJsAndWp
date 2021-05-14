import { Col, Row } from 'antd'
import React from 'react'
import { FaInstagram, FaFacebook, FaTelegram } from "react-icons/fa"
import styles from "./Footer.module.css"
export default function Footer() {
    return (
        <footer>
            <Row>
                <Col span={24}>
                    <div className={styles.Footer}>
                        <p className={styles.text}>تمامی حقوق متعلق به وبسایت گیم تیوب می باشد </p>
                        <div className={styles.icons}>
                            <a className={styles.insta}><FaInstagram /></a>
                            <a className={styles.facebook}> <FaFacebook /></a>
                            <a className={styles.telegram}><FaTelegram /></a>
                        </div>
                    </div>
                </Col>
            </Row>
        </footer>
    )
}
