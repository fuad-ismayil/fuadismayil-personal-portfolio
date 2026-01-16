import React from 'react'
import { Link } from 'react-router-dom'

const NotFound: React.FC = () => {
    return (
        <div className='flex flex-col items-center justify-center px-[20px] md:px-[50px] lg:px-[120px] relative overflow-hidden'>
            <div className="relative z-10 text-center">
                <div className="relative mb-8">
                    <h1 className="text-[120px] md:text-[180px] lg:text-[220px] font-bold leading-none text-transparent bg-clip-text bg-gradient-to-b from-[#25282B] to-[#828282] select-none">
                        404
                    </h1>
                </div>
                <div className="mb-8">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#25282B] mb-4">
                        Oops! Page Not Found
                    </h2>
                    <p className="text-[#828282] text-lg md:text-xl max-w-md mx-auto">
                        The page you're looking for doesn't exist or has been moved to another location.
                    </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Link to='/' className='w-[115px] flex justify-center items-center h-[43px] rounded-[8px] border-2 border-[#FDC435] bg-[#FDC435] text-[#25282B] font-semibold hover:scale-105 hover:shadow-lg hover:shadow-[#FDC435]/30 duration-300'>
                        Go Home
                    </Link>
                    <Link to='/contacts' className='w-[117px] flex justify-center items-center h-[43px] rounded-[8px] border-2 border-[#25282B] text-[#25282B] font-semibold hover:scale-105 hover:bg-[#25282B] hover:text-white duration-300'>
                        Contact me
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default NotFound