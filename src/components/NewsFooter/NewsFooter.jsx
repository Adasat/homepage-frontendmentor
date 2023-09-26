import React from 'react'

import image1 from '../../../public/images/image-retro-pcs.jpg'
import image2 from "../../../public/images/image-top-laptops.jpg";
import image3 from "../../../public/images/image-gaming-growth.jpg";
import Image from 'next/image';

function NewsFooter() {
  return (
    <div className="flex xs:flex-col md:flex-row md:gap-5 xs:mt-10 xs:gap-8">
      <div className="flex flex-row xs:gap-6 gap-4 md:w-1/3">
        <Image
          src={image1}
          alt="Reviving Retro PCs"
          width={80}
          className="h-"
        />
        <div className="flex flex-col ">
          <p className="text-3xl font-fuente text-GrayishBlue font-800">01</p>
          <p className="text-lg font-700 font-fuente">Reviving Retro PCs</p>
          <p className="text-body text-DarkGrayishBlue">
            What happens when old PCs are given modern upgrades?
          </p>
        </div>
      </div>
      <div className="flex flex-row xs:gap-6 gap-4 md:w-1/3">
        <Image src={image2} alt="Top 10 Laptops" width={80} />

        <div className="flex flex-col">
          <p className="text-3xl font-fuente text-GrayishBlue font-800">02</p>
          <p className="text-lg font-700 font-fuente">Top 10 Laptops of 2022</p>
          <p className="text-body text-DarkGrayishBlue">
            Our best picks for various needs and budgets.
          </p>
        </div>
      </div>
      <div className="flex flex-row xs:gap-6 gap-4 md:w-1/3">
        <Image src={image3} alt="The Growth of Gaming" width={80} />

        <div className="flex flex-col">
          <p className="text-3xl font-fuente text-GrayishBlue font-800">03</p>
          <p className="text-lg font-700 font-fuente">The Growth of Gaming</p>
          <p className="text-body text-DarkGrayishBlue">
            How the pandemic has sparked fresh opportunities.
          </p>
        </div>
      </div>
    </div>
  );
}

export default NewsFooter