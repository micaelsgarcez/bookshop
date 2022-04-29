import Image from 'next/image'

import FadeIn from '../Motion/FadeIn'

export default function Banner() {
  return (
    <section className='block relative'>
      <FadeIn direction='top' delay={0.4}>
        <Image
          src='/banner.png'
          layout='responsive'
          width={1120}
          height={702}
          quality={100}
        ></Image>
      </FadeIn>
      <FadeIn delay={0.45}>
        <a
          href='#'
          className='block absolute top-2 md:top-[4.15vw] right-2 md:right-4 2xl:left-[55.05vw]'
        >
          <div className='block w-[52.15px] h-[71.4px] md:w-[111.75px] md:h-[153px] lg:w-[149px] lg:h-[204px] relative shadow-promo'>
            <Image src='/promo-1.png' layout='fill' quality={100}></Image>
          </div>
        </a>
      </FadeIn>
      <FadeIn delay={0.5}>
        <a
          href='#'
          className='block absolute bottom-2 md:bottom-[3.65vw] right-2 md:right-4 2xl:right-[-1.2vw] 2xl:translate-x-[100%]'
        >
          <div className='block w-[47.95px] h-[95.55px] md:w-[102.75px] md:h-[204.75px] lg:w-[137px] lg:h-[273px] relative shadow-promo'>
            <Image src='/promo-2.png' layout='fill' quality={100}></Image>
          </div>
        </a>
      </FadeIn>
    </section>
  )
}
