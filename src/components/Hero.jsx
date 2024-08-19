import React from 'react'
import { heroImage } from '../assets'


const Hero = () => {
  return (
    <section>
        <div className='flex flex-col justify-center items-center text-center my-4 lg:my-16 text-white'>
            <img src={heroImage} alt='heroImage' className='w-[180px] lg:w-[250px] h-[180px] lg:h-[250px] rounded-full heroImgshadow'/>
            <div className='flex flex-col text-center justify-center items-center p-5'>
              <p className='text-lg lg:text-xl'>Hey</p>
              <p className='heading'>I'm Rizwan Malik</p>
              <p className='text-lg lg:text-xl'>Frontend Developer</p>
              <p className='text-xs lg:text-sm my-5 font-light'>I'm a Software Engineer with expertise in Frontend Development using React and Tailwind Css</p>
              <div className='flex flex-row gap-5 lg:gap-16 my-5'>
                <a href='#about' className='py-2 rounded-2xl shadow-lg bg-[#24272C] navshadow w-[100px] lg:w-[120px] text-center hover:-translate-y-2 duration-500 text-sm'>Learn More</a>
                <a href='#contact' className='py-2 rounded-2xl shadow-lg bg-[#24272C] navshadow w-[100px] lg:w-[120px] text-center hover:-translate-y-2 duration-500 text-sm'>Contact me</a>
              </div>
            </div>
        </div>
    </section>
  )
}

export default Hero