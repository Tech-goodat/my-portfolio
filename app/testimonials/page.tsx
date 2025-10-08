import React from 'react'
import { SiFrontendmentor } from "react-icons/si";
import { GiServerRack } from "react-icons/gi";
import { GiArtificialIntelligence } from "react-icons/gi";
import { ImQuotesRight } from "react-icons/im";
import { IoIosStar } from "react-icons/io";
import Image from 'next/image';

const Testimonials = () => {
  return (
    <div className='flex w-full flex-col lg:px-[200px] items-center'>
         <div className='lg:mt-[120px] flex flex-col w-full items-center'>
         <h1 className='flex w-full  items-center gap-3'>
           My <span className='text-emerald-500'>Education</span>
           </h1>
           <h2 className='w-full mt-5 flex items-center text-4xl font-semibold'>Background</h2>
         
         </div>
         <div className='w-full mt-5 flex flex-col lg:grid lg:grid-cols-3'>
           <div className='bg-neutral-800 gap-3 w-[300px] h-[250px] items-center flex flex-col justify-center rounded-md'> 
            <div className='flex px-5 w-full items-center justify-between'>
             <ImQuotesRight  size={20} className='text-emerald-200'/>
             <div className='flex items-center text-yellow-500 justify-center gap-2'>
                <IoIosStar size={15}/>
                <IoIosStar size={15}/>
                <IoIosStar size={15}/>
                <IoIosStar size={15}/>
                <IoIosStar size={15}/>
                </div>
             </div>
             <p className='flex w-full text-[12px]  px-5'>I’m a frontend developer skilled in React.js, Next.js, and Tailwind CSS, creating fast, responsive, and visually appealing interfaces with clean code, smooth user experiences, and seamless API integrations.
            </p>
             <div className='flex mt-4'>
                <Image src="/woman.jpeg" className='rounded-full' width={35} height={35} alt="logo"/>
                <div className='flex  ml-4 w-full items-center flex-col'>
                    <h1 className='flex w-full text-[14px] font-semibold'>Anita Kahenya </h1>
                    <p  className='flex w-full text-[13px]'>Technical Mentor, Moringa School</p>
                </div>
            </div>     
           </div>  
           <div className='bg-neutral-800 gap-3 w-[300px] h-[250px] items-center flex flex-col justify-center rounded-md'> 
            <div className='flex px-5 w-full items-center justify-between'>
             <ImQuotesRight  size={20} className='text-emerald-200'/>
             <div className='flex items-center text-yellow-500 justify-center gap-2'>
                <IoIosStar size={15}/>
                <IoIosStar size={15}/>
                <IoIosStar size={15}/>
                <IoIosStar size={15}/>
                <IoIosStar size={15}/>
                </div>
             </div>
             <p className='flex w-full text-[12px]  px-5'>I’m a frontend developer skilled in React.js, Next.js, and Tailwind CSS, creating fast, responsive, and visually appealing interfaces with clean code, smooth user experiences, and seamless API integrations.
            </p>
             <div className='flex mt-4'>
                <Image src="/mother.jpeg" className='rounded-full' width={35} height={35} alt="logo"/>
                <div className='flex  ml-4 w-full items-center flex-col'>
                    <h1 className='flex w-full text-[14px] font-semibold'>Anita Kahenya </h1>
                    <p  className='flex w-full text-[13px]'>Technical Mentor, Moringa School</p>
                </div>
            </div>     
           </div>   

           <div className='bg-neutral-800 gap-3 w-[300px] h-[250px] items-center flex flex-col justify-center rounded-md'> 
            <div className='flex px-5 w-full items-center justify-between'>
             <ImQuotesRight  size={20} className='text-emerald-200'/>
             <div className='flex items-center text-yellow-500 justify-center gap-2'>
                <IoIosStar size={15}/>
                <IoIosStar size={15}/>
                <IoIosStar size={15}/>
                <IoIosStar size={15}/>
                <IoIosStar size={15}/>
                </div>
             </div>
             <p className='flex w-full text-[12px]  px-5'>I’m a frontend developer skilled in React.js, Next.js, and Tailwind CSS, creating fast, responsive, and visually appealing interfaces with clean code, smooth user experiences, and seamless API integrations.
            </p>
             <div className='flex mt-4'>
                <Image src="/father.jpeg" className='rounded-full' width={35} height={35} alt="logo"/>
                <div className='flex  ml-4 w-full items-center flex-col'>
                    <h1 className='flex w-full text-[14px] font-semibold'>Anita Kahenya </h1>
                    <p  className='flex w-full text-[13px]'>Technical Mentor, Moringa School</p>
                </div>
            </div>     
           </div>   

         </div>



         
         
       </div>
  )
}

export default Testimonials