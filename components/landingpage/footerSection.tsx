import React from 'react'
import { FaXTwitter } from "react-icons/fa6";
import { TiSocialLinkedin } from "react-icons/ti";
import { FaGithub } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { CiMail } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";

const FooterSection = () => {
  return (
    <div className='bg-black text-white flex sm:justify-evenly items-center flex-wrap gap-10 p-10'>
        <div className='flex flex-col gap-5'>
            <h1 className='text-3xl font-bold text-[#fabb20]'>Startup</h1>
            <p className='sm:w-90'>Empowering entrepreneurs to turn their innovative ideas into successful businesses. Join our community and take your startup to the next level.</p>
            <div className='flex gap-5 '> 
                <FaXTwitter size={25}/>
                <FaGithub size={25}/>
            </div>
        </div>
        <div className='flex flex-col gap-3 '>
            <h1 className='text-lg text-[#fabb20]'>Quick Links</h1>
            <div className='flex flex-col gap-2'>
                <span className='hover:underline underline-offset-3 cursor-pointer'>Browse Startups</span>
                <span className='hover:underline underline-offset-3 cursor-pointer'>Pitch Your Ideas</span>
                <span className='hover:underline underline-offset-3 cursor-pointer'>For Investors</span>
                <span className='hover:underline underline-offset-3 cursor-pointer'>Success Stories</span>
            </div>
        </div>
        <div className='flex flex-col gap-3 '>
            <h1 className='text-lg text-[#fabb20]'>Contact Us</h1>
            <div className='flex flex-col gap-2'>
                <div className='flex items-center gap-3'>
                    <CiMail size={25} />
                    hello@mail.com
                </div>
                <div className='flex items-center gap-3'>
                    <IoMdCall size={25} />
                    +91 9898989898
                </div>
                <div className='flex items-center gap-3'>
                    <CiLocationOn size={25} />
                    New Delhi, India
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default FooterSection