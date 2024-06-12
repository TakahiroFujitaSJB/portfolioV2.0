import React, { useState } from 'react';
import Lottie from "lottie-react";

import { Link } from 'react-scroll';
import {  } from 'react-icons/bs';
import SD from '../assets/lottie/SoftwareDev';
import animation from '../assets/img/AniGlobe.gif';

const Home = () => {
  
  return (
    <div name='home' className='w-full centre h-screen bg-cover relative'
    
    style={{
      backgroundImage: `url(${animation})` , zIndex: 0,
    }} 
    
    >
      {/* Container */}
      <div className='max-w-[1200px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600'>Hello! My name is</p>
        <h1 className='text-4xl  sm:text-7xl pb-5 font-bold text-[#9ea5be]'>
          TAKAHIRO FUJITA (藤田孝宗)
        </h1>
        <div className='max-w-[1300px] w-full grid grid-cols-2 gap-8 align-middle'>
          <h2 className='text-4xl sm:text-5xl font-bold text-[#8892b0] self-center'>
            Software Engineer and Web Developer.
          </h2>
          
          <div className='max-h-[300px] max-w-[300px] pt-3'>
            <Lottie animationData={SD} />
          </div>
        </div>
        
        <div>
          <li className='text-white group border-2 max-w-[150px] px-3 py-3 my-2 flex items-center hover:bg-blue-500 hover:border-blue-700' to='skills' smooth={true} duration={500}>
            <Link to='skills' offset={-200} smooth={true} duration={500}>
            View my skillset
            </Link>
          </li>
        </div>
      </div>
    </div>
  );
};

export default Home;
