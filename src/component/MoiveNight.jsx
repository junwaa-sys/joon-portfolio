import React from 'react'
import img from '../imgs/movie-night.jpg'

export default function MoiveNight() {
  return (
    <section id="projectsSection">
      <div className="workContainer">
        <img className="screenshot" src={img} alt="screen capture" />
        <div className="description">
          <h2>Movie Night</h2>
          <h3>Tech Used ..</h3>
          <div className="stackContainer">
            <div className="stackBox">
              <span
                className="iconify"
                data-icon="devicon:react"
                data-width="20"
              ></span>
              <h4>REACT</h4>
            </div>
            <div className="stackBox">
              <span
                className="iconify"
                data-icon="devicon:knexjs"
                data-width="20"
              ></span>
              <h4>Knex</h4>
            </div>
            <div className="stackBox">
              <span
                className="iconify"
                data-icon="file-icons:typescript"
                data-width="20"
              ></span>
              <h4>TypeScripts</h4>
            </div>
          </div>
          <h3>Description</h3>
          <p>
            For those who wants to kill time watching movie but cannot decide
            which to watch This is application to generate random movie from
            external api on https://rapidapi.com/SAdrian/api/moviesdatabase/
            store in db generated movie for future access
          </p>
          <h3>Coming Next ..</h3>
          <p>rating, and review features will come next</p>
          <div className="workLinks">
            <a
              href="https://github.com/junwaa-sys/movie-night"
              target="_blank"
              rel="noreferrer"
            >
              <span
                className="iconify"
                data-icon="radix-icons:github-logo"
                data-width="50"
              ></span>
            </a>
            <a
              href="https://movie-night-production.up.railway.app/"
              target="_blank"
              rel="noreferrer"
            >
              <span
                className="iconify"
                data-icon="fluent-mdl2:website"
                data-width="50"
              ></span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
