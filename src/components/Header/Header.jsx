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
    <div className="flex flex-row gap-5 justify-between mb-8 w-full">
      <Image src={logo} width={60} height={20} alt='logo'/>
      {widthScreen <= 600 ?
      <HamburgerMenu/>
        :

      <div className="flex gap-14 text-DarkGrayishBlue font-inter text-body">
        <p>Home</p>
        <p>New</p>
        <p>Popular</p>
        <p>Trending</p>
        <p>Categories</p>
      </div>
      }
    </div>
  );
}

export default Header