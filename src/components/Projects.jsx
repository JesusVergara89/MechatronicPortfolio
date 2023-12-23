import React from 'react'
import '../Styles/Projects.css'
import img1 from '../images/weather.jpg'
import img2 from '../images/portafolio.jpg'
import img3 from '../images/SolarWeb.jpg'
import img4 from '../images/poke.jpg'

const Projects = () => {

  const imagesArray = [img1, img2, img3, img4]

  const urlArrays = [
    {
      url: 'https://wheaterapp-jesus-vergara.netlify.app/',
      urlName: 'Weather App'
    },
    {
      url: 'https://jesusvergara.tech/',
      urlName: 'Portfolio'
    },
    {
      url: 'https://barmexwebapp.netlify.app/',
      urlName: 'Solar App',
    },
    {
      url: 'https://pokedex-be-fun.netlify.app/',
      urlName: 'Pokedex'
    }
  ]

  return (
    <article className="projects">

      <h2>Some of my web projects</h2>

      <div className="projects_carousell">

        {
          imagesArray?.map((image, i) => (
            <div key={i} className="projects_carousell_item">
              <img src={image} alt="" />
              <button>
                <a href={urlArrays[i].url} target="_blank" rel="noopener noreferrer">
                  <i className='bx bx-navigation'></i>
                </a>
              </button>
              <h4>{urlArrays[i].urlName}</h4>
            </div>
          ))
        }

      </div>
    </article>
  )
}

export default Projects