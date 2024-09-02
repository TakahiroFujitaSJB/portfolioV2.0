import React, { useState } from 'react';


import { BsMailbox } from 'react-icons/bs';
import { BsFillPassFill } from 'react-icons/bs';
import { Link } from 'react-scroll';
import Logo from '../assets/img/Logo.png'

const Navbar = () => {
    const [nav, setNav] = useState(false);
    
    return (
    <div className='fixed w-full h-[80px] flex justify-left items-center 
        px-5 bg-[#000000] text-gray-300 z-20'> 

        <div>
            <img src={Logo} alt="Logo" className="w-[80px] h-[40px]" />
        </div>

            <ul className='md:flex'>
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
                    <Link to='skills' offset={-245} smooth={true} duration={500}>
                    Skills
                    </Link>
                </li>
                <li>
                    <Link to='work' offset={-50} smooth={true} duration={500}>
                    Projects and Work
                    </Link>
                </li>
                <li>
                    <Link to='contact' smooth={true} duration={500}>
                    Contact
                    </Link>
                </li>
            </ul>

            <div className='hidden lg:flex fixed flex-col top-[35%] left-0 z-20' >
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#ff3535]'>
                        <a
                        className='flex justify-between items-right w-full text-gray-300'
                        href='mailto:TakahiroTanakaSJB@gmail.com'
                        >
                        Email <BsMailbox size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                        <a
                        className='flex justify-between items-right w-full text-gray-300'
                        href='https://drive.google.com/file/d/1Quwlpw84gQnQT-CD_FszxADPkeMZjSj-/view?usp=sharing'
                        target="_blank">
                        Resume & Transcript  <BsFillPassFill size={50} />
                        </a>
                    </li>
                </ul>
            </div>

    </div>
    );
};

export default Navbar