import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa6'

const Footer = () => {
    return (
        <div className='pt-[5rem] pb-[3rem] bg-[#111111]'>
            <div className='w-[80%] mx-auto grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[3rem] items-start pb-[2rem] border-b-2 border-white border-opacity-10'>
                {/* 1st part of footer */}
                <div>
                    <h1 className='text-[24px] text-white mb-[1rem] font-bold uppercase'>Jobify</h1>
                    <p className='text-[14px] text-white text-opacity-70'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Quod, corporis.</p>
                    {/* social icons */}
                    <div className='mt-[1.5rem] flex items-center space-x-3'>
                        <div className='w-[2.4rem] h-[2.4rem] bg-blue-600 rounded-full flex items-center justify-center flex-col'>
                            <FaFacebookF className='text-white' />

                        </div>
                        <div className='w-[2.4rem] h-[2.4rem] bg-sky-400 rounded-full flex items-center justify-center flex-col'>
                            <FaTwitter className='text-white' />

                        </div>
                        <div className='w-[2.4rem] h-[2.4rem] bg-red-800 rounded-full flex items-center justify-center flex-col'>
                            <FaYoutube className='text-white' />

                        </div>
                        <div className='w-[2.4rem] h-[2.4rem] bg-red-400 rounded-full flex items-center justify-center flex-col'>
                            <FaInstagram className='text-white' />

                        </div>


                    </div>
                </div>
                {/* 2nd part of */}
                


            </div>

        </div>
    )
}

export default Footer
