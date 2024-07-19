import { useEffect, useState } from 'react'
import Nav from './Components/Nav'
import About from './Components/About'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import Footer from './Components/Footer'
import { BallTriangle } from 'react-loader-spinner'
import Educations from './Components/Educations'

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])
  return (
    <>
      {
        loading ?
          <div className='bg-slate-900 h-[100vh] flex justify-center items-center'>
            <BallTriangle
              height={100}
              width={100}
              radius={5}
              color="#d946ef"
              ariaLabel="ball-triangle-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          </div>
          :
          <div className="bg-slate-900">
            <Nav />
            <About />
            <Educations />
            <Skills />
            <Projects />
            <Footer />
          </div>
      }
    </>
  )
}

export default App
