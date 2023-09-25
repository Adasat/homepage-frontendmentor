import Image from 'next/image'
import React from 'react'
import logo from '../../../public/images/logo.svg'

function Header() {
  return (
    <div className="flex flex-row sm:justify-center gap-5 md:justify-between mb-10 w-full">
      <Image src={logo} width={60} height={20} />
      <div className="flex gap-8 text-DarkGrayishBlue font-inter font-body">
        <span>Home</span>
        <span>New</span>
        <span>Popular</span>
        <span>Trending</span>
        <span>Categories</span>
      </div>
    </div>
  );
}

export default Header