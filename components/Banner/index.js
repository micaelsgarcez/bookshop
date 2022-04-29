import Image from 'next/image'

export default function Banner() {
  return (
    <section className='block relative'>
      <Image
        src='/banner.png'
        layout='responsive'
        width={1120}
        height={702}
        quality={100}
      ></Image>
      <a
        href='#'
        className='block absolute top-[4.15vw] right-4 2xl:left-[55.05vw]'
      >
        <div className='block w-[111.75px] h-[153px] lg:w-[149px] lg:h-[204px] relative shadow-promo'>
          <Image src='/promo-1.png' layout='fill' quality={100}></Image>
        </div>
      </a>
      <a
        href='#'
        className='block absolute bottom-[3.65vw] right-4 2xl:right-[-1.2vw] 2xl:translate-x-[100%]'
      >
        <div className='block w-[102.75px] h-[204.75px] lg:w-[137px] lg:h-[273px] relative shadow-promo'>
          <Image src='/promo-2.png' layout='fill' quality={100}></Image>
        </div>
      </a>
    </section>
  )
}
