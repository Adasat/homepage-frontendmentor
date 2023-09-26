import Image from 'next/image'
import React, { useState } from 'react'
import logo from '../../../public/images/logo.svg'

import {
  useWindowWidth,
} from "@react-hook/window-size";
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';

function Header() {
  const widthScreen = useWindowWidth()

  return (
    <div className="flex flex-row gap-5 justify-between mb-10 w-full">
      <Image src={logo} width={60} height={20} alt='logo'/>
      {widthScreen <= 600 ?
      <HamburgerMenu/>
        :

      <div className="flex gap-8 text-DarkGrayishBlue font-inter font-body">
        <span>Home</span>
        <span>New</span>
        <span>Popular</span>
        <span>Trending</span>
        <span>Categories</span>
      </div>
      }
    </div>
  );
}

export default Header