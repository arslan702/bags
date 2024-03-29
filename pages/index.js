import Head from 'next/head'
// import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import HomePage from './Home/HomePage'


export default function Home() {
  return (
    <>
      <Head>
        <title>ABC Bags</title>
        <meta name="description" content="Bags" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/next.svg" />
      </Head>
      <main className={styles.main}>
        <HomePage/>
      </main>
    </>
  )
}

// export async function getStaticProps() {
//   const response = await fetch('http://localhost:3000/api/product/get?page=1&size=4&field=hot&search=yes')
//   const data = await response.json()

//   return {
//     props: {
//       products: data,
//       newProducts: newData,
//     }
//   }
// }
