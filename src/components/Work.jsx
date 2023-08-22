import React from 'react';
import { data } from "../data/data.js";


const Work = () => {

    // projects file
    const project = data;
    //setProject(data);
  
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-gradient-to-b from-[#b503fc] via-[#3326a8] to-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
            Work
          </p>
          <p className='py-6'>Here are some of the Major Projects I've worked on!</p>
        </div>

{/* container for projects */}
<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 ">
          
          {/* Gird Item */}
          {project.map((item, index) => (
  <div
    key={index}
    style={{ backgroundImage: `url(${item.image})` }}
    className="hover:scale-110 duration-500 shadow-lg w-[300px] h-[250px] bg-cover bg-center shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div "
  > 
    {/* Hover effect for images */}
    <div className="opacity-0 group-hover:opacity-100 ">
      <span className="text-4xl font bold  bg-gray-400 text-white tracking-wider ">
        {item.name}
      </span>
      <div className="text-sm font bold  bg-gray-400 text-white tracking-wider mt-3">
        {item.info}
      </div>
      <div className="pt-8 text-center ">
        {/* eslint-disable-next-line */}
        <a href={item.github} target="_blank">
          <button
            className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
          >
            Source
          </button>
        </a>
      </div>
    </div>
  </div>
))}


</div>
      </div>
    </div>
  );
};

export default Work;