import somaAbout from '@/images/soma-about-image.png'
import Link from 'next/link'
import {
  motion,
  useAnimationFrame,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion'
import FadeInSection from './FadeInSection'

export default function About() {
  return (
    <div class="hero-content mt-14 bg-gray-50 py-6 lg:py-14 ">
      <div class="mx-auto max-w-3xl text-center">
        <h2 class="text-base font-semibold leading-7 text-blue-400  lg:text-xl ">
          About
        </h2>
      </div>
      <h1 class="mt-2 px-6 text-left text-center text-4xl font-bold tracking-tight text-black sm:text-6xl  lg:mt-10  lg:pb-10 ">
        THE FOUNDER.
      </h1>

      <div class="flex grid-cols-2 flex-col lg:grid lg:grid lg:px-14 ">
        <div class="row">
          <div class="col-12">
            <img
              src={somaAbout.src}
              alt="App screenshot"
              width={432}
              height={1242}
              className="about-banner [aspect-[552/640;] mt-10 sm:rounded-3xl md:mt-0"
              // className="aspect-[2400/1960] h-full   rounded-md  bg-white/5 ring-1 ring-white/10 lg:w-full xl:aspect-[2400/2060]"
            />
            {/* <div class="hero-content-inner">
              <div class="left-content">
                <h4 class="hero-subheading">Let&apos;s Meet</h4>
                <h1 class="hero-heading">Soma Choudhury</h1>{' '}
              </div>
              <div class="right-content"></div>
            </div> */}
          </div>
        </div>{' '}
        <div className="animate-fadeIn team-member-details px-6 py-6 lg:px-24 min-[1400px]:px-14 min-[1600px]:px-24">
          <FadeInSection>
            {' '}
            <h1 class="member-name pb-4 ">
              <span>Soma Lisa Choudhury</span>
            </h1>
            {/* <h1 class="mt-2 mt-10 px-6 text-left text-4xl font-bold tracking-tight text-black sm:text-6xl ">
          THE FOUNDER.
        </h1> */}
            <p className="animate-fadeIn paragraph lg:text-2xl">
              <span style={{ fontWeight: '400' }}>
                Soma L. Choudhury, has extensive experience as a senior
                marketing executive with global experience in building,
                launching, and growing businesses, brands, and products. Soma
                brings years of experience leading, managing, advising, and
                cultivating various global renowned brands in fashion, beauty
                &amp; consumer packaged goods. She collaborates with WHTWRKS
                clients to define long-term visions, goals and strategies.
                Additionally, Soma provides strategic guidance and tactical
                services to our team while creating marketing plans designed to
                help acquire and retain customers for each client.
              </span>
            </p>
            <div id="about-cta" className="mt-6 ">
              <Link
                href="/about"
                class=" bg-blue-500 px-3.5 py-3 text-xl  text-sm font-semibold text-white shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
              >
                Read more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </FadeInSection>
        </div>
      </div>
    </div>
  )
}
