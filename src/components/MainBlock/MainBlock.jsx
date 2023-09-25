import Image from 'next/image'
import React, { useEffect, useState } from 'react'

import imgDesktop from '../../../public/images/image-web-3-desktop.jpg'
import imgMobile from "../../../public/images/image-web-3-mobile.jpg";

import {
  useWindowSize,
  useWindowWidth,
  useWindowHeight,
} from "@react-hook/window-size";


function MainBlock() {
  const widthScreen = useWindowWidth()

  return (
    <div className="flex xs:flex-col xs:justify-center xs:items-center xs:w-full w-full  md:flex-row ">
      <div className="flex flex-col xs:justify-center items-center xs:w-screen md:w-7/8 xs:mr-0 md:mr-12">
        {widthScreen <= "500" ? (
          <Image
            src={imgMobile}
            alt="Imagen de Home"
            className="w-full self-center mb-5"
          />
        ) : (
          <Image
            src={imgDesktop}
            alt="Imagen de Home"
            className="w-full h-3/5 mb-5"
          />
        )}
        <div className="flex xs:flex-col md:flex-row w-full">
          <p className="text-6xl font-800 font-fuente p-2 ">
            The Bright Future of Web 3.0?{" "}
          </p>
          <div className="flex flex-col justify-between p-5">
            <p className="text-body lg:text-xl text-DarkGrayishBlue mx-2">
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the people. But is
              it really fulfilling its promise?
            </p>
            <button className="bg-SoftRed p-2 text-backgroundWhite text-body font-700 font-fuente xs:w-full md:w-2/4 border-1 border-black tracking-widest">
              READ MORE
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col bg-VeryDarkBlue text-white font-fuente p-5">
        <p className="text-SoftOrange font-bold text-4xl mb-5">New</p>
        <p className="text-backgroundWhite font-bold text-lg mb-1">
          Hydrogen VS Electric Cars
        </p>
        <p className="text-GrayishBlue text-b text-justify">
          Will hydrogen-fueled cars ever catch up to EVs?
        </p>
        <divider className="border-b-2 border-DarkGrayishBlue my-5" />
        <p className="text-backgroundWhite font-bold text-lg mb-1">
          The Downsides of AI Artistry
        </p>
        <p className="text-GrayishBlue text-b text-justify">
          What are the possible adverse effects of on-demand AI image
          generation?
        </p>
        <divider className="border-b-2 border-DarkGrayishBlue my-5" />
        <p className="text-backgroundWhite font-bold text-lg mb-1">
          Is VC Funding Drying Up?
        </p>
        <p className="text-GrayishBlue text-b text-justify">
          Private funding by VC firms is down 50% YOY. We take a look at what
          that means.
        </p>
      </div>
    </div>
  );
}

export default MainBlock

