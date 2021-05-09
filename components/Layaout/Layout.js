import React from 'react'
import Nav from '../Nav/Nav'
import NavUp from '../NavUp/NavUp'
import styles from "./Layout.module.css"
export default function Layout({ children, Header }) {
    return (
        <>
            <NavUp />
            {Header}
            <div className="container-fluid">
                <Nav />
                <div className="row justify-content-center mt-5">
                    <main className={`col-md-8 text-center ${styles.glass} ${styles.main}`}>
                        {children}
                    </main>
                    <aside className={`col-3 ${styles.aside}`}>

                    </aside>
                </div>

            </div>
        </>
    )
}