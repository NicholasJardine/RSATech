import React, { useRef } from 'react'
import vid from '../../assets/students.mp4'
import './Video.css'
const Video = ({playState, setPlayState}) => {
  const play = useRef(null)
  const closeVid = (e)=>{
    if(e.target ===play.current){
      setPlayState(false)
    }
  }
  return (
    <div className={`player ${playState ? '':'hide'}`} ref={play} onClick={closeVid}>
      <video src={vid} autoPlay muted controls></video>
    </div>
  )
}

export default Video
