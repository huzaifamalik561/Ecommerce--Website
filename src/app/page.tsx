"use client"
import Navbar from '../app/Navbar/page'
import Footer from '../app/footer/page'
import ImageLayout from './Imagess/page'
import Page1_2 from '../app/page1_2/page'
import Page1_3 from "../app/Page1_3/page"
import Page1_4 from './Page1_4/page'
import SlidingImageGallery from './Page1_5/page'


export default function Home() {
  return (
    <main>
      <Navbar/>
      <ImageLayout/>
      <Page1_2/>
      <Page1_3/>
      <Page1_4/>
      <SlidingImageGallery/>
      <div className='' ><Footer/></div>
    </main>
  )
}

