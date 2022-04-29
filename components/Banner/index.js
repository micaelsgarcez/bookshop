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
        className='shadow-promo block absolute top-[4.15vw] left-[55.05vw]'
      >
        <Image
          src='/promo-1.png'
          layout='fixed'
          width={149}
          height={204}
          quality={100}
        ></Image>
      </a>
      <a
        href='#'
        className='shadow-promo block absolute bottom-[3.65vw] right-[-1.2vw] translate-x-[100%]'
      >
        <Image
          src='/promo-2.png'
          layout='fixed'
          width={137}
          height={273}
          quality={100}
        ></Image>
      </a>
    </section>
  )
}
