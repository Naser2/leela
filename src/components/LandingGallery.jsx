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
import project1New from '@/images/projects-1-new.png'
import project1Blink from '@/images/project-blink-new.png'
import projectChain from '@/images/projectChain.png'
import project1Bracelets from '@/images/project1Bracelets.png'
import project1Fancy from '@/images/projectFancy.png'
import projectStoneJewlery from '@/images/projectStoneJewlery.png'
import projectSmoker from '@/images/projectSmoker.png'
import projectShakti from '@/images/projectShakti.png'
import projectPapperWallet1 from '@/images/projectPapperWallet1.png'
import projectPapperWallet2 from '@/images/projectPapperWallet2.png'
import projectSummerBoys from '@/images/projectSummerBoys.png'
import clsx from 'clsx'
import FadeInSection from './FadeInSection'
import Image from 'next/image'

export default function LandingGallery() {
  return (
    <div className="relative -mt-10 mb-44 py-6 lg:py-14">
      <Image
        src={project1New.src}
        alt=""
        className={clsx('pointer-events-none object-cover')}
        width={1800}
        height={1800}
      />
      <Image
        src={project1Blink.src}
        alt=""
        className={clsx('pointer-events-none object-cover')}
        width={1800}
        height={1800}
      />{' '}
      <FadeInSection>
        {' '}
        <Image
          src={projectChain.src}
          alt=""
          className={clsx('pointer-events-none object-cover')}
          width={1800}
          height={1800}
        />{' '}
      </FadeInSection>
      <Image
        src={projectXl1.src}
        alt=""
        className={clsx('pointer-events-none object-cover')}
        width={1800}
        height={1800}
      />{' '}
      <Image
        src={project1Bracelets.src}
        alt=""
        className={clsx('pointer-events-none object-cover')}
        width={1800}
        height={1800}
      />{' '}
      <FadeInSection>
        {' '}
        <Image
          src={project1Fancy.src}
          alt=""
          className={clsx('pointer-events-none object-cover')}
          width={1800}
          height={1800}
        />
      </FadeInSection>
      <Image
        src={projectPapperWallet2.src}
        alt=""
        className={clsx('pointer-events-none object-cover')}
        width={1800}
        height={1800}
      />{' '}
      <FadeInSection>
        <Image
          src={projectStoneJewlery.src}
          alt=""
          className={clsx('pointer-events-none object-cover')}
          width={1800}
          height={1800}
        />{' '}
      </FadeInSection>
      <FadeInSection>
        {' '}
        <Image
          src={projectPapperWallet1.src}
          alt=""
          className={clsx('pointer-events-none object-cover')}
          width={1800}
          height={1800}
        />
      </FadeInSection>
      <Image
        src={projectShakti.src}
        alt=""
        className={clsx('pointer-events-none object-cover')}
        width={1800}
        height={1800}
      />
      <FadeInSection>
        {' '}
        <Image
          src={projectSmoker.src}
          alt=""
          className={clsx('pointer-events-none -mt-3 object-cover')}
          width={1800}
          height={1800}
        />{' '}
      </FadeInSection>
      <Image
        src={project3.src}
        alt=""
        className={clsx('pointer-events-none object-cover')}
        width={1800}
        height={1800}
      />
      <Image
        src={project4.src}
        alt=""
        className={clsx('pointer-events-none object-cover')}
        width={1800}
        height={1800}
      />
      <FadeInSection>
        <Image
          src={projectSummerBoys.src}
          alt=""
          className={clsx('pointer-events-none object-cover')}
          width={1800}
          height={1800}
        />
      </FadeInSection>
      {/* <div className="galerry-XXL ">
        <Gallery
          projects={xxLprojects}
          grid={'grid grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-4 py-4'}
        />
      </div> */}
      <div
        className="text-2 color_15 lg:font_5 mx-6 flex  items-center px-2 md:px-2 lg:mx-auto lg:-mt-0  lg:justify-center"
        style={{
          fontFamily: 'poppins-extralight, poppins, sans-serif',
        }}
      >
        {/* <div className="md:px-0">
          <h3
            style={{
              letterSpacing: '0.1em',
            }}
            className=""
          >
            View Portfolio
          </h3>
        </div>{' '} */}
        <div id="about-cta" className="mt-4 mb-1 ">
          <Link
            href="/portfolio"
            className="!css-n6s3hr  !bg-black px-3 !px-4 !py-3  uppercase text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400 group-hover:!bg-blue-500"
          >
            View Porfolio <span aria-hidden="true">→</span>
          </Link>
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
        ' dark:crisp-black min-[1391px]:-pt-4 rounded-sm bg-gray-100 px-8 pt-6 md:mx-4 md:mt-1 md:rounded-lg  lg:bg-white lg:px-0  min-[1391px]:px-8 min-[1591px]:px-12 ')
      }
      id={`projects-media-gallery-`}
      aria-label="Newsletter"
      //   link={socialsRef}
    >
      {/* <Container className="mx-0 rounded-sm px-4  pt-2 sm:px-0 md:rounded-lg lg:mt-8 lg:px-6 lg:px-2 lg:pt-4 lg:pb-8"> */}
      <div role="list" className="dark:highlight-white/10 rounded-t-xl">
        {/* dark:border-indigo-500/20 */}
        {/* <div>
          <h2 className="max-w-64 pb-4 text-2xl font-semibold text-slate-600  md:order-first md:pb-0">
            PROJECTS
          </h2>
          <div className="max-w-24 flex  border-b border-sky-400 pb-4 font-semibold" />
        </div> */}
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
