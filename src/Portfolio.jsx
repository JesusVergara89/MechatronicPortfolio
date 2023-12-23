import React from 'react'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Introduction from './components/Introduction'
import About from './components/About'
import Contact from './components/Contact'

function Portfolio() {

  let latestTitle = document.title

  window.addEventListener('blur', () => {
    latestTitle = document.title
    document.title = 'WAIT, DONT GO!'
  })

  window.addEventListener('focus', () => {
    latestTitle = document.title
    document.title = 'Jesus Manuel Vergara'
  })

  return (
    <div className="portfolio">
      <Header />

      <Routes>

        <Route
          path='/'
          element={<Introduction />}
        />

        <Route
          path='About'
          element={<About />}
        />

        <Route
          path='Contact'
          element={<Contact />}
        />

      </Routes>

    </div>
  )
}

export default Portfolio