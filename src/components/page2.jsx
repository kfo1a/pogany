import React from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'
import Navbar from './Navbar'
import Hero from './Hero'
import Cocktails from './Cocktails'
import {HashRouter as Router, Routes, Route} from 'react-router-dom'


export default function Page2() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Cocktails />
    </main>
  );
}
