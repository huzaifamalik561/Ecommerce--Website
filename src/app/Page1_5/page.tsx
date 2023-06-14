import React from 'react'
import Image from 'next/image'
import Slider from 'react-slick';
import I1 from '../I1.jpg'
import I2 from '../I2.jpg'
import I3 from '../I3.jpg'
import I4 from '../I4.jpg'
import I5 from '../I5.jpg'
import I6 from '../I6.jpg'
import ysy from '../ysy.jpg'
import logo1 from '../logo1.webp'
import Link from 'next/link'


const SlidingImageGallery = () => {

  return (

        <div>
                    <div className=" flex justify-center mt-8 pl-20">
                        <div className='w-1/3'>
                        <Image src={I1}alt="Sweat shirt" height={400} width={385} className="hover:opacity-80 hover:scale-150" />
                        </div>
                        <div className='w-1/3'>
                        <Image src={I2} alt="Tie shirt" height={400} width={400} className="hover:opacity-80 hover:scale-150" />
                        </div>
                        <div className='w-1/3'>
                        <Image src={I3} alt="Sweat Pants" height={400} width={400} className="hover:opacity-80 hover:scale-150" />
                        </div>
                    </div>
                    <div className='text-5xl font-bold flex justify-center mt-32'> Unique and<br/> Authentic Vintage<br/> Designer Jewellery</div>

                    <div className="flex mt-16 pl-32">
                        <div className="w-1/2">
                            <div className="flex">
                            <div className="w-1/2 relative">
                                <div className="absolute top-0 left-0 w-full h-full opacity-50">
                                <p className="text-blue-100 text-center font-bold text-7xl">We are here for you</p>
                                </div>
                                <div className='text-black-900'><strong>Using Good Quality<br/> Materials<br/></strong>Lorem ipsum dolor sit<br/> amt, consectetur adipiscing<br/> elit</div>
                                <div><br/><br/><strong>Using Good Quality<br/> Materials<br/></strong>Lorem ipsum dolor sit<br/> amt, consectetur adipiscing<br/> elit</div>
                            </div>
                            <div className="w-1/2">
                            <div className='text-black-900'><strong>Using Good Quality<br/> Materials<br/></strong>Lorem ipsum dolor sit<br/> amt, consectetur adipiscing<br/> elit</div>
                                <div><br/><br/><strong>Using Good Quality<br/> Materials<br/></strong>Lorem ipsum dolor sit<br/> amt, consectetur adipiscing<br/> elit</div>
                            </div>
                            </div>
                        </div>
                            <div className="w-1/2 flex">
                                <div className="w-1/2">
                                <div><Image src={I5} alt='' height={300} width={290}/></div>
                                </div>
                                <div className="w-1/2">
                                <div className='text-xl'>This piece is ethically crafted<br/> in our small family-owned<br/> workshop in Peru with unmatched attention to detail<br/> and care. The Natural color is<br/> the actual natural color of the fiber, undyed and 100% traceable.</div>
                                <div className='mt-8'><Image src={ysy} alt='' height={90} width={130}/></div>
                            </div>
                            
                        </div>
                    </div>
                    <div className='flex justify-center mt-32'>
                        <div className="w-1/4 ">
                            <div className='flex justify-center'><Image src={logo1} alt="" height={200} width={200}/></div>
                            <div className='flex justify-center pl-16 mt-2 '>Small, artisan label that offers a <br/> thoughtfully curated collection of high quality everyday essentials made.</div>
                        </div>
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
                    
        </div>
  )}
  export default SlidingImageGallery

