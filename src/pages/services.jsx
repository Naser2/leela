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
import {
  BoltIcon,
  CalendarDaysIcon,
  UsersIcon,
} from '@heroicons/react/24/outline'
import leelaHeroImg2 from '@/images/leela-hero-img-2.png'
import FadeInSection from '@/components/FadeInSection'
import { SocialLinks } from '@/components/socialLinks'
import leelasLogo from '@/images/leela-logo.png'
import leelasMainImg from '@/images/leelaMainImg.png'
import project1 from '@/images/projects-1.png'
import project2 from '@/images/projects-2.png'
import project3 from '@/images/projects-3.png'
import project4 from '@/images/projects-4.png'
import projectXl1 from '@/images/projects-xl-1.png'
import projectXl2 from '@/images/projects-xl-1.png'
import Image from 'next/image'
import clsx from 'clsx'
import { Services } from '@/components/Hero'
export default function ServicesPage() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
      },
    },
  }

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  }
  return (
    <>
      <div id="services" className="relative isolate mt-4">
        <div className="max-w-9xl mx-auto items-center  justify-center bg-gray-50/50 px-6   pt-4 pb-24 pt-2 sm:pb-40 md:px-14 lg:flex">
          <motion.div animate={{ x: 100 }} transition={{ delay: 1 }} />{' '}
          <div className="flex-shrink-1 mx-auto mt-4 max-w-2xl lg:mx-0 lg:max-w-xl lg:pt-8 ">
            <h1 className="text-2xl tracking-tight text-black sm:text-3xl lg:mt-10">
              <h2 className="pb-1 text-base  font-semibold lowercase capitalize leading-7  text-blue-400 lg:pb-4  lg:text-xl  ">
                Services
              </h2>
              GLOBAL PLATFORM FOCUS.
            </h1>
            <div className="mt-4  md:-mt-4">
              <h3
                style={{
                  letterSpacing: '0.1em',
                }}
                className="text-2 color_15 font_5  font_4 !text-left"
              >
                Marketing. Building. Lauching. Growing.
              </h3>
            </div>

            <div className="mt-8 flex items-center gap-x-6 lg:mt-14">
              <a
                href="mailto:soma@leelanyc.com"
                className=" bg-blue-500 px-3.5 py-2.5 text-xl  text-sm font-semibold text-white shadow-sm hover:bg-black hover:bg-black  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
              >
                Get started
              </a>
              <a
                href="#detailedExpertise"
                className="text-xl  font-semibold leading-6 text-black "
              >
                Learn More <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <div className="mx-auto mt-16 flex max-w-3xl flex-col sm:mt-24  lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
            <div className="max-w-4xl flex-none  sm:max-w-7xl lg:max-w-none">
              <motion.ul variants={container} initial="hidden" animate="show">
                {' '}
                <div className="flex flex-col gap-x-6 gap-y-6  lg:grid lg:grid-cols-2">
                  {expertises.map((expertise) => {
                    return (
                      // <motion.li key={expertise.name} variants={item}>
                      <a
                        href="#detailedExpertise"
                        key={expertise.name}
                        className="pointer-events-auto relative z-10 flex items-center justify-center bg-white px-6 py-4  text-[0.8125rem] text-sm font-medium leading-5 text-gray-700 shadow-xl shadow-black/5 ring-2 ring-black 
                              duration-200 ease-out hover:bg-slate-50 hover:text-gray-800 hover:transition-colors lg:w-[23rem] "
                      >
                        <h2
                          // href="#detailedExpertise"
                          className="flex justify-center  text-center text-lg  leading-7 text-black  lg:text-2xl"
                        >
                          {expertise.name}
                        </h2>
                      </a>
                      // </motion.li>
                    )
                  })}
                </div>{' '}
              </motion.ul>
            </div>
          </div>
        </div>
      </div>
      <div
        id="detailedExpertise"
        className="max-w-9xl mx-auto mt-10 bg-gray-50 px-8 py-2 sm:mt-24  sm:mt-56 sm:px-6 md:px-8 lg:mt-3 lg:mt-6  lg:px-16"
      >
        <div className=" mx-auto    lg:grid lg:grid-cols-12 lg:items-center lg:gap-8">
          <div
            id="left"
            className="relative col-span-5 col-start-1 row-start-1 -mt-10 xl:col-span-6"
          >
            <div className="flex-shrink-1 mx-auto mt-4 max-w-2xl lg:mx-0 lg:max-w-xl lg:pt-8 ">
              <h1 className="text-2xl tracking-tight text-black sm:text-3xl lg:mt-10">
                {/* <h2 className="pb-1 text-base  font-semibold lowercase capitalize leading-7  text-blue-400 lg:pb-4  lg:text-xl  ">
                  Services
                </h2> */}
                Everything you need to launch anjd develop.
              </h1>

              <p className="my-2 pb-4 text-left text-lg  leading-8 text-gray-600 lg:text-2xl lg:text-gray-600/90">
                <div className="my-4  md:-mt-4">
                  <h3
                    style={{
                      letterSpacing: '0.1em',
                    }}
                    className="text-2 color_15 font_5  font_4 !text-left"
                  >
                    New business <span className="text-blue-400">|</span> Brand
                    <span className="px-2 text-blue-400  ">|</span> Product{' '}
                    <span className="px-2 text-blue-400 ">|</span>
                    Launches:
                  </h3>
                </div>

                {/* <div className=" py-0 md:px-0 ">
                  <h3
                    style={{
                      letterSpacing: '0.1em',
                    }}
                    className="text-2 color_15 font_5 font_4 py-4 !text-left !font-extrabold "
                  >
                    NEW BUSINESS <span className="text-blue-400">|</span> BRAND
                    <span className="px-2 text-blue-400  ">|</span> PRODUCT{' '}
                    <span className="px-2 text-blue-400 ">|</span>
                    LAUNCHES:
                  </h3>
                </div> */}
                <div className="py-0 md:px-0 ">
                  <h3
                    style={{
                      letterSpacing: '0.1em',
                    }}
                    className="text-2 color_15 font_5 font_4 !text-left"
                  >
                    Over fifteen years of experience successfully designing,
                    building, and launching new businesses, brands, and
                    products. From concept to execution, bringing vision,
                    leadership, and a deliberate/disciplined approach to new
                    launches that result in recognition & growth.
                  </h3>
                </div>
              </p>
            </div>
          </div>

          <div
            id="rigth"
            className="relative col-span-7 col-start-6 row-start-1 mt-4 xl:col-span-6  xl:col-start-7 "
          >
            <img
              src={leelaHeroImg2.src}
              alt="App screenshot"
              width={2432}
              height={1242}
              className=" aspect-[2400/1960]  rounded-md  bg-white/5 ring-1 ring-white/10 lg:w-full xl:aspect-[1013/960]"
            />
          </div>
        </div>

        <div className="mx-auto mt-16 mb-36 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none lg:px-24 lg:pb-24">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {primaryFeatures.map((feature) => (
              <div key={feature.name} className=" flex flex-col ">
                <dt className="text-base font-semibold uppercase leading-7 text-black lg:text-2xl ">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-black">
                    <feature.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-3 flex flex-auto flex-col text-base leading-7 text-gray-600 md:mt-6  lg:text-lg lg:text-gray-600/90 xl:text-2xl">
                  <h3
                    style={{
                      letterSpacing: '0.1em',
                    }}
                    className="text-2 color_15  font_5 font_4 !text-left !text-slate-700"
                  >
                    {feature.description}
                  </h3>
                  {/* <p className="flex-auto">{feature.description}</p> */}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </>
  )
}

const expertises = [
  // {nameSOMA LISA CHOUDHURY}

  { name: 'Global Marketing' },
  { name: 'Brand Strategy & Development' },
  { name: 'Product Strategy & Digital Marketing Development' },
  { name: 'Social Media Strategy & Execution' },
  { name: 'New Business/ Brand/ Product Launches' },
  { name: 'New Business/ Brand/ Product Launches' },
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
          <h2 className="max-w-64 pb-4 text-2xl font-semibold text-slate-600  md:order-first md:pb-0">
            PROJECTS
          </h2>
          <div className="max-w-24 flex  border-b border-sky-400 pb-4 font-semibold" />
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

const primaryFeatures = [
  {
    name: 'Branding Strategy & Development',
    description:
      'Defines the essence and soul of brands based on the vision of the founders & designers, based on the needs, desires, and emotional experience of consumers. Possesses expansive network of global talent to executeon breakthrough marketing strategies and campaigns. Creatively directs an elite network of photographers, videographers,designers, storytellers, models, event planners, & public personalities.',
    href: '#',
    icon: BoltIcon,
  },
  {
    name: 'Product Strategy & Digital Marketing Development:',
    description:
      ' Works with business & creative teams to define the product vision, digital marketing development, strategy and differentiation based on intimate experience with the competitive landscape as well asempirical methods that allow for a deep understanding of unmet consumer needs. Enables teams to realize their vision by executing across the supply-chain through marketing strategies and campaigns, by orchestrating unique product launches byintegrating online, social, and offline channels, seamlessly.',
    href: '#',
    icon: UsersIcon,
  },
  {
    name: 'Social Media Strategy & Execution',
    description:
      ' Brings a keen and discerning eye for online, social, and offline media design,curation and seamless integration. Designs campaigns and messages targeting the needs of a brand, while providing an immaculate experience for desired consumers and audiences of the brand.',
    href: '#',
    icon: CalendarDaysIcon,
  },
]
