import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { TextField } from '@/components/Fields'
import { Logo, Logomark } from '@/components/Logo'
import { FooterNavLinks } from '@/components/NavLinks'
import qrCode from '@/images/qr-code.svg'
import clsx from 'clsx'
import { Links, SocialLinks } from './socialLinks'

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
    <footer
      className={clsx(
        BG && BG,
        'border-t border-gray-200 bg-slate-50 lg:pt-14 '
      )}
    >
      <div
        id="link"
        className="flex items-center justify-center py-6 lg:hidden lg:px-6"
      >
        <SocialLinks
          color={'text-black relative z-10 text-xl text-center px-3 '}
        />
      </div>
      <div>
        <div className="mx-auto -mt-24 flex max-w-7xl  items-start justify-between gap-y-12 overflow-hidden  px-6  px-4 pb-6 sm:px-6 lg:flex-row lg:flex-col lg:items-center lg:px-8 lg:pb-10  lg:pt-0">
          <div>
            <div className="mx-auto  flex max-w-7xl items-center px-4 text-gray-900 sm:px-6 md:hidden lg:px-8">
              <div className="ml-4">
                <div
                  href="/"
                  className="font-semibold text-black hover:text-blue-500  lg:ml-20 lg:text-2xl "
                >
                  <Logo />
                </div>
                <p className="-mt-4 text-sm  lg:text-xl ">
                  Building brands since 1998
                </p>
              </div>
            </div>
          </div>
          <nav className="inline-flex hidden justify-center gap-8  px-[5%] lg:mt-11  lg:flex">
            <SocialLinks
              color={'text-black relative z-10 text-xl text-center px-3 '}
            />
          </nav>
        </div>
        <div className="flex max-w-none flex-col items-center justify-center border-t border-gray-200 bg-slate-100 px-4 pt-8 pb-12 sm:px-6 md:flex-row-reverse md:justify-between md:pt-6 lg:px-[14%] lg:px-8">
          <nav className="mx-auto  flex max-w-7xl items-center justify-center  gap-8 py-6  lg:mt-11 lg:hidden ">
            <FooterNavLinks
              color={'text-black relative z-10 text-xl text-center px-2 '}
            />
          </nav>

          <div className="mx-auto flex max-w-7xl items-center px-4 text-gray-900 sm:px-6 lg:py-6 lg:px-8">
            <p className="mt-6 justify-center text-sm text-gray-500 md:mt-0 lg:text-xl ">
              Leela &copy; Copyright {new Date().getFullYear()}. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
