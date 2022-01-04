import React from 'react';
import './Navbar.module.css';

const Navbar = () => {
    return (
        <>
            <div className='flex justify-around my-2'>
                <div className='text-2xl'>
                    <h1 className=''>Blood <span className='text-red-600'>Donataion</span> </h1>
                </div>
                <div className='nav-link' >
                    <ul className='flex space-x-8 text-xl font-medium'>
                        <li className='hover:text-red-600'>Home</li>
                        <li className='hover:text-red-600'>About Us</li>
                        <li className='hover:text-red-600'>Donate</li>
                        <li className='hover:text-red-600'>News & Blogs</li>
                        <li className='hover:text-red-600'>Contact</li>
                    </ul>
                </div>
            </div>

        </>
    );
};

export default Navbar;