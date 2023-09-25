import Image from 'next/image'
import React from 'react'

import imgDesktop from '../../../public/images/image-web-3-desktop.jpg'
import imgMobile from "../../../public/images/image-web-3-mobile.jpg";



function MainBlock() {
  return (
    <div className="flex sm:flex-col md:flex-row w-full">
      <div className="flex flex-col w-7/8 mr-12">
        <Image src={imgDesktop} className="w-full h-3/5" />
        <div className="flex sm:flex-col md:flex-row w-full">
          <p>The Bright Future of Web 3.0? </p>
          <div className="flex flex-col w-2/3">
            <p>
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the people. But is
              it really fulfilling its promise?{" "}
            </p>
            <button>Read more</button>
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

