import React,{useState,useEffect} from 'react'

import {AiOutlineMessage} from 'react-icons/ai';
const Message = () => {
const [message,setMessage]=useState(false);
useEffect(()=>{
 const messageShow=()=>{
   if(window.scrollY >= 90){
     setMessage(true);
   }else{
     setMessage(false);
   }
 }
 window.addEventListener('scroll', messageShow)
},[]);

  return (
    <div className={message ? "opacity-[1] transition-all duration-500" :"w-full relative opacity-0 transition-all duration-500"}>
<div className={message ? "-right-[0px] transition-all duration-500 fixed px-2 sm:px-5 md:px-16 bottom-10" :"fixed px-2 sm:px-5 md:px-16 bottom-10 -right-[150px] transition-all duration-500"}>
<AiOutlineMessage size='42' onClick={()=>{alert('Hi, There!😀')}} className='cursor-pointer shadow-lg shadow-gray-400 rounded-full p-1 text-[#5651e5]' />
</div>
</div>
  )
}

export default Message