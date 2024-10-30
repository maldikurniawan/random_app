import { useEffect, useState } from 'react'
import { BallTriangle } from 'react-loader-spinner'
import {
  Nav,
  About,
  Minigames,
  Skills,
  Projects,
  Footer,
  Educations,
} from '@/components'

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
          <div className="bg-slate-800">
            <Nav />
            <About />
            <Educations />
            <Skills />
            <Projects />
            <Minigames />
            <Footer />
          </div>
      }
    </>
  )
}

export default App
