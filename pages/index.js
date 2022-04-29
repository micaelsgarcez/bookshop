import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Bookshop</title>
      </Head>

      <main className='container mx-auto max-w-[1152px] px-4'>
        <nav className='py-11 flex items-center justify-between'>
          <div className='logo'>
            <Link href='/'>
              <h1 className='text-2xl font-bold'>Bookshop</h1>
            </Link>
          </div>
          <ul className='flex items-center'>
            <li>
              <a
                className='text-xs text-[#1C2A39] uppercase bold mr-[2.09vw] hover:text-[#1C2A39] transition-all duration-300 font-black '
                href='#'
              >
                Books
              </a>
            </li>
            <li>
              <a
                className='text-xs text-[#5C6A79] uppercase bold mr-[2.09vw] hover:text-[#1C2A39] transition-all duration-300'
                href='#'
              >
                Audiobooks
              </a>
            </li>
            <li>
              <a
                className='text-xs text-[#5C6A79] uppercase bold mr-[2.09vw] hover:text-[#1C2A39] transition-all duration-300'
                href='#'
              >
                Stationery & Gifts
              </a>
            </li>
            <li>
              <a
                className='text-xs text-[#5C6A79] uppercase bold hover:text-[#1C2A39] transition-all duration-300'
                href='#'
              >
                Blog
              </a>
            </li>
          </ul>
          <div className='flex items-center'>
            <a className='mr-[2.09vw]' href='#'>
              <Image
                src='/user.svg'
                layout='fixed'
                width={12}
                height={15}
              ></Image>
            </a>
            <a className='mr-[2.09vw]' href='#'>
              <Image
                src='/search.svg'
                layout='fixed'
                width={15}
                height={14.71}
              ></Image>
            </a>
            <a href='#'>
              <Image
                src='/shop-bag.svg'
                layout='fixed'
                width={13.68}
                height={17}
              ></Image>
            </a>
          </div>
        </nav>
      </main>
    </div>
  )
}
