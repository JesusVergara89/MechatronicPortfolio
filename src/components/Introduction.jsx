import React from 'react'
import '../Styles/Introduction.css'
import Cardvideos from './Cardvideos'
import Projects from './Projects'
import Footer from './Footer'
import solidworks from '../images/solidworks.png'
import autocad from '../images/autocad.png'

const Introduction = () => {
  return (
    <article className="Home">
      <div className="Home_introduction">
        <h1>JESUS VERGARA</h1>
        <h2>Mechatronics Engineer</h2>
        <div className="cad_1">
          <img className='solid_1' src={solidworks} alt="Solidworks" />
          <img className='auto_1' src={autocad} alt="Solidworks" />
        </div>
      </div>
      <Cardvideos />
      <Projects />
      <Footer />
    </article>
  )
}

export default Introduction