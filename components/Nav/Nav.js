import React, { useState } from 'react'
import Link from 'next/link'
import styles from "./Nav.module.css"
import { Menu, Button } from 'antd';
import { useRouter } from 'next/router';
import { FaPlaystation,FaXbox ,FaDesktop} from "react-icons/fa";
import {
  HomeOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';



export default function Nav (){
 const [collapsed,Setcollapsed]=useState(false)
 const router = useRouter()
 const toggleCollapsed = () => {
    Setcollapsed(!collapsed);
  };
 const checkRout = () => {
    switch (router.pathname) {
      case "/":
        return ['1']
      case "/news":
        return ['2']
        case "/xbox":
          return["3"]
      default:
        return ['2']
    }
  }
    return (
      <nav style={{ width: 256 }} className={styles.navigation}>
        <Button type="primary" onClick={toggleCollapsed} style={{ marginBottom: 16 }}>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
        </Button>
        <Menu
          className={styles.menu}
          defaultSelectedKeys={checkRout()}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          inlineCollapsed={collapsed}
        >
          <Menu.Item key="1" icon={<HomeOutlined />}>
            <Link href="/"> صفحه اصلی </Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<FaPlaystation />}>
            <Link href="/ps4"> PS4 </Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<FaXbox />}>
          <Link href="/xbox"> XBOX </Link>
             </Menu.Item>
          <Menu.Item key="4" icon={<FaDesktop />}> PC </Menu.Item>

        </Menu>
      </nav>
    )
}
