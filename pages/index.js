import Head from 'next/head'
import { Button, Card, Image } from 'antd';
import Header from '../components/Header/Header'
import dynamic from "next/dynamic"
import Parallelogram from '../components/Parallelogram/Parallelogram'
import styles from '../styles/Home.module.css'
import fetcher from '../lib/fetcher';
import { AllPosts } from '../lib/query';
import Link from 'next/link';
const Layout = dynamic(() => import("../components/Layaout/Layout"))
export default function Home({ data }) {
  const { Meta } = Card;
  return (
    <Layout Header={<Header />}>
      <Head>
        <title>گیم تیوب</title>
      </Head>
      <Parallelogram>آخرین مطالب</Parallelogram>
      {data.map(post => {

        return <article key={post.id} className={`sahel`}>
          <Card
            className={styles.card}
            title={<p className={`rtl bold ${styles.title}`}>{post.title}</p>}
            cover={<div className={styles.BoxImage}>
              <Link  href={`/${post.categories.nodes[0].name}/${post.slug}`}>
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
  const res = await fetcher(AllPosts);
  const data = res.data.posts.nodes;
  return {
    props: { data },
    revalidate: 1
  }
}