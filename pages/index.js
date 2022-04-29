import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import Navigation from '/components/Nav'
import Banner from '/components/Banner'

export default function Home() {
  return (
    <div className='overflow-hidden'>
      <Head>
        <title>Bookshop</title>
      </Head>

      <main className='container mx-auto max-w-[1152px] px-4'>
        <Navigation />
        <Banner />
      </main>
    </div>
  )
}
