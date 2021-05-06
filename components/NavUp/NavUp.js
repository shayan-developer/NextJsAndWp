import Link from 'next/link'
import React from 'react'
import styles from "./NavUp.module.css"

export default function NavUp() {
  return (
    <nav className={`navbar navbar-expand  ${styles.navUp}`}>
      <div className="container-fluid ">
        <Link href="/">
          <a className={`navbar-brand ${styles.brand}`}>
            GameTuBe
              </a>
        </Link>
        <ul className="navbar-nav  mb-2 mb-lg-0">
        <li className={`nav-item `}>
            <Link href="/about" >
              <a className={`nav-link active ${styles.navText}`} aria-current="page">
                درباره ما
          </a>
            </Link>
          </li>
          <li className={`nav-item `}>
            <Link href="/">
              <a className={`nav-link active ${styles.navText}`} aria-current="page">
                صفحه اصلی
              </a>
            </Link>
          </li>
          
        </ul>

      </div>
    </nav>
  )
}
