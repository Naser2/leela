import { useState } from 'react'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import clsx from 'clsx'
import { DesktopMenuIcon } from './Header'

export function NavLinks() {
  let [hoveredIndex, setHoveredIndex] = useState(null)

  return [
    ['About', '/about'],
    ['Services', '/#services'],
    ['Clients', '/#clients'],
    // ['Pricing', '#pricing'],
    // ['Contact', '/#contact'],
  ].map(([label, href], index) => (
    <Link
      key={label}
      href={href}
      className={clsx(
        'color_15 text-2 relative -my-2 -mx-3 rounded-lg  px-4 py-2 text-sm transition-colors delay-150 hover:py-1 hover:text-white hover:delay-[0ms]'
      )}
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      <AnimatePresence>
        {hoveredIndex === index && (
          <motion.span
            className="absolute inset-0  bg-gray-900/50"
            layoutId="hoverBackground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.15 } }}
            exit={{
              opacity: 0,
              transition: { duration: 0.15, delay: 0.2 },
            }}
          />
        )}
      </AnimatePresence>
      <span class="css-4xd708">
        <span className={clsx('css-n6s3hr relative z-10 ')}>{label}</span>
        {/* <span class="css-lmv9yd">VIDEOS</span> */}
        <span class="css-rk7ym5">
          <div
            class="css-mzw0dv"
            style={{
              borderTopWidth: '2px',
              transform: 'scaleX(0)',
              transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.68, 0.06)',
              width: '47.5859px',
            }}
          >
            {/* <DesktopMenuIcon /> */}
          </div>
        </span>
      </span>
    </Link>
  ))
}

export function FooterNavLinks({ color }) {
  let [hoveredIndex, setHoveredIndex] = useState(null)

  return [
    ['About', '/about'],
    ['Services', '/#services'],
    ['Portfolio', '/portfolio'],
    // ['Pricing', '#pricing'],
    // ['Contact', '#contact'],
  ].map(([label, href], index) => (
    <Link
      key={label}
      href={href}
      className={clsx(
        color ? color : ' text-gray-700',
        'relative -my-2 -mx-3 rounded-lg px-3 py-2 text-sm transition-colors delay-150 hover:text-gray-900 hover:delay-[0ms]'
      )}
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      <AnimatePresence>
        {hoveredIndex === index && (
          <motion.span
            className="absolute inset-0 rounded-lg bg-gray-700/80"
            layoutId="hoverBackground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.15 } }}
            exit={{
              opacity: 0,
              transition: { duration: 0.15, delay: 0.2 },
            }}
          />
        )}
      </AnimatePresence>
      <span class="css-4xd708">
        <span className={clsx(color ? color : 'css-n6s3hr relative z-10 ')}>
          {label}
        </span>
        {/* <span class="css-lmv9yd">VIDEOS</span> */}
        <span class="css-rk7ym5">
          <div
            class="css-mzw0dv"
            style={{
              borderTopWidth: '2px',
              transform: 'scaleX(0)',
              transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.68, 0.06)',
              width: '47.5859px',
            }}
          ></div>
        </span>
      </span>
    </Link>
  ))
}
