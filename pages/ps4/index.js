import React from 'react'
import Layout from '../../components/Layaout/Layout'
import styles from '../../styles/ps4.module.css'
import fetcher from '../../lib/fetcher';
import { Ps4Posts } from '../../lib/query';
import Link from 'next/link';
import Head from 'next/head'
import { Button, Card } from 'antd';
import Parallelogram from '../../components/Parallelogram/Parallelogram'
export default function Index({ data }) {
    const { Meta } = Card;
    return (
        <Layout>
            <Head>
                <title>اخبار ps4</title>
            </Head>
            <Parallelogram>ps4 اخبار</Parallelogram>
            {data.map(post => {
                return <article key={post.id} className={`${styles.card} sahel`}>
                    <Card
                        hoverable
                        title={<div className="rtl">{post.title}</div>}
                        actions={[<Link href={`/ps4/${post.slug}`}><Button className={styles.btn} type="primary" shape="round">ادامه مطلب</Button></Link>]}
                        style={{ width: 500 }, { borderRadius: "0.5rem" }}
                        cover={<img alt="بازی " src={post.featuredImage.node.sourceUrl} />}
                    >
                        <Meta  description={<div className={styles.textCard} dangerouslySetInnerHTML={{ __html: post.content }} />} />
                    </Card>
                    {console.log(post.title)}
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