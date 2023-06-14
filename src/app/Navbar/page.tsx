import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo1 from '../logo1.webp'
import SearchBar from '../searchbar/page';
import Huzaifa from '../advantages-of-ecommerce-shopping-cart-removebg-preview.png'

const Navbar = () => {
    return (
        <main >
            <div className='flex justify-center flex-row py-10'>
                <Link href={""}><div className='px-8'><Image src={logo1} alt='' width={150} height={150}/></div></Link>
                <Link href={'/femaleCollection'}><div className='px-8'>Female collection</div></Link>
                <Link href={'/maleCollection'}><div className="px-8">Male Collection</div></Link>
                <Link href={'/kids'}><div className='px-8'>Kids</div></Link>
                <SearchBar/>
                    <Link href={'/cart'}><div className='px-8'><Image src={Huzaifa} alt='' width={40} height={40} /></div></Link>
            </div>
        </main>
    );
};


export default Navbar;