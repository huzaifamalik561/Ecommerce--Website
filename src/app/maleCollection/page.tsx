

'Use client'
import Image from "next/image";
import m1 from '../m1.jpg'
import f2 from '../f2.jpg'
import f3 from '../f3.jpg'
import f4 from '../f4.jpg'
import f5 from '../f5.jpg'
import f6 from '../f6.jpg'
import Navbar from "../Navbar/page";
import React from "react";
import {useState} from 'react'
import Footer from "../footer/page";
import Link from 'next/link'
import F1 from '../F_1/page'
import F2 from '../F_2/page'
import F3 from '../F_3/page'
import F4 from '../F_4/page'
import F5 from '../F_5/page'
import F6 from '../F_6/page'


const maleCollection = ()=>{
    return(
        <div>
            <Navbar/>
                <div className="flex mt-20">
                    <div className="w-1/3 flex justify-center">
                        <Link href='/F_1'><Image src={m1} alt=" shirt" height={100} width={400} className="hover:opacity-80 hover:scale-150"/></Link>
                    </div>
                    <div className="w-1/3 flex justify-center">
                        <Link href='/F_2'><Image src={f2} alt="" height={100} width={400} className="hover:opacity-80 hover:scale-150"/></Link>
                    </div>
                    <div className="w-1/3 flex justify-center">
                        <Link href='/F-3'><Image src={f3} alt="" height={100} width={400} className="hover:opacity-80 hover:scale-150"/></Link>
                    </div>
                </div>

                <div className="flex mt-2">
                    <div className="w-1/3 flex justify-center">
                        <strong>Brushed Ruglan Shirt<br/>$500</strong>
                    </div>
                    <div className="w-1/3 flex justify-center">
                       <strong> Cameryn tie shirt<br/>$500</strong>
                    </div>
                    <div className="w-1/3 flex justify-center">
                        <strong>Flex sweatShirt<br/>$400</strong>
                    </div>
                </div>

                <div className="flex mt-20">
                    <div className="w-1/3 flex justify-center">
                        <Link href='/F_4'><Image src={f4} alt=" shirt" height={100} width={400} className="hover:opacity-80 hover:scale-150"/></Link>
                    </div>
                    <div className="w-1/3 flex justify-center">
                        <Link href='/F_5'><Image src={f5} alt="" height={100} width={400} className="hover:opacity-80 hover:scale-150"/></Link>
                    </div>
                    <div className="w-1/3 flex justify-center">
                        <Link href='/F_6'><Image src={f6} alt="" height={100} width={400} className="hover:opacity-80 hover:scale-150"/></Link>
                    </div>
                </div>
                <div className="flex mt-2">
                    <div className="w-1/3 flex justify-center">
                        <strong>Brushed Ruglan Shirt<br/>$500</strong>
                    </div>
                    <div className="w-1/3 flex justify-center">
                       <strong> Cameryn tie shirt<br/>$500</strong>
                    </div>
                    <div className="w-1/3 flex justify-center">
                        <strong>Flex sweatShirt<br/>$400</strong>
                    </div>
                </div>
                <Support/>
                <Footer/>
                
        </div>
        
    )
}

export default maleCollection;

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
    )}