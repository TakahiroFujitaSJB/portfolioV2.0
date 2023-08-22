import React from 'react';
import Lottie from "lottie-react";
import SkillsAni from '../assets/lottie/SkillsAni';

import C from '../assets/img/c++.png';
import Python from '../assets/img/python.png';
import OpenAI from '../assets/img/OpenAI.png';
import BERT from '../assets/img/BERT.png';
import Java from '../assets/img/java.png';
import JavaScript from '../assets/img/javascript.png';
import HTML from '../assets/img/html.png';
import CSS from '../assets/img/css.png';
import ReactImg from '../assets/img/react.png';
import Node from '../assets/img/node.png';
import GitHub from '../assets/img/github.png';
import Tailwind from '../assets/img/tailwind.png';

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen pb-14 bg-gradient-to-b from-[#1854ad] via-[#4508b4] to-[#b503fc] text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div className='w-full grid grid-cols-2 sm:grid-cols-2 text-center'>
              <p className='text-4xl font-bold flex items-center justify-center '><a className="underline decoration-red-500">
                Skills</a></p> 
            <Lottie animationData={SkillsAni} className='max-h-[400px] max-w-[400px] py-10' />
          </div>
              <p className='py-4 text-lg'>Within my University Career whether it be in a Course or Club, I have learned 
              and used many technologies. Here are some of them! </p>      

          <div className='w-full grid grid-cols-2 sm:grid-cols-5 gap-4 text-center pb-8 pt-4 '>

              <div className='shadow-md max-h-[150px] shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto py-1' src={C} alt="HTML icon" />
                  <p className='my-4'>C++</p>
              </div>
              <div className='shadow-md max-h-[150px] shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto py-1' src={Python} alt="HTML icon" />
                  <p className='my-4'>Python</p>
              </div>
              <div className='shadow-md max-h-[150px] shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto py-1' src={OpenAI} alt="HTML icon" />
                  <p className='my-4'>OpenAI</p>
              </div>  
              <div className='shadow-md max-h-[150px] shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto py-1' src={BERT} alt="HTML icon" />
                  <p className='my-4'>BERT Hugging face</p>
              </div>         

              <div className='shadow-md max-h-[150px] shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='max-w-[100px] max-h-[100px] mx-auto py-1' src={Java} alt="HTML icon" />
                  <p className='my-4'>JAVA</p>
              </div>
              <div className='shadow-md max-h-[150px] shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={JavaScript} alt="HTML icon" />
                  <p className='my-4'>JAVASCRIPT</p>
              </div>
              <div className='shadow-md max-h-[150px] shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto py-1' src={HTML} alt="HTML icon" />
                  <p className='my-4'>HTML</p>
              </div>
              <div className='shadow-md max-h-[150px] shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto py-1' src={CSS} alt="HTML icon" />
                  <p className='my-4'>CSS</p>
              </div>
              <div className='shadow-md max-h-[150px] shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto py-1' src={ReactImg} alt="HTML icon" />
                  <p className='my-4'>REACT</p>
              </div>
              <div className='shadow-md max-h-[150px] shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto py-1' src={GitHub} alt="HTML icon" />
                  <p className='my-4'>GITHUB</p>
              </div>
              <div className='shadow-md max-h-[150px] shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto py-1' src={Node} alt="HTML icon" />
                  <p className='my-4'>NODE JS</p>
              </div>
              <div className='shadow-md max-h-[150px] shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto py-1' src={Tailwind} alt="HTML icon" />
                  <p className='my-4'>TAILWIND</p>
              </div>
          </div>
      </div>
    </div>
  );
};

export default Skills;