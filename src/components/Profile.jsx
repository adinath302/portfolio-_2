import React from 'react'
import profile from '../assets/profile.jpg'
import { FaCode, FaReact } from "react-icons/fa6";
import { IoLocationOutline } from 'react-icons/io5';
import { BiEnvelope } from 'react-icons/bi';
import { GrReactjs } from "react-icons/gr";

const Profile = () => {
    return (
        <>
            <section className='flex-col flex px-6'>
                <div className='flex justify-between py-6 items-center mb-15'>
                    <span className='font-mono text-sm q1 text-gray-300'>
                        <span className=''>
                            ~/
                        </span>
                        adinath.codes
                    </span>
                    <ul className='q1 flex gap-6 items-center text-[12px]  md:text-[14px] font-mono mr-2.75 text-white'>
                        <li>Home</li>
                        <li>About</li>
                        <li>Project</li>
                    </ul>
                </div>
                <div className='flex items-center '>
                    <div className='mr-4'>
                        <img src={profile} alt="" className='rounded-2xl h-17 w-17 object-cover border-2 border-white ' />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <div className='text-3xl md:text-4xl text-white flex-col flex p1 '>
                            Adinath Gaware
                        </div>
                        <div className='text-[16px] md:text-[18px] font-sans q2 text-gray-300'>
                            Front-end Developer
                        </div>
                    </div>
                </div>
            </section>
            <section className='px-6'>
                <div className='flex flex-col gap-1 mt-9'>
                    <div className='q1 flex gap-3 text-gray-300 items-center select-none text-sm'>
                        <span className='p-1.5 border rounded-lg border-gray-700 '><FaCode /></span>
                        Front-End Developer
                    </div>
                    <div className='q1 flex gap-3 text-gray-300 items-center select-none text-sm'>
                        <span className='p-1.5 border rounded-lg border-gray-700 '><IoLocationOutline /></span>
                        Maharashtra, India
                    </div>
                    <div className='q1 flex gap-3 text-gray-300 items-center select-none text-sm'>
                        <span className='p-1.5 border rounded-lg border-gray-700 '><BiEnvelope /></span>
                        adinathgaware23072003@gmail.com
                    </div>
                    <p className='text-gray-400 q1 leading-8 mt-10.5 block'>
                        Front-end developer specializing in <span className=' items-center gap-2 inline-flex p-2 border-dotted-2 border-white '>React</span>, JavaScript, and Tailwind CSS, GSAP, building responsive and user-focused web applications with clean and scalable code.
                    </p>
                </div>
            </section>
        </>
    )
}

export default Profile;