import React from 'react'
import img from '../imgs/words.jpg'

export default function Words() {
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
                data-icon="teenyicons:javascript-outline"
                data-width="20"
              ></span>
              <h2>JavaScripts</h2>
            </div>
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
                data-icon="file-icons:redux"
                data-width="20"
              ></span>
              <h4>REDUX</h4>
            </div>
            <div className="stackBox">
              <span
                className="iconify"
                data-icon="simple-icons:auth0"
                data-width="20"
              ></span>
              <h4>Auth0</h4>
            </div>
          </div>
          <h3>Description</h3>
          <p>Developed for my daughter to practice spelling</p>
          <h3>Coming Next ..</h3>
          <p>online multiplayer word bingo games</p>
          <div className="workLinks">
            <a
              href="https://github.com/junwaa-sys/words"
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
              href="https://words-production-6657.up.railway.app/"
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
