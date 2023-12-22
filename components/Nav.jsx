import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Nav = () => {
    return (
        <>
            <header>
                <div id="navigation__bar" className='flex justify-between items-center py-4 marginX px-2 bg-gra'>
                    <Link href='/'>
                        <div className='Logo p-2'>
                            <p>Food Order</p>
                        </div>
                    </Link>
                    <div className='Search p-2 flex items-center'>
                    <input type="text" name="" id="" className='border-2 border-lightGray rounded-3xl text-center text-[12px] py-1 ' />
                            <button><Image
                                src='/assets/icons/Magnifyingglass.png'
                                alt='logo'
                                width={20}
                                height={20}
                                className='object-contain'
                            /></button>
                    </div>
                    <div className='navLinks p-2'>
                        <ul className='flex gap-4'>
                            <li>Location</li>
                            <Link href='/offers'><li>Offers</li></Link>
                            <Link href='/help'><li>Help</li></Link>
                            <Link href='/signin'><li>SignIn</li></Link>
                        </ul>
                    </div>


                </div>
            </header>
        </>
    )
}

export default Nav