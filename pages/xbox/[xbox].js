import { Card } from 'antd';
import dynamic from 'next/dynamic'
import Head from 'next/head';
const Layout = dynamic(() => import("../../components/Layaout/Layout"))
import React from 'react'
import MyComment from '../../components/comment/comment';
import Parallelogram from '../../components/Parallelogram/Parallelogram';
import { GetComments, GetPostById, GetXboxSlugs } from '../../lib/Newspost'
import styles from "../../styles/xboxPost.module.css"
export default function XboxPost({ post ,comments}) {

    const { Meta } = Card;
    const AllComments = comments.comments.nodes
    return (
        <Layout>
            <Head>
                <title>{post.title}</title>
            </Head>
            <article className={`my-5 sahel`}>
                <Card
                    style={{ width: 500 }, { borderRadius: "0.5rem" }}
                    title={<h5 className="rtl">{post.title}</h5>}
                    cover={<img alt="بازی " src={post.featuredImage.node.sourceUrl} />}
                >
                    <Meta description={<div className={styles.text} dangerouslySetInnerHTML={{ __html: post.content }} />} />
                </Card>
            </article>
            <Parallelogram>دیدگاه کاربران</Parallelogram>

            <div className={styles.commentCount}>
                تعداد دیدگاه های کاربران {comments.commentCount || 0}
            </div>
            {AllComments.map((comment) => {
                return <MyComment
                    key={comment.id}
                    name={comment.author.node.name}
                >
                    {comment.content}
                </MyComment>
            })}
        </Layout>
    )
}

export async function getStaticPaths() {
    const res = await GetXboxSlugs()
    const paths = res;
    return {
        paths,
        fallback: false
    }

}
export async function getStaticProps({ params }) {
    const post = await GetPostById(params.xbox);
    const comments=await GetComments(params.xbox);
    return {
        props: { post,comments }
    }
}