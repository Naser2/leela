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
import FadeInSection from '@/components/FadeInSection'
import { SocialLinks } from '@/components/socialLinks'

import project1 from '@/images/projects-1.png'
import project2 from '@/images/projects-2.png'
import project3 from '@/images/projects-3.png'
import project4 from '@/images/projects-4.png'
import projectXl1 from '@/images/projects-xl-1.png'
import projectXl2 from '@/images/projects-xl-1.png'
import Image from 'next/image'
import clsx from 'clsx'
export default function AboutPage() {
  return (
    <>
      <div class="hero-content -mt-10 lg:pt-16 ">
        <div class="flex  flex-col bg-gray-50 md:grid md:grid-cols-1 xl:px-14 min-[1400px]:grid-cols-2 ">
          <div class="row bg-white">
            <div className="lg:px--12">
              <img
                src={somaAbout.src}
                alt="App screenshot"
                width={432}
                height={1242}
                className="about-banner [aspect-[552/640;] mt-10 md:mt-0"
                // className="aspect-[2400/1960] h-full   rounded-md  bg-white/5 ring-1 ring-white/10 lg:w-full xl:aspect-[2400/2060]"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 px-2 lg:grid-cols-2 min-[1399px]:grid-cols-1  ">
            <div className="team-member-details -mb-10 px-6 pt-0 md:hidden ">
              {' '}
              <h1 class="member-name bg-gray-50/30 md:pb-2">
                <span className="font-extrabold">Soma Lisa Choudhury</span>
              </h1>
            </div>

            <div className="animate-fadeIn team-member-details -mt-3 mb-4 px-6 pb-0 md:py-6  lg:pt-6 lg:pl-10 xl:mr-24 min-[1400px]:px-14 min-[1600px]:pl-14">
              <h1 class="member-name bg-gray-50/30 pb-2  md:pb-2 ">
                <span className="sr-only font-extrabold md:not-sr-only md:py-3">
                  Soma Lisa Choudhury
                </span>
                <div class="lg:-mt-10px group relative mt-[1.23rem] mt-2 flex flex-none flex-col items-start border-transparent bg-sky-50/40 pb-2 text-left hover:border-t-2 md:pb-0 lg:w-[25vw] lg:border-t lg:border-sky-400 lg:hover:border-sky-400 ">
                  <div className="mt-4 flex inline-flex">
                    <h2 class="member-jobtitle -mt-2 px-2 py-1.5  text-2xl text-blue-500  md:order-first  md:bg-sky-50/50 md:px-0  md:px-2  ">
                      LEELA&apos;s FOUNDER
                    </h2>{' '}
                    <svg
                      class="ml-0  mr-1.5 mt-1 h-5 w-5 flex-shrink-0 text-blue-400"
                      x-description="Heroicon name: mini/check-circle"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>

                  <p className="mt-0 mb-4 bg-sky-50/30 px-2  text-sm font-semibold leading-6 text-slate-800/80 text-slate-700 md:block lg:mt-2 lg:text-lg">
                    <h2 class="text-2 font_5 color_15 -mt-2 py-1.5  text-2xl text-slate-600 md:order-first  md:bg-sky-50/50 md:px-2 md:px-3 lg:-mt-0 lg:-ml-4  lg:bg-sky-200/60 ">
                      Brand Director & Senior marketing executive.
                    </h2>{' '}
                  </p>
                </div>

                {/* 
                <div className="-mt-24px lg:-mt-10px lg::pb-6 group relative flex flex-none flex-col items-start border-t border-transparent bg-white bg-sky-50/40 pb-2 text-left hover:border-t-2  lg:mt-2 lg:w-[45vw]">
                  <p className="mt-0 mt-2 mb-4 bg-sky-50/10  px-2 text-sm  font-semibold leading-6 text-slate-800/70 text-slate-700 md:block  lg:text-lg">
                    <div className="bg-sky-50/1 mt-2  max-w-lg  border-t border-slate-400 pb-2 pt-6" />
                    <h3 className="bg-sky-50/1 mt-2  -mt-4 pb-2 pt-6 ">
                      Global experience in:{' '}
                    </h3>
                    <span className="text-base text-xl font-medium  text-slate-700  lg:text-lg ">
                      Cultivating | building | launching | growing | brands for
                      over{' '}
                      <span className="text-base font-medium text-slate-800 lg:text-lg">
                        fifteen years
                      </span>
                      .
                    </span>
                  </p>
                </div> */}
                <h2 className="member-quaulities about-page-personal text-bold !lg:-pb-10 -mt-4 py-0 px-2 pb-4  lg:mt-2 lg:w-[35vw]">
                  Positive, Artistic &amp; Worldly
                </h2>
                <div
                  id="REALL SOCIAL SHOW UP TO XL"
                  className="inline-flex lg:mt-4"
                >
                  <div className="mt-2 mr-4 max-w-7xl px-2">
                    <div className="contact max-w-2xl lg:mx-0 lg:max-w-xl">
                      <p className="2">
                        <Link
                          href="tel:+1 (9117)-331-8002 "
                          className="text-font  text-lg md:text-xl"
                        >
                          M: 917.331.8002
                        </Link>
                      </p>
                    </div>
                  </div>{' '}
                  <Link
                    href="mailto:soma@leelanyc.com"
                    className="mt-2 flex max-h-12 max-w-[8rem] items-center rounded-md bg-white py-[0.4375rem] px-2 pr-2 text-sm font-semibold  shadow md:mt-1 lg:max-w-[10rem] lg:pr-3 xl:mt-2 "
                  >
                    <img
                      class="h-5 w-5 flex-none fill-sky-500 stroke-sky-500 text-sky-500 md:h-6 md:w-6 "
                      src="https://static.xx.fbcdn.net/rsrc.php/v3/yH/r/7nNmS7JFpjU.png"
                      alt=""
                      height="14"
                      width="14"
                      fill="fill-sky-500"
                    ></img>
                    {/* <span className="px-2  text-slate-800 hover:text-blue-500 lg:mx-2 lg:text-lg">
                      Message
                    </span> */}
                  </Link>
                </div>
                <div className="my-2: -mt-2 max-w-7xl px-2">
                  <div className="contact max-w-2xl lg:mx-0 lg:max-w-xl">
                    <p className="lg:py-2">
                      <Link
                        href="soma@leelanyc.com"
                        className="text-lg  hover:text-blue-500 md:text-xl"
                      >
                        SOMA@LEELANYC.COM
                      </Link>
                    </p>
                  </div>
                </div>
                {/* <div className=" max-w-7xl px-2">
                  <div className="contact max-w-2xl lg:mx-0 lg:max-w-xl">
                    <p className="2">
                      <Link
                        href="mailto:info@wht-wrks.com className="
                        className="text-font  text-lg md:text-xl"
                      >
                        M: 917.331.8002
                      </Link>
                    </p>
                  </div>
                </div> */}
              </h1>
              <div
                id="HIDDEN UNTIL XXXL"
                className="hidden  md:flex md:px-2 min-[1903px]:hidden"
              >
                <SocialLinks />
              </div>
              <div className="xxl:contents hidden  bg-gray-50/20 ">
                <div class="group relative -mt-px flex flex-none flex-col items-start  border-t border-transparent border-t-slate-400  bg-gray-100/60 px-2 pt-4  text-left md:-ml-4 md:w-[35vw] md:px-4 md:pb-6 md:pt-4 lg:w-auto">
                  <h2 class="pb-4 text-2xl  md:order-first md:pb-0 lg:px-2 ">
                    BIO
                  </h2>
                </div>
                {/* <div class="group relative -mt-px flex  flex-none flex-col  items-start border-t border-transparent px-4 pb-6 pt-4 text-left md:-ml-4 md:w-[35vw] md:pb-16 md:pt-8 lg:w-auto">
            <p class="mt-2 hidden bg-white text-sm leading-6 text-slate-700 md:block ">
              Senior marketing executive with global experience in building,.
            </p>
          </div> */}

                <FadeInSection>
                  <p className="animate-fadeIn paragraph   px-2  pt-0  pb-4  lg:text-2xl ">
                    <span style={{ fontWeight: '400' }}>
                      Soma L. Choudhury, has extensive experience as a senior
                      marketing executive with global experience in building,
                      launching, and growing businesses, brands, and products.
                      Soma brings years of experience leading, managing,
                      advising, and cultivating various global renowned brands
                      in fashion, beauty &amp; consumer packaged goods. She
                      works with clients to define long-term visions, goals and
                      strategies. Additionally, Soma provides strategic guidance
                      and tactical services to our team while creating marketing
                      plans designed to help acquire and retain customers for
                      each client.
                      {/* <Gallery /> */}
                      <div
                        id="SOCIAL MEDIA HIDDEN LG & XL "
                        className="max-[1903px]:hidden"
                      >
                        <SocialLinks />
                      </div>
                    </span>
                  </p>
                </FadeInSection>
              </div>
            </div>
            {/* <div className="gallery-LG min-[1399px]:hidden  min-[1703px]:hidden">
              <Gallery projects={projects} />
            </div> */}
          </div>
        </div>
      </div>
      {/* <div
        id="gallery-MIDDLE_RANGE"
        className="max-[1400px]:hidden  min-[1400px]:contents min-[1703px]:hidden"
      >
        <Gallery
          projects={xLprojects}
          grid={'grid grid-cols-4 gap-x-4 gap-y-4 py-4'}
        />
      </div>
      <div className="galerry-XXL max-[1703px]:hidden">
        <Gallery
          projects={xxLprojects}
          grid={'grid grid-cols-4 gap-x-4 gap-y-4 py-4'}
        />
      </div> */}
      <div className="md:flex-block bg-gray-50/10 px-6 md:px-14 md:pt-10  lg:px-20  xl:pr-36 min-[1620px]:hidden ">
        <div class="group relative -mt-px flex flex-none flex-col items-start  border-t border-transparent border-t-slate-400  bg-gray-100/60 px-2 pt-4  text-left md:-ml-4 md:w-[35vw] md:px-4 md:pb-6 md:pt-4 lg:w-auto">
          <h2 class="pb-4 text-2xl  md:order-first md:pb-0 lg:px-2 ">BIO</h2>
        </div>
        {/* <div class="group relative -mt-px flex  flex-none flex-col  items-start border-t border-transparent px-4 pb-6 pt-4 text-left md:-ml-4 md:w-[35vw] md:pb-16 md:pt-8 lg:w-auto">
            <p class="mt-2 hidden bg-white text-sm leading-6 text-slate-700 md:block ">
              Senior marketing executive with global experience in building,.
            </p>
          </div> */}
        <p className="animate-fadeIn paragraph px-2   pt-0  pb-4  lg:text-2xl xl:mb-44 ">
          <span style={{ fontWeight: '400' }}>
            Soma L. Choudhury, has extensive experience as a senior marketing
            executive with global experience in building, launching, and growing
            businesses, brands, and products. Soma brings years of experience
            leading, managing, advising, and cultivating various global renowned
            brands in fashion, beauty &amp; consumer packaged goods. She works
            with clients to define long-term visions, goals and strategies.
            Additionally, Soma provides strategic guidance and tactical services
            to our team while creating marketing plans designed to help acquire
            and retain customers for each client.
          </span>
        </p>{' '}
      </div>
    </>
  )
}

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
