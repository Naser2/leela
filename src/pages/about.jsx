import somaAbout from '@/images/soma-about-image.png'
import Link from 'next/link'

import FadeInSection from '@/components/FadeInSection'
import { SocialLinks } from '@/components/socialLinks'

export default function AboutPage() {
  return (
    <>
      <div class="hero-content mt-0 lg:mx-[4rem] lg:pt-16  xl:mx-[6rem]  ">
        <div class="flex  flex-col bg-gray-50 md:grid md:grid-cols-1 xl:px-14 min-[1400px]:grid-cols-2 ">
          <div class="row bg-white">
            <div className="lg:px--12">
              {/* grid grid-cols-1 px-2 lg:grid-cols-2 min-[1399px]:grid-cols-1   */}
              <div className="px-2 lg:grid-cols-2 ">
                <div className="team-member-details -mb-10 px-6 pt-0 md:hidden ">
                  {' '}
                  <h1 class="member-name bg-gray-50/10 md:pb-2">
                    <span className="font-slim">Soma Lisa Choudhury</span>
                  </h1>
                </div>

                <div className="animate-fadeIn team-member-details -mt-3 mb-4 px-6 pb-0 md:py-6  lg:pt-6 lg:pl-10 xl:mr-4 min-[1400px]:px-4 min-[1600px]:pl-4">
                  <h1 class="member-name bg-gray-50/20 pb-2  md:pb-2 ">
                    <span className="font-slim  sr-only md:not-sr-only md:py-3">
                      Soma Lisa Choudhury
                    </span>
                    <div class="lg:-mt-10px group relative mt-[1.23rem] mt-2 flex flex-none flex-col items-start border-transparent pb-2 text-left hover:border-t-2 md:pb-0  ">
                      <div className="mt-4 flex inline-flex">
                        <h2 class="member-jobtitle mmd:px-0 -mt-2  mb-4 px-2  py-1.5 text-2xl  text-blue-500  md:order-first  md:px-2  ">
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

                      <p className="mb-4  bg-sky-50/10 px-2 text-sm  font-semibold leading-6 text-slate-800/80 text-slate-700 md:mx-4 md:block lg:mt-2 lg:text-lg">
                        <h2 class="text-2 font_5 color_15 -mt-2 py-1.5  text-2xl text-slate-600 md:order-first  lg:-mt-0 lg:-ml-4  lg:bg-sky-100/10 ">
                          Brand Director & Senior marketing executive.
                        </h2>{' '}
                      </p>
                    </div>
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
                  </h1>
                </div>
              </div>
            </div>
          </div>
          {/* grid grid-cols-1 px-2 lg:grid-cols-2 min-[1399px]:grid-cols-1 */}
          <div className=" px-2 ">
            <div className="animate-fadeIn team-member-details -mt-3 mb-4 px-6 pb-0 md:py-6  lg:pt-6 lg:pl-10 min-[1400px]:px-14 min-[1600px]:pl-4">
              <div className="">
                <div class="group relative -mt-px flex flex-none flex-col items-start px-2 pt-4  text-left md:-ml-4 md:w-[35vw] md:px-4 md:pb-6 md:pt-4 lg:w-auto">
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
    </>
  )
}
