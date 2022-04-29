import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Bookshop</title>
      </Head>

      <main>
        <h1 className='text-3xl font-bold underline'>Hello world!</h1>
      </main>
    </div>
  )
}
