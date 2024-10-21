import React, { useEffect, useState } from 'react';
import Logo from './Logo'
function Navbar() {

    return (
        <nav className='hidden lg:flex lg:px-24 xl:px-44 py-5 m-auto'>
            <a href="#section_feature" className='h6'>FEATURES</a>
            <div className="circle"></div>
            <a href="#section_pricing" className='h6'>PRICING</a>
            <Logo />
            <a href="#section_faq" className='h6'>FAQ</a>
            <div className="circle"></div>
            <a href="#section_download" className='h6'>DOWNLOAD</a>
        </nav>
    )
}

export default Navbar
