'use client'

import React, { useState } from 'react'
import { NAV_LINKS } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import Button from './Button'

interface NavItem {
  href: string
  key: string
  label: string
}

const Navbar: React.FC = () => {
  const [activeLink, setActiveLink] = useState<string | null>(null)

  const handleLinkClick = (key: string) => {
    setActiveLink(key)
  }

  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
      </Link>

      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link: NavItem) => (
          <Link href={link.href} key={link.key}>
            <button
              className={`regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold ${
                activeLink === link.key
                  ? 'bold-16 border-b-4 border-orange-50 text-black flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold'
                  : ''
              }`}
              onClick={() => handleLinkClick(link.key)}
            >
              {link.label}
            </button>
          </Link>
        ))}
      </ul>

      <div className="lg:flexCenter hidden">
        <Button
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>

      <Image
        src="menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
      />
    </nav>
  )
}

export default Navbar
