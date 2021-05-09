import Head from 'next/head'
import { Button, Card } from 'antd';
import Header from '../components/Header/Header'
import dynamic from "next/dynamic"
// import Layout from '../components/Layaout/Layout'
import Parallelogram from '../components/Parallelogram/Parallelogram'
import styles from '../styles/Home.module.css'
import fetcher from '../lib/fetcher';
import { AllPosts } from '../lib/query';
import Link from 'next/link';
const Layout=dynamic(()=>import("../components/Layaout/Layout"))
export default function Home({ data }) {
  const { Meta } = Card;
  return (
    <Layout Header={<Header />}>
      <Head>
        <title>گیم تیوب</title>
      </Head>
      <Parallelogram>آخرین مطالب</Parallelogram>
      {data.map(post => {

        return <article key={post.id} className={`${styles.card} sahel`}>
          <Card
            actions={[<Link href={`/${post.categories.nodes[0].name}/${post.slug}`}><Button className={styles.btn} type="primary" shape="round">ادامه مطلب</Button></Link>]}
            style={{ width: 500 },{overflow:"hidden"}}
            title={<h5 className="rtl">{post.title}</h5>}
            cover={<img alt="بازی "  src={post.featuredImage.node.sourceUrl} />}>
            <Meta description={<div className={styles.textCard} dangerouslySetInnerHTML={{ __html: post.content }} />} />
          </Card>
        </article>
      })}
    </Layout>
  )
}

export async function getStaticProps() {
  const res = await fetcher(AllPosts);
  const data = res.data.posts.nodes;
  return {
    props: { data },
    revalidate: 1
  }
}