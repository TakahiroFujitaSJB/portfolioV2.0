import React from 'react';
import { pData, tData } from "../data/data.js";


const Work = () => {

    // projects file
    const pProject = pData;
    const tProject = tData;
    //setProject(data);
  
  return (
    <div name='work' className='w-full md:h-screen pt-40  text-gray-300 bg-gradient-to-b from-[#b503fc] via-[#3326a8] to-[#0a192f]'>
      <div className='max-w-[1500px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8 ' >
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
            Projects
          </p>
          <p className='py-6'>Here are some personal projects I've been working on!</p>
        </div>

        {/* container for projects */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-[40px]  ">
          {pProject.map((item, index) => (
            <div
              key={index}
              style={{ backgroundImage: `url(${item.image})` }}
              className="hover:scale-110 duration-500 shadow-lg w-[350px] h-[300px] bg-cover bg-center bg-no-repeat shadow-[#040c16] group container rounded-md 
                flex justify-center text-center items-center mx-auto content-div "
            > 
              {/* Hover effect for images */}
              <div className="flex flex-col items-center justify-center h-full w-full opacity-0 group-hover:opacity-100 hover:bg-opacity-70 hover:bg-purple-800 transition duration-700 rounded-md">
                <div className="text-center">
                  <span className="text-4xl font-bold text-white tracking-wider">
                    {item.name}
                  </span>
                  <div className="text-sm font-bold text-white tracking-wider mt-3 mx-1">
                    {item.info}
                  </div>
                  <div className="pt-8">
                    <a href={item.github} target="_blank" rel="noopener noreferrer">
                      <button
                        className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"
                      >
                        Source
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='max-w-[1500px] mx-auto pt-10 flex flex-col justify-center  w-full h-full'>
          <div className='pb-8 pt-4'>
            <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
              Work Projects
            </p>
            <p className='py-6'>Here are some Industry Work invovled projects I have worked on!</p>
          </div>

          {/* container for projects */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-[20px]  ">
            {tProject.map((item, index) => (
              <div
                key={index}
                style={{ backgroundImage: `url(${item.image})` }}
                className="hover:scale-110 duration-500 shadow-lg w-[350px] h-[300px] bg-cover bg-center bg-no-repeat shadow-[#040c16] group container rounded-md 
                  flex justify-center text-center items-center mx-auto content-div "
              > 
                {/* Hover effect for images */}
                <div className="flex flex-col items-center justify-center h-full w-full opacity-0 group-hover:opacity-100 hover:bg-opacity-70 hover:bg-purple-800 transition duration-700 rounded-md">
                  <div className="text-center">
                    <span className="text-4xl font-bold text-white tracking-wider">
                      {item.name}
                    </span>
                    <div className="text-sm font-bold text-white tracking-wider mt-3 mx-1">
                      {item.info}
                    </div>
                    <div className="pt-8">
                      <a href={item.github} target="_blank" rel="noopener noreferrer">
                        <button
                          className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"
                        >
                          Source
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
      </div>
     </div>
    </div>
  );
};

export default Work;