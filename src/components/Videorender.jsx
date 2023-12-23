import React from 'react'
import '../Styles/Videorender.css'
import ReactPlayer from 'react-player'

const Videorender = ({ video }) => {

  const handleClick = () => {
    window.open(video.url)
  }

  return (
    <article className="card_video">
      <div className="card_video_player">
        <ReactPlayer
          url={video.url}
          width={120}
          height={100}
          playing={true}
          muted={true}
        />
      </div>
      <div className="card_video_information">
        <div className="card_video_information_title">
          <h3>{video.tittle}</h3>
        </div>
        <div className="card_information_btns">
          <h4>WATCH IT ON</h4>
          <h4>...</h4>
          <button onClick={handleClick} >
            <i className='bx bxl-youtube'></i>
          </button>
        </div>
      </div>
    </article>
  )
}

export default Videorender