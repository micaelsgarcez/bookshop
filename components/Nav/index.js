import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import FadeIn from '../Motion/FadeIn'

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false)

  function toggleMenu(e) {
    e.preventDefault()
    setMenuOpen(!menuOpen)
  }

  return (
    <nav className='py-5 md:py-11 flex items-center justify-between'>
      <FadeIn direction='down' hero={true}>
        <div className='logo'>
          <Link href='/'>
            <h1 className='text-2xl font-bold'>Bookshop</h1>
          </Link>
        </div>
      </FadeIn>
      <ul
        className={`flex md:items-center fixed left-0 top-0 bg-white z-10 w-full h-screen md:w-auto md:h-auto pt-5 px-5 flex-col md:flex-row md:p-0 items-start md:relative ${
          menuOpen ? 'left-0' : 'left-[100%]'
        } transition-all duration-300 md:left-0`}
      >
        <li className='md:hidden self-end mb-12'>
          <a href='#' onClick={toggleMenu}>
            <Image
              src='/close.svg'
              layout='fixed'
              width={24}
              height={24}
            ></Image>
          </a>
        </li>
        <li>
          <FadeIn hero={true} direction='down' delay={0.05}>
            <a
              className='text-xs text-[#1C2A39] uppercase bold mr-[2.09vw] hover:text-[#1C2A39] transition-all duration-300 font-black '
              href='#'
            >
              Books
            </a>
          </FadeIn>
        </li>
        <li>
          <FadeIn hero={true} direction='down' delay={0.1}>
            <a
              className='text-xs text-[#5C6A79] uppercase bold mr-[2.09vw] hover:text-[#1C2A39] transition-all duration-300'
              href='#'
            >
              Audiobooks
            </a>
          </FadeIn>
        </li>
        <li>
          <FadeIn hero={true} direction='down' delay={0.15}>
            <a
              className='text-xs text-[#5C6A79] uppercase bold mr-[2.09vw] hover:text-[#1C2A39] transition-all duration-300'
              href='#'
            >
              Stationery & Gifts
            </a>
          </FadeIn>
        </li>
        <li>
          <FadeIn hero={true} direction='down' delay={0.2}>
            <a
              className='text-xs text-[#5C6A79] uppercase bold hover:text-[#1C2A39] transition-all duration-300'
              href='#'
            >
              Blog
            </a>
          </FadeIn>
        </li>
      </ul>
      <div className='flex items-center'>
        <FadeIn hero={true} direction='down' delay={0.25}>
          <a className='mr-[2.09vw]' href='#'>
            <Image
              src='/user.svg'
              layout='fixed'
              width={12}
              height={15}
            ></Image>
          </a>
        </FadeIn>
        <FadeIn hero={true} direction='down' delay={0.3}>
          <a className='mr-[2.09vw]' href='#'>
            <Image
              src='/search.svg'
              layout='fixed'
              width={15}
              height={14.71}
            ></Image>
          </a>
        </FadeIn>
        <FadeIn hero={true} direction='down' delay={0.35}>
          <a className='mr-[2.09vw] md:mr-0' href='#'>
            <Image
              src='/shop-bag.svg'
              layout='fixed'
              width={13.68}
              height={17}
            ></Image>
          </a>
        </FadeIn>
        <a className='md:hidden' href='#' onClick={toggleMenu}>
          <Image src='/menu.svg' layout='fixed' width={24} height={24}></Image>
        </a>
      </div>
    </nav>
  )
}
