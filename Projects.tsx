import React from 'react'

type Props = {}

const Projects = ({}: Props) => {
  const projects = [1,2,3,4,5];
  const i = 0;
  return (
    <div className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
      
      <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 '>
        {projects.map((project) => (
          <div className='w-screen flex-shrink-0 snap-center  flex flex-col space-y-5
          items-center justify-center p-20 md:p-44 h-screen'>
            <img className='rounded-xl' src='https://nakedsecurity.sophos.com/wp-content/uploads/sites/2/2021/11/fr-1200.png' />

            <div> 
              
              <h4 className='text-white'>Case Study {i + 1} of {projects.length}: Attendance Project</h4>
            </div>
          </div>
        ))}
        {/* projects */}
        {/* projects */}
      </div>
      
      
    </div>
  )
}

export default Projects