import LeelaPlaceHoderMain from '@/images/Leela_placehoder-1.png'

import FadeInSection from './FadeInSection'
import Link from 'next/link'
export const SectionHero = () => {
  return (
    <section id="" className="mt-20 py-4   lg:mt-24 lg:py-10   xl:px-8">
      <ul
        role="list"
        className="mx-auto flex-row lg:mt-0 lg:max-w-7xl lg:gap-x-8 lg:space-x-14  min-[1250px]:inline-flex xl:max-w-none"
      >
        <div
          className="flex w-full flex-col justify-center px-6 pb-0 max-[1000px]:!text-center
          md:px-14 lg:px-0   lg:pt-44 min-[1500px]:w-[26%] "
        >
          <li
            className=" max-[1000px]:!text-center
         "
          >
            <SiteTitle />
          </li>
        </div>
      </ul>
    </section>
  )
}

// GRID THREE IMAGE - removed

const SiteTitle = () => {
  return (
    <div className="-mt-10 pl-3  text-left lg:-mt-10  lg:px-0 xl:ml-4 min-[1400px]:mx-6 ">
      {/* <h1 style={{ lineHeight: '1.05em' }} className="color_15 !-pb-8 ">
        <span className="color_15">MARKETING CONSULTANCY </span>
      </h1> */}

      <p className="text-2 font_4 subtitle-color -mb-4 mt-1  sm:-mt-4 lg:-mt-4 lg:-mt-0 ">
        <span className="lg:inline-flex">
          <div className="mt-[0.6rem] inline-flex">
            <span>
              <h3
                style={{
                  letterSpacing: '0.1em',
                }}
              >
                Branding <span className="px-0.5" />| <span>Development</span>{' '}
                <span className="px-0.5" /> | <span> Marketing </span>
              </h3>
            </span>
          </div>
        </span>
      </p>
    </div>
  )
}
