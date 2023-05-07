import Head from 'next/head'
import Image from 'next/image'

import NoContent from '@/components/NoContent'
import { Container } from '@/components/Container'
import { Contact } from '@/components/Hero'
import Link from 'next/link'
import { SocialLinks } from '@/components/socialLinks'

export default function contact() {
  return (
    <>
      <Head>
        <title>LEELA Contact Page- SOMA LISA</title>
        <meta
          name="description"
          content="Things I’ve made trying to put my dent in the universe."
        />
      </Head>

      <div className="pt-34 isolate bg-white py-24  px-6 sm:py-32 lg:py-24 lg:px-8 ">
        <div
          className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
          aria-hidden="true"
        >
          {/* <div
            className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#2f5db6] to-[#11193e] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          /> */}
        </div>
        <div className="mx-auto max-w-2xl text-center">
          <p className="mt-2 text-lg leading-8 text-gray-600">
            <div
              id="contact"
              className="mx-auto mt-6 max-w-7xl px-6 sm:mt-6 lg:px-8 lg:pb-44 lg:pt-14 "
            >
              <div className="contact mx-auto max-w-3xl lg:mx-0 lg:max-w-xl lg:text-xl ">
                <p className="text-2xl tracking-tight text-black sm:text-3xl lg:mt-10">
                  GET IN TOUCH
                </p>
                <p className="text-2 color_15 font_5 font_4 pb-34 py-6 !text-center lg:py-0 lg:pb-0">
                  <address className="contact-address lg:text-2xl">
                    <Link
                      href="mailto:soma@leelanyc.com"
                      className="font-semibold text-black hover:text-blue-500 "
                    >
                      SOMA@LEELANYC.COM
                    </Link>
                    <br />
                    <Link
                      href="tel:+1 ((917) 354-5555"
                      className="hover:text-blue-500 "
                    >
                      +1 (917) 354-5555
                    </Link>
                    <br />
                    55 W. 24th St. New York, NY
                  </address>{' '}
                  Please reach out if you have any inquiries.
                </p>
              </div>
              {/* <div
                id="social"
                className="flex-block mx-auto  my-14 max-w-3xl lg:my-[2%] lg:mx-0 lg:max-w-xl lg:text-xl  "
              >
                <p className="py-4 text-2xl tracking-tight text-black sm:text-3xl lg:mt-10">
                  SOCIAL
                </p>
                <SocialLinks />
              </div> */}
            </div>
          </p>
        </div>
      </div>
    </>
  )
}
