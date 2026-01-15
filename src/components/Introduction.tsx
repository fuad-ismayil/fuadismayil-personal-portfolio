import React from 'react'
import { ReactTyped } from "react-typed";

const Introduction: React.FC = () => {
    return (
        <div className='mx-auto px-[20px] pt-[70px] py-[40px] md:px-[50px] md:py-[90px] container lg:px-[120px]'>
            <div className="flex flex-col md:flex-row justify-center items-center">
                <div className="w-full md:w-1/2 lg:w-5/12 order-2 md:order-1">
                    <div className="intro-left">
                        <ReactTyped
                            className='uppercase font-bold text-[#FDC435]'
                            strings={[
                                "Frontend Developer",
                                "Web Site Developer",
                                "Great Developer",
                            ]}
                            typeSpeed={40}
                            backSpeed={50}
                            loop
                        >



                        </ReactTyped>
                        <h1 className=' font-bold text-2xl md:text-4xl lg:text-[64px] py-[20px] lg:py-[40px]'>Fuad Ismayil</h1>
                        <article className='text-[24px] text-[#828282]'>
                            I'm 19 years old and my profession is Frontend Developer. Our essential job is providing reliable and scalable web sites.
                        </article>

                        <div className="book-a-call flex gap-3 pt-[32px]">
                            <a href='' className='w-[115px] flex justify-center items-center h-[43px] rounded-[8px] border-2 border-[#FDC435] bg-[#FDC435] text-[#25282B] hover:scale-105 duration-300'>Projects</a>
                            <a href='https://az.linkedin.com/in/fuad-ismayıl-a15631316' target="_blank" className='w-[117px] flex justify-center items-center h-[43px] rounded-[8px] border-2 hover:scale-105 duration-300'>LinkedIn</a>
                        </div>

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

export default Introduction