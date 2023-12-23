import React from 'react'
import '../Styles/Cardvideos.css'
import useVideos from '../hooks/useVideos'
import Videorender from './Videorender'

const Cardvideos = () => {

  const videos = useVideos()

  return (
    <article className="video_card">

      <div className="video_card_rectangle">
        <h2>Videos about CAD and how I built this portfolio...</h2>
        <div className="video_card_rectangle_videos">
             {
              videos?.map((video,i)=> (
                <Videorender
                video={video}
                key={video.id}
                />
              ))
             }
        </div>
      </div>

    </article>
  )
}

export default Cardvideos