import React from 'react'
import {motion} from 'framer-motion';
import Skill from "./Skill";
type Props = {}

function Skills({}: Props) {
  return (
    
    <motion.div 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
    className='text-center dark:text-white visible'>
        <h3 className='tracking-[3px] uppercase text-xl top-36 pt-10'>Hover over a skill for current proficiency</h3>
        <div className='flex pt-10'>
        <div className='grid grid-cols-4 gap-5 mx-auto'>
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
        </div>
        </div>
    </motion.div>
  )
}

export default Skills