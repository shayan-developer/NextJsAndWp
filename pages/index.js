import Head from 'next/head'
import { Button, Card } from 'antd';
import Header from '../components/Header/Header'
import Layout from '../components/Layaout/Layout'
import Parallelogram from '../components/Parallelogram/Parallelogram'
import styles from '../styles/Home.module.css'
import fetcher from '../lib/fetcher';
import { AllPost } from '../lib/query';
import Link from 'next/link';

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
                  hoverable
                  actions={[<Link href={`/ps4/${post.slug}`}><Button className={styles.btn} type="primary" shape="round">ادامه مطلب</Button></Link>]}
                  style={{ width: 500 }, { borderRadius: "0.5rem" }}
                  title={<div className="rtl">{post.title}</div>}
                  cover={<img alt="بازی " src={post.featuredImage.node.sourceUrl} />}
                >
                  <Meta  description={<div className={styles.textCard}  maxlength = "40" dangerouslySetInnerHTML={{ __html: post.content }} />} />
                </Card>
              </article>
            })}
      </Layout>
  )
}

export async function getStaticProps() {
  const res = await fetcher(AllPost);
  const data = res.data.posts.nodes;
  return {
    props: { data },
    revalidate: 1
  }
}