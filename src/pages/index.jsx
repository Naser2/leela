import Head from 'next/head'

import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Contact, Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { Clients, Reviews } from '@/components/Clients'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import leelasMainImg from '@/images/leelaMainImg.png'
import { motion, useScroll } from 'framer-motion'
import FadeInSection from '@/components/FadeInSection'
import { SectionHero } from '@/components/SectionHero'
import About from '@/components/About'
import LandingGallery from '@/components/LandingGallery'

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
        <SectionHero />
        <About />
        <LandingGallery />
        <Clients />
        {/* <Contact /> */}
      </main>
    </>
  )
}
