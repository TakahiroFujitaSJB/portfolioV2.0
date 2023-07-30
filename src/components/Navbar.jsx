import React, { useState } from 'react';
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaLinkedinIn,
} from 'react-icons/fa';

import { BsMailbox } from 'react-icons/bs';
import { BsFillPassFill } from 'react-icons/bs';
import { Link } from 'react-scroll';
import Logo from '../assets/img/logo.PNG'

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);
    
    return (
        <div className='fixed w-full h-[80px] flex justify-left items-center 
        px-4 bg-black text-gray-300'> 

            <div>
            <img src={Logo} alt="My Face" style={{height: '40px', width: '80px'}} />
            </div>

            <ul className='hidden md:flex'>
                <li>
                    <Link to='home' smooth={true} duration={500}>
                    Home
                    </Link>
                </li>
                <li>
                    <Link to='about' smooth={true} duration={500}>
                    About
                    </Link>
                </li>
                <li>
                    <Link to='skills and work' smooth={true} duration={500}>
                    Skills and Work
                    </Link>
                </li>
                <li>
                    <Link to='contact' smooth={true} duration={500}>
                    Contact
                    </Link>
                </li>
            </ul>

            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>


            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#ff3535]'>
                        <a
                        className='flex justify-between items-center w-full text-gray-300'
                        href='/'
                        >
                        Email <BsMailbox size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                        <a
                        className='flex justify-between items-center w-full text-gray-300'
                        href='/'
                        >
                        Resume <BsFillPassFill size={30} />
                        </a>
                    </li>
                </ul>
            </div>

        </div>
    );
};

export default Navbar