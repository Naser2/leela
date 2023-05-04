import Link from 'next/link'
import { Popover } from '@headlessui/react'
import { AnimatePresence, motion } from 'framer-motion'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import Logo from '@/images/leela-logo.png'
import { NavLinks } from '@/components/NavLinks'
import Image from 'next/image'

function MenuIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M5 6h14M5 18h14M5 12h14"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ChevronUpIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M17 14l-5-5-5 5"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function MobileNavLink({ children, ...props }) {
  return (
    <Popover.Button
      as={Link}
      className="css-p9dp5v block text-base leading-7 tracking-tight text-gray-700"
      {...props}
    >
      {children}
    </Popover.Button>
  )
}

export function Header() {
  return (
    <header className="">
      <nav>
        <div className="max-w-10xl  mx-none relative z-50 mx-auto flex   justify-between bg-black bg-black  px-4 px-4 py-8 sm:px-6 sm:px-6  lg:px-36">
          <div className="relative z-10 flex items-center gap-16">
            <Link href="/" aria-label="Home">
              <h1 className="text-xl font-bold text-blue-500 md:mr-28 lg:text-3xl ">
                LEELA
              </h1>
              {/* <Image
                alt="leelas-logo"
                src={Logo.src}
                className="opacity-1 h-14 w-auto"
                height={20}
                width={20}
                property
              /> */}
            </Link>
            <div className="hidden lg:flex lg:gap-10">
              <NavLinks />
            </div>
          </div>
          <div className="flex items-center gap-6">
            <Popover className="lg:hidden">
              {({ open }) => (
                <>
                  <Popover.Button
                    className="relative z-10 -m-2 inline-flex items-center  stroke-gray-100 p-2 hover:bg-gray-800/50 hover:stroke-gray-100 active:stroke-gray-100 [&:not(:focus-visible)]:focus:outline-none"
                    aria-label="Toggle site navigation"
                  >
                    {({ open }) =>
                      open ? (
                        <ChevronUpIcon className="h-6 w-6" />
                      ) : (
                        <MenuIcon className="h-6 w-6" />
                      )
                    }
                  </Popover.Button>
                  <AnimatePresence initial={false}>
                    {open && (
                      <>
                        <Popover.Overlay
                          static
                          as={motion.div}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="fixed inset-0 z-0 bg-gray-300/60 backdrop-blur"
                        />
                        <Popover.Panel
                          static
                          as={motion.div}
                          initial={{ opacity: 0, y: -32 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{
                            opacity: 0,
                            y: -32,
                            transition: { duration: 0.2 },
                          }}
                          className="absolute inset-x-0 top-0 z-0 origin-top rounded-b-2xl bg-gray-50 px-6 pb-6 pt-32 shadow-2xl shadow-gray-900/20"
                        >
                          <div className="space-y-4">
                            <MobileNavLink href="/about">About</MobileNavLink>

                            <MobileNavLink href="/#services">
                              Services
                            </MobileNavLink>
                            <MobileNavLink href="/#clients">
                              Clients
                            </MobileNavLink>
                          </div>
                          <div className="mt-8 flex flex-col gap-4">
                            <Button href="/#contact">Contact</Button>
                          </div>
                        </Popover.Panel>
                      </>
                    )}
                  </AnimatePresence>
                </>
              )}
            </Popover>
            {/* <Button href="/login" variant="outline" className="hidden lg:block">
              Log in
            </Button> */}
            <Button
              href="/#contact"
              className="text-btn  hidden justify-center py-4  px-4 text-center  !text-black text-black hover:bg-gray-700 hover:!text-white  active:text-black  sm:bg-white  lg:block "
            >
              CONTACT
            </Button>
          </div>
        </div>
      </nav>
    </header>
  )
}
