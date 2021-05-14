import { Card, Col, Image, Row } from 'antd'
import React from 'react'
import { GetId, GetPostById, GetComments } from '../../lib/Newspost'
import styles from "../../styles/ps4Post.module.css"
import Parallelogram from '../../components/Parallelogram/Parallelogram'
import MyComment from "../../components/comment/comment"
import Head from 'next/head'
import dynamic from 'next/dynamic'
import fetcher from '../../lib/fetcher'
import { RecentPost } from '../../lib/query'
import Link from 'next/link'
const Layout = dynamic(() => import("../../components/Layaout/Layout"))
export default function News({ post, comments, LastPosts }) {
    const { Meta } = Card;
    const AllComments = comments.comments.nodes
    const MyLastPosts = LastPosts.data.posts.nodes
    return (
        <Layout>
            <Head>
                <title>{post.title}</title>
            </Head>
            <article className={`my-5 sahel`}>
                <Row>
                    <Col>
                        <Card
                           className={styles.card}
                            cover={<img alt="بازی " src={post.featuredImage.node.sourceUrl} />}
                        >
                            <Meta description={<div className={styles.textCard} dangerouslySetInnerHTML={{ __html: post.content }} />} />
                        </Card>
                    </Col>
                </Row>
            </article>
            <Parallelogram> مطالب مشابه </Parallelogram>
            <div>
                <Row gutter={16}>
                    {MyLastPosts.map((post) => {
                        return <Col xs={24} md={8} key={post.id}>
                            <Card 
                                title={
                                    <Link href={`/ps4/${post.slug}`}>
                                    <p className={`rtl bold ${styles.title}`}>{post.title}</p>
                                    </Link>
                            }
                                className={styles.LastPost}
                                cover={<div className={styles.BoxImage}>
                                <Link href={`/ps4/${post.slug}`}>
                                    <Image preview={false} alt="بازی " className={styles.Imgcard} src={post.featuredImage.node.sourceUrl} />
                                </Link>
                                <p className={styles.textImg}>برای ادامه مطلب کلیک کنید</p>
                            </div>}
                                bordered={false}>
                            </Card>
                        </Col>
                    })}
                </Row>
            </div>
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
    const slug = await GetId()
    const paths = slug
    return {
        paths,
        fallback: false
    }
}
export async function getStaticProps({ params }) {
    const post = await GetPostById(params.ps4);
    const comments = await GetComments(params.ps4);
    const vari = { name: "ps4" }
    const LastPosts = await fetcher(RecentPost, vari);
    return {
        props: { post, comments, LastPosts }
    }
}