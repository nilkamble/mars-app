import React from 'react'
import videoBg from'../assets/videoBg.mp4'

const Main = () => {
  return (
    <div className='main'>

        <div className='overlay'></div>
    <video src={videoBg} autoPlay loop muted/>
    <div className="content">
        <h1>Atmosphere of Mars</h1>
        <p>Copyright © 2023 nilkamble All Rights Reserved.</p>
    </div>
    </div>
  )
}

export default Main