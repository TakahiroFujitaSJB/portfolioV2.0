import React from 'react';
import Self2 from '../assets/img/self2.jpg'; 

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-gradient-to-b from-[#000000] via-[#0e2246] to-[#1854ad] text-gray-300 pb-24'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8 align-middle'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold  inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div>
          </div>
          </div>
          <div className='w-full grid sm:grid-cols-2 gap-6 px-4'>
            <div className='max-w-[1300px] flex items-right justify-end'>
              <img src={Self2} alt="Self2" className="w-[400px] h-[430px]"/>
            </div>
            <div className='max-w-[630px] max-h-[600px] sm:text-lg md:text-xl lg:text-2xl self-center'>
              <p>
              I'm a English and Japanese speaking Software and Web Developer who recently Graduated from University of Calgary, majoring in Software Engineering.
              <br/> <br/> I specialize in Frontend and HCI (Human Computer Interaction) engineering. I also build software systems as well as web apps!
              As of recently, I've been honing my skills as a Full-stack developer as well! 
              </p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
