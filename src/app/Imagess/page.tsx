import Image from "next/image"
import image4 from "../image4.jpg"
import sale from "../sale.jpg"
import start from "../start.jpg"
import instyle from "../instyle.jpg"
import Link from "next/link"

import React from 'react';

const ImageLayout = () => {
    return (
        <div className="flex">
          <div className="w-1/2 pl-40 mt-32">
            {/* Content for the left column */}
            <Image src={sale} alt="" height={150} width={150} />
            <div className="flex flex-col">
                <div className="text text-black font-bold text-5xl  whitespace-pre-wrap mt-8">An Industrial Take on Streetwear </div>
                <div className="text text-black  whitespace-pre-wrap mt-4"> Anyone can beat you but no one can <br/> beat your outfit as long as<br/> you wear Dine outfits. </div>
            </div>
            <Image src={start} alt="" height={170} width={170} className="mt-8"/>
            <Link href=''><Image src={instyle} alt="" height={470} width={470} className="mt-8"/></Link>
          </div>
          <div className="w-1/2">
            {/* Content for the right column */}
            <Image src={image4} alt="" height={700} width={600} />
          </div>
        </div>
            
      );
    };

export default ImageLayout;

