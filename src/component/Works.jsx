import React from 'react'
import Todo from './Todo'
import PFO from './PFO'
import MoiveNight from './MoiveNight'
import Words from './words'

export default function Works() {
  return (
    <>
      <section id="projectsSection">
        <h1>PROJECTS</h1>
        <Words />
        <MoiveNight />
        <PFO />
        <Todo />
      </section>
    </>
  )
}
