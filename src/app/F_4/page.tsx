'use client'

import Image from "next/image"
import Navbar from "../Navbar/page"
import f4 from '../f4.jpg'
import Counter from '../Counter/page'
import Link from "next/link"
import Footer from "../footer/page"


const F4=()=>{
    return(
        <div>
                    <Navbar/>
                    <div className="flex mt-16">
                        <div className="w-1/2 flex justify-end p">
                            <Image src={f4} alt="" height={100} width={400}/>
                        </div>
                            <div className="w-1/2 flex justify-start pl-4 mt-8">
                                <div className="text-2xl font-bold px-10">Flex <br/> sweatShirt<br/><br/>
                                    <Counter/><br/>$400<br/><br/><Link href={''}> <div className="bg-blue-200 p-4 border border-gray-500 text-center">ADD TO CART</div></Link>
                                </div>   
                            </div>
                    </div>
            <Support/>
            <Footer/>
        </div>
    )
}
export default F4


const Support =()=>{
    return(
        <div className="flex justify-center mt-32">
            <div className="w-1/4 ">
                            <div className='text-xl flex justify-center font-bold'>Company<br/></div>
                            <Link href=''><div className='text-xl flex justify-center '>About<br/></div></Link>
                            <Link href=''><div className='text-xl flex justify-center '>Terms to use<br/></div></Link>
                            <Link href=''><div className='text-xl flex justify-center '>Privacy Policy<br/></div></Link>
                            <Link href=''><div className='text-xl flex justify-center '>How it works<br/></div></Link>
                            <Link href=''><div className='text-xl flex justify-center '>Contact Us<br/></div></Link>
                        </div>
                        <div className="w-1/4 flex justify-center">
                            <div>
                                <div className='text-xl flex justify-center font-bold'>Support<br/></div>
                                <Link href=''><div className='text-xl flex justify-center '>Support Email<br/></div></Link>
                                <Link href=''><div className='text-xl flex justify-center '>24H Service<br/></div></Link>
                                <Link href=''><div className='text-xl flex justify-center '>Quick Chat<br/></div></Link>
                            </div>
                        </div>
                        <div className="w-1/4 flex justify-center">
                            <div>
                                <div className='text-xl flex justify-center font-bold'>Contact<br/></div>
                                <Link href=''><div className='text-xl flex justify-center '>Whatsapp<br/></div></Link>
                                <Link href=''><div className='text-xl flex justify-center '>Chat<br/></div></Link>
                                 
                            </div>
            </div>
        </div>
        
    )
}