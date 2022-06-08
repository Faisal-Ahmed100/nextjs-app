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
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime, voluptate dolores amet porro aut fuga adipisci magnam unde tenetur enim, asperiores esse alias animi officia tempore! Nobis libero accusantium illo vel distinctio beatae nesciunt rem? Aliquam iure cupiditate error fuga temporibus optio sunt maxime odio minima! Saepe architecto vitae nesciunt quasi illum repudiandae, eos nisi corporis recusandae assumenda, nihil repellendus vel deserunt? Ipsum consequatur molestiae minus error fugit ex dolorem amet, debitis, consectetur aspernatur nemo? Mollitia nisi, beatae enim cumque esse consequuntur voluptatum distinctio totam nihil dignissimos et tenetur vero corrupti. Molestiae, quae quaerat! Corporis, animi! Porro molestiae minima doloremque cupiditate quod, magni ratione mollitia expedita autem eligendi hic magnam, facilis voluptatem aut saepe ullam molestias fugit, rem nisi? Similique, maxime inventore? Ab, ratione explicabo ad ipsa placeat rerum numquam facere beatae repellat nesciunt deleniti minus, earum possimus rem voluptatem consectetur eos. Voluptate ipsum iure impedit aliquam qui voluptates pariatur dolore, eum repellat, ex rerum? Quos facilis dolorum at iusto enim accusantium alias libero ullam voluptatem nostrum blanditiis adipisci maxime fuga sunt amet laborum corrupti a, est odit quis, velit eaque delectus unde. Fugit molestiae magni quod quidem, totam ratione nihil voluptas voluptatum sunt eaque natus quae. Eaque quaerat quasi porro veniam cumque illo, doloremque natus aspernatur pariatur itaque, deleniti adipisci aliquid quidem nesciunt inventore dolore, sunt voluptas aperiam? Fuga doloribus reprehenderit in earum quas magnam iste dolores, cumque animi ducimus autem odit consequatur quod nobis deserunt dicta eligendi pariatur? Iste quae, rem, natus quam consequuntur amet culpa necessitatibus sint commodi pariatur nobis. Voluptas, placeat veniam nostrum obcaecati laudantium quo molestiae corporis officiis fuga explicabo totam, aut neque. Dolor explicabo commodi maxime repellendus assumenda expedita asperiores illo placeat magni quam, mollitia minima doloribus aut quasi sint dolorem veritatis tempore dolores! Maxime in commodi iusto ullam facilis dolor, optio aperiam alias officiis id reprehenderit iure dolorem eos totam libero autem impedit corporis hic fugiat veniam beatae? Quisquam perspiciatis vel laboriosam exercitationem debitis corrupti pariatur voluptas ullam iusto impedit quae architecto fuga magni voluptatem rem quos, dolorem harum accusantium adipisci asperiores praesentium repellat beatae iste itaque! Ad iure id maxime molestias eius, quisquam iste aut quae laudantium veritatis expedita quo, excepturi praesentium odit nobis optio earum itaque. Suscipit et enim impedit! Aliquid quis eaque laborum corrupti eum porro nesciunt vero autem ad, exercitationem libero quidem eius quam illo quibusdam rem ratione dolorem sint ut dolores sunt. Corrupti repellat repellendus consectetur nostrum praesentium! Laborum architecto commodi laboriosam beatae quasi assumenda, qui eius soluta, dolor aliquam repellendus corrupti ut praesentium distinctio eveniet, eaque accusamus. Pariatur similique illum voluptate aspernatur quae architecto. Facere velit, provident quos illum assumenda commodi vel aliquam voluptates consequuntur facilis dolor accusamus! Cumque et provident, molestias quis odit aliquam temporibus deserunt fuga quam modi veniam culpa enim in ipsa odio dolor doloribus qui. Consectetur cum dolor accusantium ut et, mollitia quae saepe eveniet laboriosam placeat expedita ipsum corporis suscipit dicta exercitationem accusamus eos ipsa incidunt eius illo praesentium officiis! Sed nesciunt iusto beatae tempore veniam enim placeat a maiores ipsum porro!
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