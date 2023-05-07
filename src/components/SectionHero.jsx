import leelaMain from '@/images/leela-main-img.jpeg'
import leelaMainTemporary1 from '@/images/leelaMainTemporary-1.png'
import project1 from '@/images/projects-1.png'
import project2 from '@/images/projects-2.png'
import project3 from '@/images/projects-3.png'
import project4 from '@/images/projects-4.png'
import projectXl1 from '@/images/projects-xl-1.png'
import projectXl2 from '@/images/projects-xl-1.png'
import LeelaPlaceHoderMain from '@/images/Leela_placehoder-1.png'
import featuredProject from '@/images/leela-hero-img-3.png'
import FadeInSection from './FadeInSection'
export const SectionHero = () => {
  return (
    <section id="comp-jwuch32x" className=" -mt-20 lg:mt-24  lg:py-10 ">
      <div
        id="bgLayers_comp-jwuch32x"
        data-hook="bgLayers"
        className="if7Vw2 mt-24 lg:mt-0 "
      >
        <div data-testid="colorUnderlay" className="tcElKx i1tH8h"></div>
        <div id="bgMedia_comp-jwuch32x" className="wG8dni"></div>
      </div>
      <div data-testid="columns" className="V5AUxf">
        <div
          id="comp-jwuch34k"
          className="comp-jwuch34k YzqVVZ wixui-column-strip__column"
        >
          <div
            id="bgLayers_comp-jwuch34k"
            data-hook="bgLayers"
            // className="MW5IWV"
          ></div>
          <div className="md:mx-6 lg:mx-0">
            <div className="-pt-34">
              <div
                id="SITE-TITLE"
                className=" -mt-36 px-[6%] py-[27%] min-[600px]:hidden  "
              >
                {/* <div className="BaOVQ8 tz5f0K comp-jwucjvdm wixui-rich-text -mt-4 mb-4 md:-mt-0  md:mb-4">
                  <div class="col-span-4 col-start-1 w-full max-w-2xl items-center justify-center lg:mt-44 lg:hidden xl:-mb-8 xl:flex-none">
                    <div class="relative  h-full md:-mx-8 xl:mx-0 xl:aspect-auto">
                      <img
                        className="h-[10rem]lg:h-[40rem] flex-auto rounded-t-2xl bg-white"
                        src={`${featuredProject.src}`}
                        alt=""
                      />
                    </div>
                  </div>
                </div> */}
                <SiteTitle />
              </div>

              <div className="items-center justify-center gap-y-2 gap-x-4 md:grid md:grid-cols-9 lg:gap-x-8 xl:gap-x-20">
                <div
                  id="DESKTOP-SITE-TITLE"
                  className="cols-span-6 col-start-1 max-[600px]:hidden"
                >
                  <SiteTitle />
                </div>
                <div
                  className="opacicy-1 z-20 col-start-5 col-end-10 bg-blue-600"
                  title="leela-main-img"
                >
                  <div data-testid="linkElement relative " className="j7pOnl ">
                    <div className="HlRz5e BI8PVQ">
                      <img
                        className="z-10"
                        src={LeelaPlaceHoderMain.src}
                        alt=""
                        fetchpriority="high"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// GRID THREE IMAGE - removed

const SiteTitle = () => {
  return (
    <div className=" pl-3 lg:-mt-10 lg:px-0 xl:ml-24 ">
      <h1 style={{ lineHeight: '1.05em' }} className="color_15 !-pb-8 ">
        <span className="color_15">MARKETING CONSULTANCY </span>
        {/* <span className="color_15 mt-4 ">CONSULTANCY </span> */}
      </h1>

      <p className="text-2 font_4 subtitle-color -mb-4 mt-1  lg:-mt-4 lg:-mt-0 ">
        <span className="lg:inline-flex">
          <div className="mt-[0.6rem] inline-flex">
            <span>
              <h3
                style={{
                  letterSpacing: '0.1em',
                }}
              >
                <FadeInSection>
                  Branding & Product Strategy.
                  <span>Digital</span>
                  Marketing Development.
                </FadeInSection>
              </h3>
              {/* <span className="lg:ml-2"> Marketing Development.</span> */}
            </span>
          </div>
        </span>
      </p>
    </div>
  )
}
