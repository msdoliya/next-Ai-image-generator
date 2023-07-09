import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '@/assets/logo.svg'

const Header = () => {
  return (
    <>
      <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-2 border-b border-b-[#e6ebf4]">
            <Link href="/">
                <Image src={logo} alt="logo" className="w-28 object-contain" />
              </Link>
          
            </header>
    </>
  )
}

export default Header
