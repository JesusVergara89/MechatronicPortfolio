import React, { useState } from 'react'
import '../Styles/header.css'
import { Link } from 'react-router-dom'

const Header = () => {

  const [locationHome, setLocationHome] = useState(true)
  const [locationAbout, setLocationAbout] = useState(false)
  const [locationContact, setLocationContact] = useState(false)

  const functionHome = () => {
    setLocationHome(true)
    setLocationAbout(false)
    setLocationContact(false)
  }

  const functionAbout = () => {
    setLocationHome(false)
    setLocationAbout(true)
    setLocationContact(false)
  }

  const functionContact = () => {
    setLocationHome(false)
    setLocationAbout(false)
    setLocationContact(true)
  }


  return (
    <header className="header">

      <div className="header_logo">
        <div className="header_logo_name">
          <div className="header_logo_name_square"></div>
          <div className="header_logo_name_triangle"></div>
          <div className="header_logo_name_circle"></div>
        </div>
      </div>

      <nav className="header_nav">

        <button
          onClick={functionHome}
          className={locationHome ? 'link-header' : ''}
        >
          <Link to='/'>
            HOME
          </Link>
        </button>

        <button
          onClick={functionAbout}
          className={locationAbout ? 'link-header' : ''}
        >
          <Link to='About'>
            ABOUT
          </Link>
        </button>

        <button
          onClick={functionContact}
          className={locationContact ? 'link-header' : ''}
        >
          <Link to='Contact'>
            CONTACT
          </Link>
        </button>

      </nav>
    </header>
  )
}

export default Header