import Link from 'next/link';
import React from 'react';


const Footer = () => {

    return (
        <div id='footer' className='w-full bg-[#e4e4e4]'>
        <div className='max-w-[1240px] m-auto px-2 py-14 w-full'>
          <p className=' capitalize text-center text-sm text-gray-500'>
            This Site Made by ❤ <span className='cursor-pointer'>
                <Link href='https://github.com/Faisal-Ahmed100' target='_blank'>
                    <a target='_blank' className='text-[#5651e5]'>Faisal</a>
                </Link>
            </span>
          </p>
         
      
        </div>
       
      </div>
      );
}

export default Footer