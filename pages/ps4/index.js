import React from 'react'
import styles from '../../styles/ps4.module.css'
import fetcher from '../../lib/fetcher';
import { Ps4Posts } from '../../lib/query';
import Link from 'next/link';
import Head from 'next/head'
import { Button, Card, Image } from 'antd';
import Parallelogram from '../../components/Parallelogram/Parallelogram'
import dynamic from 'next/dynamic';
const Layout = dynamic(() => import("../../components/Layaout/Layout"))
export default function Index({ data }) {
    const { Meta } = Card;
    return (
        <Layout>
            <Head>
                <title>اخبار ps4</title>
            </Head>
            <Parallelogram>ps4 اخبار</Parallelogram>
            {data.map(post => {
                return <article key={post.id} className={` sahel`}>
                    <Card
                        title={<p className={`rtl bold ${styles.title}`}>{post.title}</p>}
                        className={styles.card}
                        cover={<div className={styles.BoxImage}>
                            <Link href={`/ps4/${post.slug}`}>
                                <Image preview={false} alt="بازی " className={styles.Imgcard} src={post.featuredImage.node.sourceUrl} />
                            </Link>
                            <p className={styles.textImg}>برای ادامه مطلب کلیک کنید</p>
                        </div>}
                        >
                        <Meta description={<div className={styles.textCard} dangerouslySetInnerHTML={{ __html: post.content }} />} />
                    </Card>
                </article>
            })}
        </Layout>
    )
}
export async function getStaticProps() {
    const res = await fetcher(Ps4Posts);
    const data = res.data.posts.nodes;
    return {
        props: { data },
        revalidate: 1
    }
}