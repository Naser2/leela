import Head from 'next/head'

import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { Reviews } from '@/components/Clients'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import leelasMainImg from '@/images/leelaMainImg.png'
import { motion, useScroll } from 'framer-motion'
import FadeInSection from '@/components/FadeInSection'

// function Component() {
//   const { scrollYProgress } = useScroll();

//   return (
//     <motion.div style={{ scaleX: scrollYProgress }} />
//   )
// }
export default function Home() {
  const { scrollYProgress } = useScroll()
  return (
    <>
      <Head>
        <title>Leela - Consultancy Service | Global Marketing.</title>
        <meta
          name="description"
          content="By leveraging insights from our network of industry insiders, you’ll know exactly when to buy to maximize profit, and exactly when to sell to avoid painful losses."
        />
      </Head>

      <motion.div
        className="progress-bar z-40 h-2 bg-sky-400/30"
        style={{ scaleX: scrollYProgress }}
      />
      <main className="overflow-hidden lg:mx-14 xl:px-24 ">
        <div
          id="intro"
          className="mx-auto ml-3 -mt-4 max-w-7xl justify-center  pb-4 pt-10 sm:-mt-24 sm:pb-10 md:px-14 lg:-mt-32 lg:mr-0  lg:mt-0 lg:ml-28 lg:flex  lg:px-16 lg:pt-40 xl:px-64 xl:pt-10 "
        >
          <div className="lg:max-w-9xl -mx-4 flex flex-none overflow-hidden transition-transform duration-500  lg:ml-64 ">
            <img
              src={leelasMainImg.src}
              alt="App screenshot"
              width={2432}
              height={1242}
              className="mt-10 aspect-[1216/640] sm:rounded-3xl md:mt-0"
              // className="aspect-[2400/1960] h-full   rounded-md  bg-white/5 ring-1 ring-white/10 lg:w-full xl:aspect-[2400/2060]"
            />
          </div>
        </div>{' '}
        {/* <FadeInSection> */}{' '}
        <div className="intro slid-wrapper first-slide animate-slideIn-section css-yln9tm mt-8  bg-gray-100 py-4 px-6 max-[800px]:top-[15%] sm:px-8 md:bg-transparent lg:absolute min-[1024px]:top-[38%] xl:-ml-10 xl:pt-20">
          <div className="max-w-24 flex ">
            <h2 className="max-w-24 flex  bg-slate-100/50 py-1.5 text-3xl text-slate-500 ">
              LEELA <br />
            </h2>
          </div>
          <h2 className="title -mt-4 text-slate-800/80">
            CONSULTANCY <br />
            SERVICE OFFERINGS
          </h2>
          <h1 className="title"> </h1>
        </div>{' '}
        <Hero />
        {/* <div class="mx-auto mt-20 max-w-7xl px-4 sm:mt-24 sm:px-6 md:px-8 lg:mt-32 lg:grid lg:grid-cols-12 lg:items-center lg:gap-8">
          <div
            id="left"
            class="relative col-span-5 col-start-1 row-start-1 -mt-10 xl:col-span-6"
          >
            LEFT{' '}
          </div>

          <div
            id="rigth"
            class="relative col-span-7 col-start-6 row-start-1 xl:col-span-6 xl:col-start-7"
          >
            RIGHT
          </div>
        </div> */}
      </main>
    </>
  )
}
