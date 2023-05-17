import LeelaPlaceHoderMain from '@/images/Leela_placehoder-1.png'

import FadeInSection from './FadeInSection'
export const SectionHero = () => {
  return (
    <section id="comp-jwuch32x" className="-mt-4 lg:mt-24 lg:py-10   xl:px-8">
      <ul
        role="list"
        class="mx-auto mt-20 flex-row lg:max-w-7xl lg:gap-x-8 lg:space-x-14  min-[1250px]:inline-flex xl:max-w-none   "
      >
        <div
          class="flex w-full flex-col justify-center px-6 pb-14 max-[1000px]:!text-center
          md:px-14 lg:px-0   lg:py-44 min-[1500px]:w-[26%] "
        >
          <li
            class=" max-[1000px]:!text-center
         "
          >
            <SiteTitle />
          </li>
        </div>
        <li class="flex flex-col gap-6 xl:flex-row min-[1500px]:!w-[64%]">
          <div
            className="opacicy-1 z-20 col-start-5 col-end-10 bg-blue-600"
            title="leela-main-img"
          >
            <div data-testid="linkElement relative " className="h-full w-full">
              <div className="HlRz5e BI8PVQ">
                <img
                  className="z-10 h-full w-full"
                  src={LeelaPlaceHoderMain.src}
                  alt=""
                  fetchpriority="high"
                />
              </div>
            </div>
          </div>
        </li>
      </ul>
    </section>
  )
}

// GRID THREE IMAGE - removed

const SiteTitle = () => {
  return (
    <div className="-mt-10 pl-3  text-left lg:-mt-10  lg:px-0 xl:ml-4 min-[1400px]:mx-6 ">
      <h1 style={{ lineHeight: '1.05em' }} className="color_15 !-pb-8 ">
        <span className="color_15">MARKETING CONSULTANCY </span>
      </h1>

      <p className="text-2 font_4 subtitle-color -mb-4 mt-1  sm:-mt-4 lg:-mt-4 lg:-mt-0 ">
        <span className="lg:inline-flex">
          <div className="mt-[0.6rem] inline-flex">
            <span>
              <h3
                style={{
                  letterSpacing: '0.1em',
                }}
              >
                Branding & Product
                <span>Product Strategy</span> <br />
                <span> Marketing Development</span>
              </h3>
            </span>
          </div>
        </span>
      </p>
    </div>
  )
}
