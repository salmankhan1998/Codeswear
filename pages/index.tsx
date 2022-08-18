import type { NextPage } from 'next'
import Head from 'next/head'
import Banner from '../components/Banner'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>CodesWear - Wear the code</title>
        <meta name="description" content="Codeswear.com - Wear the code" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner/>
    </div>
  )
}

export default Home
