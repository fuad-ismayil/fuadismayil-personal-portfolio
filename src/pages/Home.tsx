import React from 'react'
import Introduction from '../components/Introduction'
import Projects from '../components/Projects'
import Contact from '../components/Contact'

const Home:React.FC = () => {
  return (
    <div className='flex flex-col gap-[145px]'>
    <Introduction/>
    <Projects/>
    <Contact/>
    </div>
  )
}

export default Home