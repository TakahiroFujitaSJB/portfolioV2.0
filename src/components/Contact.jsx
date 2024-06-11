import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-250 bg-[#0a192f] flex justify-center items-center pt-1 pb-20 -bottom-2'>
        <form method='POST' action="https://getform.io/f/6f89bc4f-447e-415b-81db-df7381934158" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-10'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>Fill in and submit the form below or you can shoot me an email at TakahiroTanakaSJB@gmail.com</p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="5" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Send</button>
        </form>
    </div>
  )
}

export default Contact