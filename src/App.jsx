import React from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Page2 from './components/page2'
import Page3 from './components/Page3'
import Page4 from './components/Page4'
import Cocktails from './components/Cocktails'
import {HashRouter as Router, Routes, Route} from 'react-router-dom'

gsap.registerPlugin(ScrollTrigger, SplitText)


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Page2/>} />
        <Route path='/cocktails' element={<Page3 />} />
        <Route path='/page3' element={<Page4 />} />
      </Routes>
    </Router>
  )
}
//a

export default App