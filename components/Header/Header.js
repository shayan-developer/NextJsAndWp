import React from 'react'
import styles from "./Header.module.css"
import { Carousel, Image } from 'antd';
const contentStyle = {
    height: '90vh',
    width: "100%",
    color: '#fff',
    borderRadius: '1rem',
    textAlign: 'center',
};
export default function Header() {
    return (
        <header className={`row w-100 mx-0 justify-content-center`}>
            <div className={`col-12 w-100 p-0 `}>
                <Carousel  autoplay effect="fade" >
                    <div>
                        <div style={contentStyle}>
                            <Image  className={styles.image} src="../re.jpg" preview={false} />
                        </div>
                        <div className={styles.box}>
                            <h3 className={styles.text}>سیستم مورد نیاز مشخص شد</h3>
                        </div>
                    </div>

                    <div className={styles.item}>
                        <div style={contentStyle}>
                            <Image className={styles.image} src="../battlefield6.jpg" preview={false} />
                        </div>
                        <div className={styles.box}>
                            <h3 className={styles.text}>سیستم مورد نیاز مشخص شد</h3>
                        </div>
                    </div>

                    <div>
                        <div style={contentStyle}>
                            <Image className={styles.image} src="../lastofus.jpg" preview={false} />
                        </div>
                        <div className={styles.box}>
                            <h3 className={styles.text}>سیستم مورد نیاز مشخص شد</h3>
                        </div>
                    </div>
                </Carousel>
            </div>
        </header>
    )
}
