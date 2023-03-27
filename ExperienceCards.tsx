import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import {motion} from "framer-motion";

type Props = {}

function ExperienceCards({}: Props) {
  return (
    <article className='opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden snap-center flex flex-col flex-shrink-0 w-[400px] md:w-[500px] xl:w-[900px]'>
    <div className=" p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-700 dark:border-gray-600 ">
    <div>
      <AiFillGithub className='invisible'/>
    </div>
    <motion.div
    initial={{y:-100, opacity:0}}
    transition={{duration:1.2}}
    whileInView={{opacity:1, y:0}}
    viewport={{once:true}}
    >
    <AiFillGithub className='dark:text-white w-16 h-16 mb-2 mx-auto hover:opacity-25 transition-opacity duration-400'/>
    </motion.div>
    <a href="#">
        <h5 className="  mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Nandos US</h5>
        <h1 className='dark:text-white text-2xl opacity-80'>Cashier and Host</h1>
        <h2 className='uppercase dark:text-white opacity-50 pb-5'>July - September 2022</h2>
    </a>
    <ul className="space-y-4 ml-5 list-disc mb-3 font-normal dark:text-white opacity-80">
      <li className='pb-1'>Greeted guests and took them to their seats</li>
      <li className='pb-1'>Exposed me to different personalities daily</li>
      <li className='pb-1'>Learned to work and communicate in a team environment</li>
      <li className='pb-1'>Learned to work efficiently</li>

      
    </ul>
    
</div>
    </article>
  )
}

export default ExperienceCards