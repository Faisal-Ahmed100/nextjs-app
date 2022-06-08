import React from 'react'

import {AiOutlineMessage} from 'react-icons/ai';
const Message = () => {
  return (
    <div className=" w-full relative">
<div className="fixed px-2 sm:px-5 md:px-16 bottom-10 right-0">
<AiOutlineMessage size='42' onClick={()=>{alert('hi')}} className='cursor-pointer shadow-lg shadow-gray-400 rounded-full p-1 ' />
</div>
</div>
  )
}

export default Message