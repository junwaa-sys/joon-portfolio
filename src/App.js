import React from 'react'
import TopNav from './component/TopNav'
import Home from './component/Home'
import Works from './component/Works'
import AboutMe from './component/AboutMe'

function App() {
  return (
    <>
      <TopNav />
      <div className="main-container">
        <Home />
        <Works />
        <AboutMe />
      </div>
    </>
  )
}

export default App
