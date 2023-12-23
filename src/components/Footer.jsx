import React from 'react'
import '../Styles/Footer.css'

const Footer = () => {

  const arrayOfUrls = [
    {
      url: 'https://www.instagram.com/vergara.8901/',
      boxi: <i className='bx bxl-instagram'></i>
    },
    {
      url: 'https://github.com/JesusVergara89',
      boxi: <i className='bx bxl-github' ></i>
    },
    {
      url: 'https://www.linkedin.com/in/jesus-manuel-vergara-975799216/',
      boxi: <i className='bx bxl-linkedin' ></i>
    },
    {
      url: 'https://www.youtube.com/channel/UCe14TjbbRpZhPQsGdWFzlHg',
      boxi: <i className='bx bxl-youtube' ></i>
    }
  ]
  return (
    <footer className='footer'>

      <div className="container1">

        <div className="container1_btns">
          {
            arrayOfUrls.map((data, i) => (
              <button key={i} className="container1_btn">
                <a href={data.url} target="_blank" rel="noopener noreferrer">
                  {data.boxi}
                </a>
              </button>
            ))
          }

        </div>

        <div className="container1_name">
          JESUSMANUELV1989@GMAIL.COM
        </div>

      </div>

      <div className="container2">

        <div className="container2_logos">

          <div className="container2_logos_square"></div>
          <div className="container2_logos_triangle"></div>
          <div className="container2_logos_circle"></div>

        </div>

        <div className="container2_thx">
          <h5>This desing is inpired by:</h5>
          <a href="http://mottau.co.uk/" target="_blank" rel="noopener noreferrer">
            <i className='bx bx-copyright'></i>
          </a>
        </div>

      </div>

    </footer>
  )
}

export default Footer