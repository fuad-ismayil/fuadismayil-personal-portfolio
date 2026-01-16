import React from 'react'

const About:React.FC = () => {
  return (
    <div className='mx-auto px-[20px] md:px-[50px] md:py-[90px] container lg:px-[120px]'>
                <div className="flex flex-col md:flex-row justify-center items-center">
                    <div className="w-full md:w-1/2 lg:w-5/12 order-2 md:order-1">
                        <div className="intro-left">
                            
                            <h1 className=' font-bold text-2xl md:text-4xl lg:text-[64px] py-[20px] lg:py-[40px]'>About me</h1>
                            <article className='text-[24px] text-[#828282]'>
                                I'm {new Date().getFullYear() - 2006 - (new Date() < new Date(new Date().getFullYear(), 9, 16) ? 1 : 0)} years old and my profession is Frontend Developer. Our essential job is providing reliable and scalable web sites.
                            </article>
    
                            <div className="book-a-call flex gap-3 pt-[32px]">
                                <a href='' className='w-[115px] flex justify-center items-center h-[43px] rounded-[8px] border-2 border-[#FDC435] bg-[#FDC435] text-[#25282B] hover:scale-105 duration-300'>Resume</a>                            </div>
    
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-7/12 order-1 md:order-2">
                        <div className="intro-right flex justify-end py-[20px]">
                            <img src="/images/introduction/profile.png" alt="" className='md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] rounded-[50%] p-[10px] border-3 border-[#FDC435]' />
                        </div>
                    </div>
                </div>
            </div>
  )
}

export default About