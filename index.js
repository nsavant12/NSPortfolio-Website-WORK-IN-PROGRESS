import Head from 'next/head'
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillGithub, AiFillInstagram, AiFillTwitterCircle, AiOutlineMenu} from 'react-icons/ai'
import Image from "next/image";
import image from "../public/IMG_20210620_203444.jpg";
import image2 from "../public/IMG_20210707_170928.jpg"
import image3 from "../public/IMG_20210629_202206.jpg"
import image4 from "../public/project.png";
import image5 from "../public/sunset.jpg"
import {Cursor, useTypewriter} from "react-simple-typewriter";
import image6 from "../public/Miami.jpg";
import image7 from "../public/chicago.jpg";
import {Link} from'react-scroll';
import image8 from "../public/programmer.png";
import {motion} from "framer-motion";
import ExperienceCards from './ExperienceCards';
import Skills from './Skills';
import Projects from './Projects';
export default function Home() {
  const [text, count] = useTypewriter({
    words: [
    "<Student/>", 
    "<Programmer/>", 
    "<Engineer/>"
  ],
  loop: true,
  delaySpeed:2500,
  })
  
  return (
    <div>
      <Head>
        <title>NS Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className='bg-gray-400 px-10 dark:bg-zinc-800'>
        <section className="min-h-screen">
          <nav className='py-10 mb-12 flex justify-between navbar navbar-expand-md shadow-2xl	 items-center w-full fixed top-0 right-0 left-0 bg-gray-500 dark:bg-slate-800 opacity-[.98] z-50'>
            <div className=' flex items-center visible  text-black dark:text-white text-2xl pl-8 '>
                  <AiOutlineMenu  />
                  <Link to='home' spy={true} smooth={true} offset={50} duration={500} className='text-2xl font-serif pl-10 italic font-thin dark:text-white '>madebyNS</Link>
              </div>
            
            <ul className='flex items-center'>
              
              <li>
              <Link to='home' spy={true} smooth={true} offset={25} duration={1000} className=' text-2xl invisible md:visible pl-10 pr-10 dark:text-white hover:animate-pulse hover:underline'>Home</Link>
              </li>
              <li>
              <Link to='photos' spy={true} smooth={true} offset={25} duration={1000} className=' text-2xl pr-10 invisible md:visible dark:text-white hover:animate-pulse hover:underline'>Photos</Link>
              </li>
              <li>
              <Link to='skills' spy={true} smooth={true} offset={25} duration={1000} className=' text-2xl pr-10 invisible md:visible dark:text-white hover:animate-pulse hover:underline'>Skills</Link>
              </li>
              <li>
              <Link to='experience' spy={true} smooth={true} offset={25} duration={1000} className=' text-2xl pr-10 invisible md:visible dark:text-white hover:animate-pulse hover:underline'>Experience</Link>
              </li>
              <li>
              <Link to='projects' spy={true} smooth={true} offset={25} duration={1000} className=' text-2xl pr-10 invisible md:visible dark:text-white hover:animate-pulse hover:underline'>Projects</Link>
              </li>
            </ul>
            
          </nav>
          <motion.div 
          initial={{opacity:0}}
          whileInView={{opacity:1}}
          transition={{ duration:2 }}
          className='text-center pt-40 ' id='home'>
            <h2 className='tracking-[20px] animate-pulse text-5xl py-2 bg-gradient-to-r from-sky-400 to-sky-600 font-medium inline-block text-transparent bg-clip-text'>
              Nikhil Savant
            </h2>
            
            <h3 className = 'z-0 text-2xl py-2 bg-gradient-to-r from-sky-400 to-sky-600 font-medium text-transparent bg-clip-text'>
              <span>{text}</span>
              <Cursor cursorColor="#FFFFFF"/>
  
            </h3>
            
            
            <p className='text-md py-5 leading-8 dark:text-white'>I am a junior at Jones College Prep looking to major in Computer Science. 
              Some things I enjoy are sports, tech, cars, and photography. 
              This website is a display of all my passions and projects that I have built along the way. 
            </p>
          </motion.div>
          <motion.img  className='rounded-full mx-auto w-64 h-64 object cover'
          initial={{
            x:-200,
            opacity:0,
          }}
          transition={{
            duration:1.2,
          }}
          whileInView={{
            x:0,
            opacity:1,
          }}
          viewport={{once: true}}
          src='http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprogrammer.5c653bca.png&w=828&q=75'
          />
          <div className='text-5xl flex justify-center gap-16 py-3 pb-16 pt-8'>
            <motion>
             
            <a href='https://github.com/nsavant12' target="_blank">
            
            <AiFillGithub className='hover:animate-bounce dark:text-white'/>
            </a>
            </motion>
            <a href='https://www.instagram.com/nikhilsavant1/' target="_blank">
            <AiFillInstagram className='hover:animate-bounce dark:text-white'/>
            </a>
            <a href='https://twitter.com/nikhil_savant14' target="_blank">
            <AiFillTwitterCircle className='hover:animate-bounce dark:text-white' id='photos'/>
            </a>
          </div>
</section>
<section>
<motion.div 
initial={{opacity:0}}
whileInView={{opacity:1}}
transition={{ duration:1.5 }}
>
<div className='text-center'>
<h2 className='tracking-[20px] text-5xl py-10 pt-12 bg-gradient-to-r from-sky-400 to-sky-600 font-medium inline-block text-transparent bg-clip-text animate-pulse'>My Photos</h2>          
</div>
<div className='gap-4 flex flex-col lg:flex-row'> 
<div class="flex justify-center">
  <div class="rounded-lg shadow-lg bg-sky-900  border-black ml-auto">
    <a href="http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FIMG_20210620_203444.35ef4feb.jpg&w=3840&q=75" target="_blank">
      <Image className="rounded-t-lg box-border " src={image}/>
    </a>
    <div class="p-6">
      <h5 class="text-black text-2xl font-medium mb-2 dark:text-white">Navy Pier, Chicago</h5>
      <p class="text-black text-base mb-4 dark:text-white">
        Navy Pier is one of my favorite places to visit during the summer with my friends and family. 
      </p>
    </div>
  </div>
</div>
<div class="flex justify-center ">
  <div class="rounded-lg shadow-lg bg-orange-200 border-black ml-auto dark:bg-amber-600">
    <a href="http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FIMG_20210707_170928.aa45ae01.jpg&w=3840&q=75" target="_blank">
      <Image className="rounded-t-lg box-border lg:max-w-sm" src={image2}/>
    </a>
    <div class="p-6">
      <h5 class="text-black text-2xl font-medium mb-2 dark:text-white">Nobu, Florida</h5>
      <p class="text-black text-base mb-4 dark:text-white ">
        During my first summer as a high schooler, my family and I traveled to Florida and stayed in Nobu. 
      </p>
    </div>
  </div>
</div>
<div class="flex justify-center">
  <div class="rounded-lg shadow-lg bg-orange-300  border-black dark:bg-orange-800">
    <a href="http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FIMG_20210629_202206.0baf3be0.jpg&w=3840&q=75" target="_blank">
      <Image className="rounded-t-lg box-border " src={image3}/>
    </a>
    <div class="p-6">
      <h5 class="text-black text-2xl font-medium mb-2 dark:text-white">South Loop, Chicago</h5>
      <p class="text-black text-base mb-4 dark:text-white">
        During quarantine, I found myself taking more pictures of the skyline surrounding my house. 
      </p>
    </div>
  </div>
</div>
</div>
<div className='flex py-4 gap-4 flex-col lg:flex-row'>
<div class="flex justify-center">
  <div class="rounded-lg shadow-lg bg-cyan-200  border-black dark:bg-cyan-900">
    <a href="http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fchicago.1197e0df.jpg&w=3840&q=75" target='_blank'>
      <Image className="rounded-t-lg box-border" src={image7}/>
    </a>
    <div class="p-6">
      <h5 class="text-black text-2xl font-medium mb-2 dark:text-white">Lake Michigan, IL</h5>
      <p class="text-black text-base mb-4 dark:text-white">
        Over summer break my family and I took a sailboat ride out on Lake Michigan.   
      </p>
    </div>
  </div>
</div>
<div class="flex justify-center">
  <div class="rounded-lg shadow-lg bg-rose-300 border-black dark:bg-pink-700">
    <a href="http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsunset.8ac33900.jpg&w=3840&q=75" target='_blank'>
      <Image className="rounded-t-lg hover:mx-auto box-border lg:max-w-sm" src={image5}/>
    </a>
    <div class="p-6">
      <h5 class="text-black text-2xl font-medium mb-2 dark:text-white">South Loop, Chicago</h5>
      <p class="text-black text-base mb-4 dark:text-white">
        One day while cooking with my mother, I looked out my window and saw something I've never seen. I had to capture the moment. 
      </p>
    </div>
  </div>
</div>

</div>
</motion.div>
        </section>
        <section id='skills' >
          <motion.div
          initial={{opacity:0}}
          whileInView={{opacity:1}}
          transition={{ duration:1.5 }}
          >
            <div className='text-center'>
            <h3  className='tracking-[20px] text-5xl py-10 pt-40 bg-gradient-to-r from-sky-400 to-sky-600 font-medium inline-block text-transparent bg-clip-text animate-pulse'>
              Skills
            </h3>
            </div>
            <p className='text-md py-2 leading-8 dark:text-white text-center md:text-left'>Overtime I have developed a lot of projects that show my wide range of capabilities in programming languages. You can see these projects below.</p>
            <p className = 'text-xl py-2 leading-8 dark:text-white'>
              Proficiencies:
            </p>
            </motion.div>
            <div className='flex gap-10 md:gap-96'>
            <motion.div
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{ duration:1.5 }}
            >
            <ul className='list-inside pl-10 dark:text-white'>
              <li className='pb-2'>• HTML</li>
              <li className='pb-2'>• CSS</li>
              <li className='pb-2'>• Python</li>
              <li className='pb-2'>• JS</li>
              <li className='pb-2'>• Java</li>
              <li className='pb-2'>• TS</li>
              <li className='pb-2'>• NextJS</li>
              <li className='pb-2'>• React</li>
            </ul>
            </motion.div>
            <motion.img className='rounded-3xl w-64 lg:w-72'
            initial={{
              x:200,
              opacity:0,
            }}
            transition={{
              duration:1.2,
            }}
            whileInView={{
              x:0,
              opacity:1,
            }}
            viewport={{once: true}}
            src='http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fproject.8ec2cde2.png&w=1080&q=75'
            />
            
          </div>
          <div className='visible'>
          <Skills />
          </div>
          
          </section>

          <section>
          <div className='text-center'>
          <h3 id='experience' className=' pt-40 pb-12 tracking-[20px] text-5xl bg-gradient-to-r from-sky-400 to-sky-600 font-medium inline-block text-transparent bg-clip-text animate-pulse'>
              Work Experience 
            </h3>
            </div>
             

          <div  className='  flex w-full space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory'>
            
            <ExperienceCards />
            <ExperienceCards />
            <ExperienceCards />
            <ExperienceCards />
            
          </div>
          

        </section>
        <section>
        <div className='text-center'>
        <h3 id='projects' className=' pt-40 pb-12 tracking-[20px] text-5xl bg-gradient-to-r from-sky-400 to-sky-600 font-medium inline-block text-transparent bg-clip-text animate-pulse'>
          Projects
          </h3>
          </div>
          
        </section>
        <Projects />
      </main>
    </div>
  )
}
