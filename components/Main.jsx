import React from 'react'
import Link from 'next/link'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import {AiOutlineMail} from 'react-icons/ai';




const Main = () => {
 

  return (
  <>

    <div className='w-full h-screen text-center'>
<div className="max-w-[1240px] w-full h-full flex justify-center items-center mx-auto">
 
  <div>
  <p className='uppercase text-sm tracking-widest text-gray-600'>
            LET&apos;S BUILD SOMETHING TOGETHER
          </p>
          <h1 className='py-2 text-4xl text-gray-700 font-bold'>
            Hi, I&apos;m a<span className='text-[#5651e5]'> Seler</span>
          </h1>
          <h1 className='py-2 text-gray-700 text-3xl font-semibold'>A Front-End Web Developer</h1>
          <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
            I’m a front-end web developer specializing in building (and
            occasionally designing) exceptional digital experiences. Currently,
            I’m focused on building responsive front-end web applications while
            learning back-end technologies.
          </p>
          <ul className='flex gap-5 flex-wrap justify-center'>
                    <li className='p-2 cursor-pointer shadow-lg shadow-gray-400 rounded-full'>
                      <Link href='/'>
                        <FaLinkedinIn className='cursor-pointer' size='20'/>
                      </Link>
                    </li>
                    <li className='p-2 shadow-gray-400 cursor-pointer shadow-lg rounded-full'>
                      <Link href='/https://github.com/Faisal-Ahmed100'>
                       <a target='_blank'>
                       <FaGithub className='cursor-pointer' size='20'/>
                       </a>
                      </Link>
                    </li>
                    <li className='p-2 shadow-gray-400 cursor-pointer shadow-lg rounded-full'>
                      <Link href='/'>
                        <AiOutlineMail className='cursor-pointer' size='20'/>
                      </Link>
                    </li>
                    <li className='p-2 shadow-gray-400 cursor-pointer shadow-lg rounded-full'>
                      <Link href='/'>
                        <BsFillPersonLinesFill className='cursor-pointer' size='20'/>
                      </Link>
                    </li>
                  </ul>
  </div>
</div>


    </div>
  </>
  )
}

export default Main;