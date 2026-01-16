import React, { useRef } from 'react'
import { HiMiniBars4 } from "react-icons/hi2";
import { HiMiniXMark } from "react-icons/hi2";
import { Link } from 'react-router-dom'


const Header: React.FC = () => {
    const mobileMenuDivRef = useRef<HTMLDivElement>(null)
    const openMobileMenu = () => {
        if (mobileMenuDivRef.current) {
            mobileMenuDivRef.current.classList.add("w-full")
        }
    }
    const closeMobileMenu = () => {
        if (mobileMenuDivRef.current) {
            mobileMenuDivRef.current.classList.remove("w-full")
        }
    }

    return (

        <>
            <div ref={mobileMenuDivRef} className="z-10 mobile-menu bg-black opacity-70 w-0 h-screen fixed right-0 overflow-x-hidden duration-500">
                <HiMiniXMark onClick={closeMobileMenu} className="text-white text-[40px] absolute top-[20px] right-[20px]" />
                <nav className="mobile-links text-white flex flex-col gap-4 justify-center items-center h-[80vh] text-[30px]">
                    <Link to="/about" className="scale-90 text-white hover:scale-100 duration-300">About</Link>
                    <Link to="/projects" className="scale-90 text-white hover:scale-100 duration-300">Projects</Link>
                    <Link to="/contacts" className="scale-90 text-white hover:scale-100 duration-300">Contacts</Link>
                </nav>


            </div>

            <header className='px-[20px] py-[15px] flex  justify-between container mx-auto md:px-[50px] md:py-[15px] lg:px-[120px] rounded-b-[20px]  md:rounded-[0] bg-[#D7DADD]'>
                <Link to="/" className='logo text-[18px]'>Fuad Ismayil</Link>
                <nav className="nav-links gap-5 hidden md:flex">
                    <Link to="/about" className='text-[18px] hover:scale-105 duration-300'>About</Link>
                    <Link to="/projects" className='text-[18px] hover:scale-105 duration-300'>Projects</Link>
                    <Link to="/contacts" className='text-[18px] hover:scale-105 duration-300'>Contacts</Link>
                </nav>
                <HiMiniBars4 className='md:hidden text-[25px] hover:text-[#aaa] duration-700' onClick={openMobileMenu} />

            </header>
        </>
    )
}

export default Header

