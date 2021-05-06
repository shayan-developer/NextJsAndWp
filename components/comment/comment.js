import React, { createElement, useState } from 'react';
import { Avatar, Divider } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import styles from "./comment.module.css"
export default function MyComment({photo,name,children,key}) {
    return (
        <div className={styles.box} key={key}>
            <Divider style={{ borderWidth: 2, borderColor: '#188FFE' ,color:'#188FFE'}} orientation="right">
{name} <Avatar size={55} icon={photo||<UserOutlined />} />
            </Divider>
            <div className={`${styles.text} sahel`}   
            dangerouslySetInnerHTML={{__html:children}}
            />
        </div>
    )
};