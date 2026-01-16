import React from 'react'

const Footer: React.FC = () => {
    return (
        <footer className="footer flex flex-col items-center  md:pt-[145px] pt-[55px]">
            <div className="footer-top md:absolute bootom-[240px]  ">
                <div className="social-links flex justify-center items-center gap-[24px]">
                    <a href="https://www.instagram.com/fuad.ismayil_/" target="_blank"><img src="/images/footer/insta.svg" alt="" /></a>
                    <a href="https://az.linkedin.com/in/fuad-ismayıl-a15631316" target="_blank"><img src="/images/footer/linkedin.svg" alt="" /></a>
                    <a href="mailto:ismayilfaud004@gmail.com" target="_blank"><img src="/images/footer/email.svg" alt="" /></a>
                </div>
                <h6 className='text-center text-[16px] text-[#828282] pt-[32px]'>Fuad Ismayil © {new Date().getFullYear()}</h6>

            </div>
            <img src="/images/footer/bottom.svg" alt="" className='w-full ' />
        </footer>
    )
}

export default Footer