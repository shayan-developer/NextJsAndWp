import React, { createElement, useState } from 'react';
import { Avatar, Divider } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import styles from "./comment.module.css"
export default function MyComment({ photo, name, children }) {
    return (
        <div className={styles.box} >
            <Divider style={{ borderWidth: 2, borderColor: '#188FFE', color: '#188FFE' }} orientation="right">
                <div className={styles.info}>
                     <span>{name} </span>
                     <Avatar size={{xs:40, sm:40,md:50, lg:50}}  icon={photo || <UserOutlined />} /> 
                </div>
            </Divider>
            <div className={`${styles.text} sahel`}
                dangerouslySetInnerHTML={{ __html: children }}
            />
        </div>
    )
};