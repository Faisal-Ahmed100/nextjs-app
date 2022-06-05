import Image from 'next/image';
import React from 'react';
import cryptoImg from '../public/assets/projects/crypto.jpg';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const crypto = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={cryptoImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Crypto App</h2>
          <h3>React JS / Tailwind / Firebase</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            This app was built using React JS and is hosted on Firebase. Users
            are able to search properties based on an Address, City, or ZIP code
            to retrieve a list of active properties currently for sale. You will
            be able to view property information as well as the specific
            location of the property integrated with the Google Maps API. User
            authentication is available so you can signup & signin to your
            account with an email address in order to save your favorite
            properties. This is made possible with Zillow API.
          </p>
          <button className='px-8 py-2 mt-4 mr-8 bg-gradient-to-r from-[#5651e5] to-[#709dff] text-white shadow-lg shadow-gray-400 rounded-md'>Demo</button>
          <button className='px-8 py-2 mt-4 mr-8 bg-gradient-to-r from-[#5651e5] to-[#709dff] text-white shadow-lg shadow-gray-400 rounded-md'>Code</button>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> React
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Tailwind
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Javascript
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Firebase
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Google API
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Zillow API
              </p>
            </div>
          </div>
        </div>
        <Link href='/#projects'>
          <p className='underline cursor-pointer'>Back</p>
        </Link>
      </div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia dolorum, voluptatem itaque beatae cumque, dolore cum fuga odit voluptates magni praesentium cupiditate reiciendis quasi quam repellat voluptate consequuntur aliquid labore! Id alias repudiandae ipsum fugit magni possimus beatae neque, porro omnis, necessitatibus placeat facere atque a debitis saepe sapiente qui suscipit quae recusandae, quo perspiciatis quaerat. Rem quia similique ex ea. Magni fuga recusandae delectus quis debitis voluptate praesentium fugiat amet doloribus pariatur, vel deleniti reiciendis mollitia libero modi. Vel reiciendis dolores id sit illum, quasi suscipit incidunt, esse dolorem cupiditate at in. Animi vero, minus nostrum ut accusamus dicta! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit impedit inventore quidem. Quae necessitatibus ad doloribus animi dolorem voluptatem, dicta blanditiis quasi. Maxime impedit omnis labore fugiat ad mollitia consectetur voluptatibus, odio modi assumenda possimus temporibus deserunt accusamus laborum? Molestias, impedit eum ut totam voluptate odio, recusandae quae reiciendis qui ipsum ratione officiis suscipit dolore reprehenderit a libero ex quam, esse natus cumque velit placeat sed dolorum error! Repudiandae doloremque sequi eum, repellat rerum rem cumque in magnam! Fugiat laudantium porro eum neque optio temporibus, voluptate nemo accusantium nostrum nesciunt facilis quidem alias nisi impedit asperiores voluptatibus error, id odio rem dolores magni rerum voluptatem reprehenderit sapiente? Assumenda, recusandae voluptates delectus qui odit quasi nostrum id temporibus possimus, nisi libero tenetur quidem blanditiis vitae mollitia aspernatur corrupti distinctio quos, excepturi aliquid itaque magni! Error, ratione numquam! Deserunt suscipit eum accusamus nulla quam praesentium! Vel illum, iusto consequuntur odio voluptate sequi ratione incidunt laboriosam minus, tenetur tempore nostrum ad est molestias deleniti non ducimus molestiae delectus facilis voluptatem. Mollitia eveniet commodi nihil ipsam, non laborum aspernatur, vel, enim id assumenda temporibus! Quos quas, quia voluptas neque minima incidunt accusantium ipsa enim est ratione nam, perferendis vero veniam soluta quaerat exercitationem itaque iusto, quidem magni error mollitia tempore amet ut beatae! Tempora id et architecto. Tempore, unde at perspiciatis dolorum placeat minus vel officia alias dolore nobis cupiditate aliquam quasi, voluptas non itaque corrupti porro quam quos consequuntur architecto obcaecati labore cum! Molestiae quo explicabo cumque harum eligendi deleniti fugiat! Modi officia error laboriosam quam, neque optio odio consequuntur consectetur consequatur quae harum! Omnis reiciendis, nisi, blanditiis in harum maiores velit eos officiis numquam voluptatibus animi, ipsam similique molestiae consequatur. Doloremque facere, aliquid temporibus ipsum vero eum illum eius rerum nam et porro nulla sit quo doloribus! Inventore ipsum, nostrum odio ratione, vero nemo nihil repellendus minima debitis sunt aspernatur veritatis hic pariatur aperiam blanditiis nobis ad dicta doloremque laborum ullam. Minus ut dolores aliquam consequuntur dolor culpa, voluptas quidem veniam voluptates quod nemo distinctio vero recusandae, ratione itaque delectus debitis esse sit. Autem, ipsum error corporis totam recusandae id tempora quisquam qui repellendus iure blanditiis maxime dolorum! Voluptatem ad corporis consequatur numquam quo nesciunt voluptates odit quas, dolorem tempore laudantium praesentium reiciendis sunt dolorum dolor illo, eum sit. Magnam ea, laboriosam accusantium neque fuga dolorum fugit quisquam illum mollitia porro nisi laudantium accusamus repellendus ab consequuntur sit a adipisci suscipit sed numquam eos eum aperiam inventore. Dolorum consectetur neque itaque mollitia quasi sint expedita minima eos alias, sed dolorem recusandae est consequatur nesciunt debitis optio aliquam dicta rerum deleniti sunt dolores tempora commodi! Dolorum, quae doloribus cum provident magni inventore harum iusto fugiat voluptatum soluta velit consequatur dolorem nulla ratione explicabo natus iste itaque animi esse quisquam at. In voluptates repudiandae cum delectus nemo necessitatibus ducimus, commodi ratione atque ea. Magnam minima nobis voluptatum neque sint, velit autem quae id! Praesentium tempore, et harum suscipit esse minima eum a ratione ad quae inventore veritatis aspernatur vitae magni, cupiditate, autem exercitationem maiores accusantium alias quo asperiores eligendi quia amet itaque? Dolorem eveniet quam earum vel. Vitae aperiam sint, obcaecati quibusdam explicabo, totam magnam harum deleniti iure atque a ex architecto molestiae reiciendis quisquam voluptatem excepturi. Eaque tenetur, ullam laborum sint blanditiis possimus hic quis rem at sunt placeat culpa rerum dignissimos adipisci aliquam est minus optio commodi veritatis ipsum, recusandae quidem. Unde facere suscipit perspiciatis non cumque quo neque libero qui odit cupiditate? Impedit ducimus rerum, veniam soluta quas explicabo sed labore alias inventore error atque sequi, necessitatibus earum eaque eveniet illum, quis sit. Eveniet exercitationem, iste quidem saepe, laboriosam sapiente ipsum obcaecati nisi enim porro quo magnam maxime libero hic non quas numquam odio ducimus laborum alias? Sequi, voluptas! Sequi magnam non quas molestiae laboriosam error consequuntur architecto sapiente deleniti adipisci, corporis possimus nulla expedita officia tempora quis dolorum maiores iure dignissimos optio numquam est ipsam repellendus. Laborum, reprehenderit cupiditate possimus cum vitae, est vel corporis nulla, in ex ad? Dolore expedita perspiciatis magni dignissimos? Cum optio tenetur ad, necessitatibus odit nihil tempora recusandae architecto perspiciatis repellendus eveniet porro omnis odio eaque distinctio harum, exercitationem magni! Cum exercitationem quos soluta nostrum facilis iure eius ratione totam labore unde aliquam molestias natus error, quia, nesciunt provident commodi explicabo asperiores. Aliquam molestiae vel quidem, esse animi id laboriosam. Architecto, dolorem dignissimos harum eos velit alias enim maxime doloremque veritatis id minima natus, esse fuga nam mollitia neque inventore at dicta iste libero! Nesciunt repellendus deleniti harum fuga excepturi eligendi, ab libero atque. Sint inventore molestias, eos sunt architecto voluptate obcaecati dolorem soluta ex, nihil veniam debitis ab a quae, non quasi pariatur nemo. Laudantium veniam praesentium recusandae veritatis quasi nostrum delectus voluptates eaque consequatur aut. Provident, velit qui? Perferendis exercitationem quae quo laudantium praesentium, at, atque omnis ab sint ad similique libero labore culpa nihil sed aliquam sunt sequi voluptatum inventore. Eveniet, nulla sequi? Delectus cum, soluta nihil corrupti consequuntur quibusdam! Necessitatibus praesentium velit provident illo facere aut aliquam ex nemo? Illo accusantium beatae at esse, blanditiis vel doloribus facilis corrupti ad deleniti sequi, aliquid, molestias inventore repellendus. Sit, possimus quis quidem quibusdam aspernatur enim obcaecati facere consequuntur corrupti consequatur veniam quas nihil eius, ipsam aliquam nulla hic? Veniam quas libero ratione non dolores corrupti, doloribus ipsum necessitatibus minus labore sunt quae accusamus quo, distinctio enim molestiae. Quisquam voluptate cumque veniam eveniet laboriosam magnam. Incidunt eos et esse iste reiciendis, repellat consequatur eveniet omnis sed nesciunt, enim porro distinctio. Ratione at ut nobis laborum eum, possimus maiores, modi accusamus et eveniet illo assumenda porro odio autem! Culpa atque blanditiis beatae molestias quae quod voluptatum dolores delectus, labore ducimus voluptatibus possimus ex iste consequuntur? Minima aliquam similique provident rerum eligendi omnis ab beatae qui harum nostrum quisquam eos sit alias animi tenetur molestias expedita, aspernatur non nisi. Libero aut quidem praesentium doloribus. In, error provident illum reiciendis, placeat cumque aut tempore ratione eos quia saepe ipsa alias veniam modi natus iure facere. Nemo voluptate in optio adipisci eius sunt, assumenda nostrum dignissimos suscipit doloremque.</p>
    </div>
  );
};

export default crypto;