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
                return <article key={post.id} className={` sahel`} >
                    <Card
                        title={<p className="rtl bold">{post.title}</p>}
                        className={styles.card}
                        cover={<div className={styles.BoxImage}>
                            <Link href={`/xbox/${post.slug}`}>
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

export default Index

export async function getStaticProps() {
    const res = await fetcher(XboxPosts);
    const posts = res.data.posts.nodes;
    return {
        props: { posts },
        revalidate: 1
    }

}