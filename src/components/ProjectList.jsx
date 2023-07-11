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

export default function ProjectList() {
  return (
    <div className="relative mb-0 mt-0  px-10 px-4 py-6 lg:mt-14 lg:px-0 lg:py-4 ">
      <Gallery projects={projects} />

      <div id="about-cta" className="mt-14 mb-1 ">
        <Link
          href="/about"
          className="!css-n6s3hr  !bg-black px-3 !px-4 !py-3  uppercase text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400 group-hover:!bg-blue-500"
        >
          About <span aria-hidden="true">→</span>
        </Link>
      </div>
    </div>
  )
}

const Gallery = ({ projects, grid }) => {
  return (
    <section
      className={
        ('max-w-none lg:grid lg:grid-cols-3',
        ' dark:crisp-black min-[1391px]:-pt-24 rounded-sm  px-0 pt-6 md:mx-4 md:mt-1 md:rounded-lg  lg:bg-white lg:px-0  min-[1391px]:px-8 min-[1591px]:px-12 ')
      }
      id={`projects-media-gallery-`}
      aria-label="Newsletter"
      //   link={socialsRef}
    >
      <div role="list" className="dark:highlight-white/10 rounded-t-xl">
        <ul
          role="list"
          className={[grid ? grid : ' grid grid-cols-1 gap-x-4 gap-y-4 py-4']}
        >
          {projects.map((project) => {
            // console.log('PROJECT', project)
            return (
              <li key={project.url} className="relative grid  grid-cols-2 ">
                <div className="wixui-rich-text__text ">
                  <p
                    className="media-cell-text-detail mc-table-color wixui-rich-text__text"
                    style={{ 'font-size': '17px;' }}
                  >
                    {project.name}
                  </p>
                  <Link
                    href={project.url}
                    className="mc-table-color-link font_9 text-4xl uppercase"
                  >
                    Read More
                  </Link>
                </div>{' '}
                <div
                  className={clsx(
                    project.current
                      ? 'ring-2 ring-indigo-500 ring-offset-2'
                      : 'focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100',
                    'aspect-w-14 aspect-h-14 group block flex w-full overflow-hidden  rounded-lg  focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100'
                  )}
                >
                  <Image
                    src={project.image}
                    alt={`${project.name} + IMAGE`}
                    className={clsx(
                      project.current ? '' : 'group-hover:opacity-75',
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

const projects = [
  {
    name: 'BREVARD',
    image: '/assets/BREVARD/MOBILE_emai_image2.jpg',
    url: '/brevard',
  },
  {
    name: 'BERNADI',
    image: '/assets/BERNADI/MOBILE_BERNADI.png',
    url: '/bernadi',
  },
  {
    name: 'CREATED_EQUAL',
    image: '/assets/CREATED_EQUAL/MOBILE_CREATED_EQUAL.png',
    url: '/created',
  },
  {
    name: 'NAGICIA',
    image: '/assets/NAGICIA//MOBILE_NAGACIA.png',
    url: '/nagacia',
  },
  // {
  //   name: 'OFFICINA BERNARDI WEB',
  //   image: '/BREVARD_WEB/MOBILE_emai_image 2.jpg',
  //   url: '/',
  // },
  {
    name: 'SHAKTI',
    image: '/assets/SHAKTI/MOBILE_SHAKTI.png',
    url: '/shakti',
  },
  {
    name: 'SHIVAN & NARRESH',
    image: '/assets/SHIVAN_NARRESH/MOBILE_SHIVAN_NARESH.png',
    url: '/shivan',
  },
  {
    name: 'STEFANO_MARONI',
    image: '/assets/STEFANO_MARONI/MOBILE_STEPHANO.png',
    url: '/stephano',
  },
]

// const projects = [
//   { url: project1.src },
//   { url: project2.src },
//   { url: project3.src },
//   { url: project4.src },
//   { url: project3.src },
//   { url: project4.src },
//   //   { url: 'New Business/ Brand/ Product Launches' },
//   //   { url: 'New Business/ Brand/ Product Launches' },
// ]
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
