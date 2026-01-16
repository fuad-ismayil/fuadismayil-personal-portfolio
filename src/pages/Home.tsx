import React from 'react'
import Introduction from '../components/Introduction'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import {MarqueeSm} from '../components/MarqueeSm'
import MarqueeMd from '../components/MarqueeMd'

const Home: React.FC = () => {
  return (
    <div className='flex flex-col gap-[80px] md:gap-[145px]'>
      <Introduction />
      <div className='md:hidden'>
        <MarqueeSm />
      </div>
      <div className='hidden md:block'>
        <MarqueeMd />
      </div>
      <Projects />
      <Contact />
    </div>
  )
}

export default Home