import React from 'react'
import '../Styles/About.css'
import me from '../images/me.jpg'
import solidworks from '../images/solidworks.png'
import autocad from '../images/autocad.png'

const About = () => {

  const arrayOfSkill = [
    {
      name: 'Javascript',
      logo: <i className='bx bxl-javascript'></i>
    },
    {
      name: 'React',
      logo: <i className='bx bxl-react' ></i>
    },
    {
      name: 'Redux',
      logo: <i className='bx bxl-redux' ></i>
    },
    {
      name: 'HTML',
      logo: <i className='bx bxl-html5' ></i>
    },
    {
      name: 'CSS',
      logo: <i className='bx bxl-css3' ></i>
    },
    {
      name: 'GIT',
      logo: <i className='bx bxl-git' ></i>
    },
    {
      name: 'GitHub',
      logo: <i className='bx bxl-github' ></i>
    },
    {
      name: 'Spreadsheet',
      logo: <i className='bx bx-spreadsheet' ></i>
    },
    {
      name: 'Data',
      logo: <i className='bx bx-data' ></i>
    },
  ]
  return (
    <article className="about">

      <div className="about_container1">
        <div className="about_container1_img">
          <img src={me} alt="" />
          <h3>Mechatronics Engineer</h3>
        </div>
        <div className="about_container1_paragraph">
          <h2>THIS AND THAT</h2>
          <div className="paragraph">
            <p>
              As a mechatronics engineer with an exclusive specialization in computer-aided design (CAD), I stand out for my extensive experience in creating exceptional visual and technical solutions. My main focus is on maximizing the use of CAD tools such as SolidWorks, AutoCAD, and Fusion 360 to carry out design projects with precision and efficiency. My expertise in CAD design extends to conceptualization, modeling, and simulation of products, ensuring the virtual materialization of ideas before entering the prototyping phase. My experience allows me to transform abstract concepts into realistic digital representations, optimizing structures, and ensuring the optimal functionality of each design.
            </p>
          </div>
        </div>
      </div>

      <div className="about_container2">

        <h2>
          TECHNOLOGIES I HAVE EXPERTISE IN...
        </h2>

        <div className="cad">
          <img className='solid' src={solidworks} alt="Solidworks" />
          <img className='auto' src={autocad} alt="Solidworks" />
        </div>


        <div className="about_container2_items">
          {
            arrayOfSkill.map((data, i) => (
              <div
                className='about_container2_items_box'
                key={i}>
                {data.logo}
              </div>
            ))
          }
        </div>
      </div>


    </article>
  )
}

export default About