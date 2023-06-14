import React from "react";
import flexpush from "../flexpush.jpg"
import flexshirt from "../flexshirt.jpg"
import Image from "next/image";
import sixty from "../sixty.jpg"
import thirty from "../thirty.jpg"


const Page1_3=()=>{
    return(
        <div className="flex justify-center mt-16 ">
            <div className="w-1/2 pl-20 ">
            {/* Content for the 1 column */}
            <Image src={sixty} alt="" height={800} width={650} />
            <Image src={thirty} alt="" height={800} width={630} />
            </div>
            <div className="w-1/2 flex flex-justify-end px-4">
            {/* Content for the 2 column */}
            <Image src={flexpush} alt="" height={450} width={320} />
            <Image src={flexshirt} alt="" height={450} width={320} />
            </div>           
        </div>
        
    )
}

export default Page1_3