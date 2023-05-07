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

export default function About() {
  return (
    <div className="relative -mt-10 mb-0 py-6 lg:py-4">
      {/* <div class="mx-auto max-w-3xl text-center">
        <span class="md:px-0">
          <h2 class="" style={{ letterSpacing: '0.1em' }}>
            ABOUT
          </h2>
        </span>
      </div> */}

      <div class="lg:mt-0 lg:px-4  ">
        <div class="row mt-2  ">
          <div class="col-12">
            <img
              src={somaAbout.src}
              alt="App screenshot"
              width={1832}
              height={1242}
              className="about-banner maspect-[552/640] mt-10 object-cover object-center  md:mt-0"
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
        <div className="animate-fadeIn team-member-details group absolute bottom-10 w-[50%] bg-slate-100/80 px-6 pt-6 pb-6 min-[600px]:hidden lg:bottom-20 lg:bg-slate-100/90 lg:py-0   lg:pl-14 min-[1400px]:px-14 min-[1600px]:px-24">
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
            {/* <h1 class="member-name !mt-1 !mb-0 pb-3 !text-lg ">
              <span>Soma Lisa </span>
            </h1>
            <h1 class="member-name !-mt-5 !mb-0 pb-3 !text-lg ">
              <span></span>
            </h1> */}
          </FadeInSection>
          {/* <h1 class="mt-2 mt-10 px-6 text-left text-4xl font-bold tracking-tight text-black sm:text-6xl ">
          THE FOUNDER.
        </h1> */}
          <p className="animate-fadeIn paragraph  text-sm lg:text-2xl">
            <span>
              {' '}
              <FadeInSection>
                {/* <h1 className="member-name  !mt-1 !mb-0 pb-2 !text-lg ">
                  Soma L. Choudhury
                </h1>{' '} */}
              </FadeInSection>
              Experienced as a senior marketing executive, Soma has a global
              experience in building, launching, and growing businesses, brands,
              and products. Soma brings years of experience leading, managing
              and cultivating ..
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
        <div className="animate-fadeIn team-member-details  absolute bottom-4 w-[50%] bg-slate-100/80 px-6 py-6 max-[600px]:hidden lg:bottom-20 lg:bg-slate-100/90 lg:py-0   lg:pl-14 min-[1400px]:px-14 min-[1600px]:px-24">
          <FadeInSection>
            {' '}
            <h1 class="member-name !mb-4 pb-3 ">
              <span>Soma Lisa Choudhury</span>
            </h1>
          </FadeInSection>
          {/* <h1 class="mt-2 mt-10 px-6 text-left text-4xl font-bold tracking-tight text-black sm:text-6xl ">
          THE FOUNDER.
        </h1> */}
          <p className="animate-fadeIn paragraph text-sm lg:text-2xl">
            {/* style={{ fontWeight: '400' }} */}
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
      </div>
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
