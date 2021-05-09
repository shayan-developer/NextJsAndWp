import { Button, Card,Image} from 'antd'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import React from 'react'
import Parallelogram from '../../components/Parallelogram/Parallelogram'
import fetcher from '../../lib/fetcher'
import { XboxPosts } from '../../lib/query'
import styles from "../../styles/XboxPosts.module.css"
const Layout = dynamic(() => import("../../components/Layaout/Layout"))
function Index({ posts }) {
    const { Meta } = Card;
    return (
        <Layout>
            <Parallelogram> XBOX اخبار</Parallelogram>
            {posts.map((post) => {
                return <article key={post.id} className={`${styles.card} sahel`} >
                    <Card
                        title={<h5 className="rtl">{post.title}</h5>}
                        actions={[<Link href={`/xbox/${post.slug}`}><Button className={styles.btn} type="primary" shape="round">ادامه مطلب</Button></Link>]}
                        style={{ width: 500 }, { borderRadius: "0.5rem" }}
                        cover={<Image alt="بازی "  src={post.featuredImage.node.sourceUrl}
                        preview={false} />}
                    >
                        <Meta description={<div className={styles.textCard} dangerouslySetInnerHTML={{ __html: post.content }} />} />
                    </Card>
                </article>
            })}
        </Layout>
    )
}

export default Index

export async function getStaticProps() {
    const res = await fetcher(XboxPosts);
    const posts = res.data.posts.nodes;
    return {
        props: { posts },
        revalidate: 1
    }

}