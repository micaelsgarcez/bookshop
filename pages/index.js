import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import Navigation from '/components/Nav'
import Banner from '/components/Banner'
import FadeIn from '/components/Motion/FadeIn'

export default function Home() {
  const products = [
    {
      imageUrl: '/cover.png',
      author: 'Kevin Kwan',
      name: 'Crazy rich asians',
      rating: 4,
      reviews: '252',
      excerpt:
        'the outrageously funny debut novel about three super-rich, pedigreed Chinese families and the gossip...',
      price: 24.12,
      discountPrice: 4.99,
      link: '#'
    },
    {
      imageUrl: '/cover-2.png',
      author: 'Margaret Atwood',
      name: 'The handmaid’s tale',
      rating: 4,
      reviews: '1,1M',
      excerpt: `This novel can be interpreted as a double narrative, Offred's tale and the handmaids' tales. The night...`,
      price: 18.99,
      discountPrice: 6.99,
      link: '#'
    },
    {
      imageUrl: '/cover-3.png',
      author: 'Aldous Huxley',
      name: 'Brave new world',
      rating: 4,
      reviews: '1,3M',
      excerpt:
        'dystopian novel written in 1931 by English author Aldous Huxley, and published in 1932. Largely set in...',
      price: 42.5,
      discountPrice: 12.43,
      link: '#'
    },
    {
      imageUrl: '/cover-4.png',
      author: 'Tara Westover',
      name: 'Educated',
      rating: 5,
      reviews: '364',
      excerpt:
        'It is a tale of fierce family loyalty and of the grief that comes with severing the closest of ties. With...',
      price: 34.2,
      discountPrice: 12.68,
      link: '#'
    },
    {
      imageUrl: '/cover-5.png',
      author: 'Marianne Fritz',
      name: 'The weight of things',
      rating: 4,
      reviews: '353',
      excerpt:
        'You discover not an eccentric fluke of literary nature but rather a brilliant and masterful satiris...',
      price: 34.2,
      discountPrice: 18.23,
      link: '#'
    },
    {
      imageUrl: '/cover-6.png',
      author: 'Chris Power',
      name: 'Mothers stories',
      rating: 1,
      reviews: '454',
      excerpt:
        'the stories in Mothers lay bare the emotional and psychic damage of life, love, and abandonment...',
      price: 20.76,
      discountPrice: 12.35,
      link: '#'
    }
  ]
  const categories = [
    {
      link: '#',
      label: 'Bestsellers'
    },
    {
      link: '#',
      label: 'Art & Fashion'
    },
    {
      link: '#',
      label: 'Biography'
    },
    {
      link: '#',
      label: 'Business'
    },
    {
      link: '#',
      label: `Children's`
    },
    {
      link: '#',
      label: 'Fiction & Poetry'
    },
    {
      link: '#',
      label: 'Education'
    },
    {
      link: '#',
      label: 'Film, TV & Drama'
    },
    {
      link: '#',
      label: 'Food & Drink'
    },
    {
      link: '#',
      label: 'Health & Wellbeing'
    },
    {
      link: '#',
      label: 'History & Politics'
    },
    {
      link: '#',
      label: 'Home & Garden'
    },
    {
      link: '#',
      label: `Languages with Grant`
    },
    {
      link: '#',
      label: 'Sport & Hobbies'
    },
    {
      link: '#',
      label: 'Travel & Maps'
    }
  ]

  return (
    <div className='overflow-hidden'>
      <Head>
        <title>Bookshop</title>
      </Head>

      <main className='container mx-auto max-w-[1152px] px-4'>
        <Navigation />
        <Banner />
        <section className='pt-20 md:pt-44 pb-24 flex items-start  flex-col md:flex-row'>
          <aside className='flex-none w-48 bg-before relative mb-10'>
            <ul>
              {categories.map((item, index) => (
                <li key={item.label} className='mb-6'>
                  <FadeIn direction='top' delay={0.05 * index}>
                    <a
                      className={`hover:text-[#1C2A39] transition-all duration-300 ${
                        item.label == 'Bestsellers'
                          ? 'pl-5 circle-before relative font-bold text-md text-[#1C2A39]'
                          : 'text-xs font-medium text-[#5C6A79] '
                      }`}
                      href={item.link}
                    >
                      {item.label}
                    </a>
                  </FadeIn>
                </li>
              ))}
            </ul>
          </aside>
          <div className='grid grid-cols-1 xl:grid-cols-2 gap-10 md:gap-20'>
            {products.map((item, index) => {
              let rating = []
              for (let i = 0; i < 5; i++) {
                if (i < item.rating) {
                  rating.push({ fill: true })
                } else {
                  rating.push({ fill: false })
                }
              }
              return (
                <div
                  key={item.name}
                  className='flex mb-5 max-w-md flex-col md:flex-row'
                >
                  <FadeIn
                    direction='top'
                    delay={0.1 * index}
                    className='flex-none relative w-[288px] md:w-52 h-[408px] md:h-[300px] shadow-promo mb-8 md:mb-0 md:mr-9'
                  >
                    <Image src={item.imageUrl} layout='fill'></Image>
                  </FadeIn>
                  <FadeIn direction='top' delay={0.1 * index}>
                    <h3 className='open-sans text-[#5C6A79] text-xs mb-1'>
                      {item.author}
                    </h3>
                    <h2 className='font-bold text-[#1C2A39] text-md mb-1'>
                      {item.name}
                    </h2>
                    <div className='flex items-center mb-4'>
                      <div>
                        {rating.map((item) => (
                          <Image
                            key={Math.random()}
                            src={item.fill ? '/star.svg' : '/star-gray.svg'}
                            layout='fixed'
                            width={12}
                            height={12}
                          />
                        ))}
                      </div>
                      <p className='open-sans text-[#5C6A79] text-xs ml-2'>
                        252 review
                      </p>
                    </div>
                    <p className='open-sans text-[#5C6A79] text-xs mb-4'>
                      the outrageously funny debut novel about three super-rich,
                      pedigreed Chinese families and the gossip...
                    </p>
                    <div className='flex items-center mb-4'>
                      <p className='font-bold text-[#1C2A39] text-sm mr-2'>
                        $4.99
                      </p>
                      <p className='font-semibold text-[#BDBDBD] text-sm line-through'>
                        $24.12
                      </p>
                    </div>
                    <a
                      className='border border-[#4C3DB2] py-4 w-full block text-center text-[#4C3DB2] font-bold uppercase text-xs hover:bg-[#4C3DB2] hover:text-white transition-all duration-300'
                      href='#'
                    >
                      Buy Now
                    </a>
                  </FadeIn>
                </div>
              )
            })}
          </div>
        </section>
      </main>
    </div>
  )
}
