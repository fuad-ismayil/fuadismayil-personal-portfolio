import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import About from './pages/About'
import Headroom from 'react-headroom'
import NotFound from './pages/NotFound'
import Contacts from './pages/Contacts'
function App() {
  return (
    <>
      <BrowserRouter>
        <div className='min-h-screen flex flex-col'>
          <Headroom>
            <Header />
          </Headroom>
          <main className="flex-grow">
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/projects' element={<Projects />} />
              <Route path='/contacts' element={<Contacts />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>

      </BrowserRouter>
    </>
  )
}

export default App
