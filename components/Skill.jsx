import Image from 'next/image'
import React from 'react'

const Skill = () => {
    return (
        <div id='skills' className='w-full lg:h-screen p-3 md:px-5'>
          <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
              Skills
            </p>
            <h2 className='py-4'>What I Can Do</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
    
              <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                  <div className='m-auto'>
                    <Image
                      src='/../public/assets/skills/html.jpg'
                      width='64px'
                      height='64px'
                      alt='/'
                    />
                  </div>
                  <div className='flex flex-col items-center justify-center'>
                    <h3>CSS</h3>
                  </div>
                </div>
              </div>
              <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                  <div className='m-auto'>
                    <Image
                      src='/../public/assets/skills/css.jpg'
                      width='64px'
                      height='64px'
                      alt='/'
                    />
                  </div>
                  <div className='flex flex-col items-center justify-center'>
                    <h3>JavaScript</h3>
                  </div>
                </div>
              </div>
              <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                  <div className='m-auto'>
                    <Image
                      src='/../public/assets/skills/javascript.jpg'
                      width='64px'
                      height='64px'
                      alt='/'
                    />
                  </div>
                  <div className='flex flex-col items-center justify-center'>
                    <h3>React</h3>
                  </div>
                </div>
              </div>
              <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                  <div className='m-auto'>
                    <Image
                      src='/../public/assets/skills/react.jpg'
                      width='64px'
                      height='64px'
                      alt='/'
                    />
                  </div>
                  <div className='flex flex-col items-center justify-center'>
                    <h3>Tailwind</h3>
                  </div>
                </div>
              </div>
              <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                  <div className='m-auto'>
                    <Image
                      src='/../public/assets/skills/tailwind.jpg'
                      width='64px'
                      height='64px'
                      alt='/'
                    />
                  </div>
                  <div className='flex flex-col items-center justify-center'>
                    <h3>Firebase</h3>
                  </div>
                </div>
              </div>
              <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                  <div className='m-auto'>
                    <Image
                      src='/../public/assets/skills/firebase.jpg'
                      width='64px'
                      height='64px'
                      alt='/'
                    />
                  </div>
                  <div className='flex flex-col items-center justify-center'>
                    <h3>Github</h3>
                  </div>
                </div>
              </div>
              <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                  <div className='m-auto'>
                    <Image
                      src='/../public/assets/skills/github1.jpg'
                      width='64px'
                      height='64px'
                      alt='/'
                    />
                  </div>
                  <div className='flex flex-col items-center justify-center'>
                    <h3>Github</h3>
                  </div>
                </div>
              </div>
              <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                  <div className='m-auto'>
                    <Image
                      src='/../public/assets/skills/shopify.jpg'
                      width='64px'
                      height='64px'
                      alt='/'
                    />
                  </div>
                  <div className='flex flex-col items-center justify-center'>
                    <h3>Shopify</h3>
                  </div>
                </div>
              </div>
    
    
            </div>
          </div>
        </div>
      );
}

export default Skill