import { Card, Col, Row } from 'antd';
import dynamic from 'next/dynamic'
import Head from 'next/head';
import Link from 'next/link';
const Layout = dynamic(() => import("../../components/Layaout/Layout"))
import React from 'react'
import MyComment from '../../components/comment/comment';
import Parallelogram from '../../components/Parallelogram/Parallelogram';
import fetcher from '../../lib/fetcher';
import { GetComments, GetPostById, GetXboxSlugs } from '../../lib/Newspost'
import { RecentPost } from '../../lib/query';
import styles from "../../styles/xboxPost.module.css"
export default function XboxPost({ post ,comments,LastPosts}) {
    const MyLastPosts = LastPosts.data.posts.nodes
    const { Meta } = Card;
    const AllComments = comments.comments.nodes
    return (
        <Layout>
            <Head>
                <title>{post.title}</title>
            </Head>
            <article className={`my-5 sahel`}>
                <Card
                   className={styles.card}
                    title={<p className="rtl bold">{post.title}</p>}
                    cover={<img alt="بازی " src={post.featuredImage.node.sourceUrl} />}
                >
                    <Meta description={<div className={styles.text} dangerouslySetInnerHTML={{ __html: post.content }} />} />
                </Card>
            </article>
            <Parallelogram> مطالب مشابه </Parallelogram>
            <Row gutter={16}>
                    {MyLastPosts.map((post) => {
                        return <Col xs={24} md={8} key={post.id}>
                            <Card title={post.title}
                                className={styles.LastPost}
                                cover={<Link href={`/ps4/${post.slug}`} >
                                    <img className={styles.imgLast} src={post.featuredImage.node.sourceUrl} />
                                </Link>}
                                bordered={false}>
                            </Card>
                        </Col>
                    })}
                </Row>
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
    const vari = { name: "xbox" }
    const LastPosts = await fetcher(RecentPost, vari);
    return {
        props: { post,comments,LastPosts }
    }
}