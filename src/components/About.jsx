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

import project1 from '@/images/projects-1.png'
import project2 from '@/images/projects-2.png'
import project3 from '@/images/projects-3.png'
import project4 from '@/images/projects-4.png'
import projectXl1 from '@/images/projects-xl-1.png'
import projectXl2 from '@/images/projects-xl-1.png'

import clsx from 'clsx'
import FadeInSection from './FadeInSection'
import Image from 'next/image'
import { Container } from './Container'

export default function About() {
  return (
    <div className="relative mb-0 mt-24 py-6 lg:py-4 ">
      <div className="max-w-8xl  mx-6 mx-auto px-4 sm:px-6 lg:mx-16 lg:px-8">
        <div classNAme="mx-auto pb-4  text-center  ">
          <span class="pb-4">
            <h2
              className="text-left text-2xl font-extrabold "
              style={{ letterSpacing: '0.1em' }}
            >
              ABOUT
            </h2>
          </span>
        </div>
        <p className="text-2 font_4 !text-black ">
          <span className="lg:inline-flex">
            <div className="mt-[0.6rem] inline-flex">
              <span>
                <h3 style={{ letterSpacing: '0.1em' }}>
                  <FadeInSection>
                    Introducing Leela, the marketing consultancy
                  </FadeInSection>
                </h3>
              </span>
            </div>
          </span>
        </p>
      </div>

      <div className="max-w-8xl  mx-auto sm:mt-16 lg:px-8">
        <div className="relative overflow-hidden px-4 py-20 shadow-xl sm:px-10 sm:py-24 md:px-12 lg:px-[3.4rem]">
          {/* <img
            className="absolute inset-0 h-full w-full object-cover brightness-150 saturate-0"
            src="https://images.unsplash.com/photo-1601381718415-a05fb0a261f3?ixid=MXwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8ODl8fHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1216&q=80"
            alt=""
          /> */}
          {/* <div className="absolute inset-0 bg-gray-900/90 mix-blend-multiply" /> */}
          {/* <div
            className="absolute -left-80 -top-56 transform-gpu blur-3xl"
            aria-hidden="true"
          >
            // <div
            //   className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-r from-[#ff4694] to-[#776fff] opacity-[0.45]"
            //   style={{
            //     clipPath:
            //       'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            //   }}
            // />
          </div> */}
          <div
            className="hidden md:absolute md:bottom-16 md:left-[50rem] md:block md:transform-gpu md:blur-3xl"
            aria-hidden="true"
          >
            <div
              className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-r from-[#ff4694] to-[#776fff] opacity-25"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
          <div className="max-w-8xl relative mx-auto -mt-14 px-6 lg:mx-0  lg:px-0 ">
            {/* <img
              className="h-12 w-auto"
              src="https://tailwindui.com/img/logos/workcation-logo-white.svg"
              alt=""
            /> */}
            <figure>
              <p className="animate-fadeIn paragraph  text-sm lg:text-2xl">
                <span style={{ letterSpacing: '0.1em' }} className="">
                  &quot;Leela is committed to transforming your brand and
                  elevating your product strategy. With a team of experts in
                  branding, product development, and digital marketing. Soma L.
                  Choudhury is the founder of Leela and has extenssive
                  experience in helping businesses achoive their objectives. She
                  understands that every brand is unique and requires a
                  customized approach to stand out in today&apos;s crowded
                  market. That&apos;s why Soma and her team of specialists will
                  work with you to create a tailored strategy that will enhance
                  your brand&apos;s identity, improve your product offering, and
                  connect with your target audience. Leela &apos; mission is to
                  deliver measurable results that exceed your expectations and
                  provide you with a competitive edge. With Soma as Brand
                  Director & Senior marketing executive experience, you&apos;re
                  set to unleash your brand&apos;s full potential.&quot;
                </span>
              </p>
              <div id="about-cta" className="mt-14 mb-1 ">
                <Link
                  href="/about"
                  className="!css-n6s3hr  !bg-black px-3 !px-4 !py-3  uppercase text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400 group-hover:!bg-blue-500"
                >
                  Read more <span aria-hidden="true">→</span>
                </Link>
              </div>

              <figcaption className="mt-6 text-base text-white">
                <div className="font-semibold">Judith Black</div>
                <div className="mt-1">CEO of Tuple</div>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>

      {/* <div class="lg:mt-0 lg:px-4  ">
        <div className="animate-fadeIn team-member-details group relative  w-[100%] bg-slate-100/80 px-6 pt-6 pb-6 min-[600px]:hidden lg:bottom-20 lg:bg-slate-100/90 lg:py-0   lg:pl-14 min-[1400px]:px-14 min-[1600px]:px-24">
          <FadeInSection>
            <div class="mx-auto max-w-3xl pb-2  text-center ">
              <span class=" ">
                <h2
                  className="text-left text-2xl font-extrabold "
                  style={{ letterSpacing: '0.1em' }}
                >
                  ABOUT
                </h2>
              </span>
            </div>
          </FadeInSection>

          <p className="animate-fadeIn paragraph  text-sm lg:text-2xl">
            <span>
              <FadeInSection></FadeInSection>
              &quot;Introducing Leela, the marketing consultancy that is
              committed to transforming your brand and elevating your product
              strategy. With a team of experts in branding, product development,
              and digital marketing, Leela is the partner you need to achieve
              your business objectives. We understand that every brand is unique
              and requires a customized approach to stand out in today&apos;s
              crowded market. That&apos;s why our team of specialists will work
              with you to create a tailored strategy that will enhance your
              brand&apos;s identity, improve your product offering, and connect
              with your target audience. Our mission is to deliver measurable
              results that exceed your expectations and provide you with a
              competitive edge. Let Leela guide you to success and help you
              unleash your brand&apos;s full potential.&quot;
            </span>
          </p>
          <div id="about-cta" className="mt-4 mb-1 ">
            <Link
              href="/about"
              className="!css-n6s3hr  !bg-black px-3 !px-4 !py-3  uppercase text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400 group-hover:!bg-blue-500"
            >
              Read more <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
        <div className="animate-fadeIn team-member-details   bg-slate-100/80 px-6 py-6 max-[600px]:hidden lg:bg-slate-100/90 lg:py-0 lg:pl-14 min-[1400px]:px-14 min-[1600px]:px-24">
          <FadeInSection>
            {' '}
            <h1 class="member-name !mb-4 pb-3 ">
              <span>Soma Lisa Choudhury</span>
            </h1>
          </FadeInSection>

          <p className="animate-fadeIn paragraph text-sm lg:text-2xl">
            <span>
              Soma L. Choudhury, has extensive experience as a senior marketing
              executive with global experience in building, launching, and
              growing businesses, brands, and products. Soma brings years of
              experience leading, managing, advising, and cultivating various
              global renowned brands in fashion, beauty &amp; consumer packaged
              goods.
            </span>
          </p>
          <div id="about-cta" className="lg:my-14 ">
            <Link
              href="/about"
              className="!css-n6s3hr  !bg-black px-3 px-3.5 !py-3  uppercase text-white shadow-sm hover:!bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
            >
              Read more <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div> */}
    </div>
  )
}

const Gallery = ({ projects, grid }) => {
  return (
    <section
      className={
        (grid ? 'max-w-none' : 'max-w-lg',
        ' dark:crisp-black min-[1391px]:-pt-24 rounded-sm bg-gray-100 px-8 pt-6 md:mx-4 md:mt-1 md:rounded-lg  lg:bg-white lg:px-0  min-[1391px]:px-8 min-[1591px]:px-12 ')
      }
      id={`projects-media-gallery-`}
      aria-label="Newsletter"
      //   link={socialsRef}
    >
      {/* <Container className="mx-0 rounded-sm px-4  pt-2 sm:px-0 md:rounded-lg lg:mt-8 lg:px-6 lg:px-2 lg:pt-4 lg:pb-8"> */}
      <div role="list" className="dark:highlight-white/10 rounded-t-xl">
        {/* dark:border-indigo-500/20 */}
        <div>
          <h2 class="max-w-64 pb-4 text-2xl font-semibold text-slate-600  md:order-first md:pb-0">
            PROJECTS
          </h2>
          <div class="max-w-24 flex  border-b border-sky-400 pb-4 font-semibold" />
        </div>
        <ul
          role="list"
          className={[grid ? grid : ' grid grid-cols-3 gap-x-4 gap-y-4 py-4']}
        >
          {projects.map((img) => {
            return (
              <li key={img.url} className="relative">
                <div
                  className={clsx(
                    img.current
                      ? 'ring-2 ring-indigo-500 ring-offset-2'
                      : 'focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100',
                    'aspect-w-14 aspect-h-14 group block w-full overflow-hidden  rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100'
                  )}
                >
                  <Image
                    src={img.url ?? img}
                    alt=""
                    className={clsx(
                      img.current ? '' : 'group-hover:opacity-75',
                      'pointer-events-none object-cover'
                    )}
                    width={grid ? 400 : 200}
                    height={grid ? 400 : 200}
                  />
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

const xxLprojects = [
  { url: project2.src },
  { url: project1.src },

  { url: projectXl1.src },
  { url: projectXl2.src },
  { url: project4.src },
  { url: project3.src },
  { url: project4.src },
  { url: project3.src },
  //   { url: project4.src },
  //   { url: project4.src },
  //   { url: project1.src },
  //   { url: project4.src },
  //   { url: project1.src },

  //   { url: 'New Business/ Brand/ Product Launches' },
  //   { url: 'New Business/ Brand/ Product Launches' },
]

const projects = [
  { url: project1.src },
  { url: project2.src },
  { url: project3.src },
  { url: project4.src },
  { url: project3.src },
  { url: project4.src },
  //   { url: 'New Business/ Brand/ Product Launches' },
  //   { url: 'New Business/ Brand/ Product Launches' },
]
const xLprojects = [
  { url: project1.src },
  { url: project2.src },
  { url: project3.src },
  { url: project4.src },
  { url: project3.src },
  { url: project4.src },
  { url: project3.src },
  { url: project4.src },

  //   { url: 'New Business/ Brand/ Product Launches' },
  //   { url: 'New Business/ Brand/ Product Launches' },
]
