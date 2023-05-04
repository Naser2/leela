import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { TextField } from '@/components/Fields'
import { Logomark } from '@/components/Logo'
import { FooterNavLinks } from '@/components/NavLinks'
import qrCode from '@/images/qr-code.svg'
import clsx from 'clsx'

function QrCodeBorder(props) {
  return (
    <svg viewBox="0 0 96 96" fill="none" aria-hidden="true" {...props}>
      <path
        d="M1 17V9a8 8 0 0 1 8-8h8M95 17V9a8 8 0 0 0-8-8h-8M1 79v8a8 8 0 0 0 8 8h8M95 79v8a8 8 0 0 1-8 8h-8"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function Footer({ BG }) {
  return (
    <footer className={clsx(BG && BG, 'border-t border-gray-200')}>
      <Container>
        <div className="flex flex-col items-start justify-between gap-y-12 overflow-hidden pt-16 pb-6 lg:flex-row lg:items-center lg:py-16 ">
          <div>
            <div className="flex items-center text-gray-900">
              {/* <Logomark className="h-10 w-10 flex-none fill-cyan-500" /> */}
              <div className="ml-4">
                <Link
                  href="/"
                  className="text-base font-semibold text-blue-500 lg:text-2xl "
                >
                  LELLA
                </Link>
                <p className="mt-1 text-sm lg:text-xl ">
                  Building brands since 1998
                </p>
              </div>
            </div>
            <nav className="mt-11 flex gap-8">
              <FooterNavLinks
                color={'text-black relative z-10 text-xl text-center px-3 '}
              />
            </nav>
          </div>
          <div className="group relative flex items-center self-stretch transition-colors  hover:bg-gray-50 sm:self-auto sm:rounded-2xl lg:mx-0 lg:-mt-24 lg:self-auto ">
            {/* <div className="relative flex h-24 w-24 flex-none items-center justify-center"> */}
            <div class="mx-auto flex max-h-[80px] max-w-sm items-center space-x-4 rounded-xl p-6 shadow-md">
              <Link
                href="mailto:mastersandra@freevolve.com"
                className="flex gap-x-4"
                class=" shrink-0 "
              >
                <svg
                  class="h-12 w-12"
                  viewBox="0 0 40 40"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="a">
                      <stop stop-color="#2397B3" offset="0%"></stop>
                      <stop stop-color="#13577E" offset="100%"></stop>
                    </linearGradient>
                    <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="b">
                      <stop stop-color="#73DFF2" offset="0%"></stop>
                      <stop stop-color="#47B1EB" offset="100%"></stop>
                    </linearGradient>
                  </defs>
                  <g fill="none" fill-rule="evenodd">
                    <path
                      d="M28.872 22.096c.084.622.128 1.258.128 1.904 0 7.732-6.268 14-14 14-2.176 0-4.236-.496-6.073-1.382l-6.022 2.007c-1.564.521-3.051-.966-2.53-2.53l2.007-6.022A13.944 13.944 0 0 1 1 24c0-7.331 5.635-13.346 12.81-13.95A9.967 9.967 0 0 0 13 14c0 5.523 4.477 10 10 10a9.955 9.955 0 0 0 5.872-1.904z"
                      fill="url(#a)"
                      transform="translate(1 1)"
                    ></path>
                    <path
                      d="M35.618 20.073l2.007 6.022c.521 1.564-.966 3.051-2.53 2.53l-6.022-2.007A13.944 13.944 0 0 1 23 28c-7.732 0-14-6.268-14-14S15.268 0 23 0s14 6.268 14 14c0 2.176-.496 4.236-1.382 6.073z"
                      fill="url(#b)"
                      transform="translate(1 1)"
                    ></path>
                    <path
                      d="M18 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM24 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM30 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
                      fill="#FFF"
                    ></path>
                  </g>
                </svg>
              </Link>
              <div>
                <Link
                  href="mailto:info@wht-wrks.com "
                  className="flex gap-x-4"
                  class=" shrink-0 "
                >
                  <div class="text-base font-medium text-black sm:text-xl">
                    Messsage
                  </div>
                  <p class="text-sm text-slate-500 sm:text-base">
                    Send me a new message!
                  </p>
                </Link>
              </div>
            </div>
            {/* <QrCodeBorder className="absolute inset-0 h-full w-full stroke-gray-300 transition-colors group-hover:stroke-cyan-500" /> */}
            {/* <Image src={qrCode} alt="" unoptimized /> */}
            {/* </div> */}
            {/* <div className="ml-8 lg:w-64">
              <p className="text-base font-semibold text-gray-900">
                <Link href="#">
                  <span className="absolute inset-0 sm:rounded-2xl" />
                  Download the app
                </Link>
              </p>
              <p className="mt-1 text-sm text-gray-700">
                Scan the QR code to download the app from the App Store.
              </p>
            </div> */}
          </div>
        </div>
        <div className="flex flex-col items-center border-t border-gray-200 pt-8 pb-12 md:flex-row-reverse md:justify-between md:pt-6">
          <form className="flex w-full justify-center md:w-auto">
            <TextField
              type="email"
              aria-label="Email address"
              placeholder="Email address"
              autoComplete="email"
              required
              className="w-60 min-w-0 shrink"
            />
            <Button
              type="submit"
              color="black"
              className="ml-4 flex-none bg-black text-white  hover:bg-black "
            >
              <span className="hidden lg:inline">
                Join Leela&apos;s newsletter
              </span>
              <span className="lg:hidden">Join Leela&apos;s newsletter</span>
            </Button>
          </form>
          <p className="mt-6 text-sm text-gray-500 md:mt-0 lg:text-xl">
            Leela &copy; Copyright {new Date().getFullYear()}. All rights
            reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
