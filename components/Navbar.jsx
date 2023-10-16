import Image from 'next/image';
import React from 'react';
import logo from '@/assets/logo.png'
const Navbar = () => {
    return (
        <div className='h-24 bg-green-300'>
            This is navbar.
            {/* <Image alt='' src={logo} width={150} height={120}/> */}
        </div>
    );
};

export default Navbar;