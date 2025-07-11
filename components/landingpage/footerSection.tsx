import React from 'react'
import { FaXTwitter } from "react-icons/fa6";
import { TiSocialLinkedin } from "react-icons/ti";
import { FaGithub } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { CiMail } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import Link from 'next/link';

const FooterSection = () => {
  return (
    <div className='bg-black text-white'>
        <div className='flex sm:justify-evenly items-center flex-wrap gap-10 p-10'>
            <div className='flex flex-col gap-5'>
                <Link href={"/"}><h1 className='text-3xl font-bold text-[#fabb20]'>Startup</h1></Link>
                <p className='sm:w-90'>Empowering entrepreneurs to turn their innovative ideas into successful businesses. Join our community and take your startup to the next level.</p>
                <div className='flex gap-5 '> 
                    <Link href={"https://x.com/s4mzai"}><FaXTwitter size={25}/></Link>
                    <Link href={"https://github.com/s4mzai"}><FaGithub size={25}/></Link>
                    
                </div>
            </div>
            <div className='flex flex-col gap-3 '>
                <h1 className='text-lg text-[#fabb20]'>Quick Links</h1>
                <div className='flex flex-col gap-2'>
                    <Link href={"/#startupsection"}><span className='hover:underline underline-offset-3 cursor-pointer'>Browse Startups</span></Link>
                    <Link href={"/create"}><span className='hover:underline underline-offset-3 cursor-pointer'>Pitch Your Ideas</span></Link>

                </div>
            </div>
            <div className='flex flex-col gap-3 '>
                <h1 className='text-lg text-[#fabb20]'>Contact Us</h1>
                <div className='flex flex-col gap-2'>
                    <div className='flex items-center gap-3'>
                        <CiMail size={25} />
                        hello@example.com
                    </div>
                    <div className='flex items-center gap-3'>
                        <IoMdCall size={25} />
                        +91 9999999999
                    </div>
                    <div className='flex items-center gap-3'>
                        <CiLocationOn size={25} />
                        New Delhi, India
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FooterSection