import { useState } from 'react'
import Nav from './Components/Nav'
import Banner from './Components/Banner'
import About from './Components/About'

function App() {
  return (
    <h1 className="bg-slate-900">
      <Nav />
      <Banner />
      <About />
    </h1>
  )
}

export default App
