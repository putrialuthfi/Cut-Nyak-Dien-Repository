import React from 'react'


const CourseCard = ({title,desc,linkImg}) => {
  return (
    <div className='bg-white drop-shadow-md overflow-hidden my-4 mr-2 text-center h-[300px]'>
      <img src={linkImg} alt="courses" className='h-40 w-full object-cover'/>
      <div className='p-5'>
          <h1 className='py-2 truncate font-bold text-[19px]'>{title}</h1>
          <p className='text-sm'>{desc}</p>
      </div>
    </div>
  )
}

export default CourseCard