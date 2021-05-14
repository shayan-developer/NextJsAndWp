import React from 'react'
import styles from "./Header.module.css"
import { Carousel, Image } from 'antd';
const contentStyle = {
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
                            <p className={styles.text}>سیستم مورد نیاز مشخص شد</p>
                        </div>
                    </div>

                    <div className={styles.item}>
                        <div style={contentStyle}>
                            <Image className={styles.image} src="../battlefield6.jpg" preview={false} />
                        </div>
                        <div className={styles.box}>
                            <p className={styles.text}>سیستم مورد نیاز مشخص شد</p>
                        </div>
                    </div>

                    <div>
                        <div style={contentStyle}>
                            <Image className={styles.image} src="../lastofus.jpg" preview={false} />
                        </div>
                        <div className={styles.box}>
                            <p className={styles.text}>سیستم مورد نیاز مشخص شد</p>
                        </div>
                    </div>
                </Carousel>
            </div>
        </header>
    )
}
