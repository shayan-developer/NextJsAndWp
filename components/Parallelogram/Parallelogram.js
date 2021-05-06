import React from 'react'
import styles from "./Parallelogram.module.css"
export default function Parallelogram({ children }) {
    return (
        <div className={`row my-4`}>
            <div className={`col ${styles.col}`}>
                <div className={styles.Parallelogram}>
                    <span className={styles.text}> {children}</span>
                </div>
            </div>
        </div>
    )
}
