import React from 'react'
import video from '../source/VIDEO.mp4'

function Video() {
    return (
        <div>
            <video style={{ width: "80%" }} src={video} controls/>
        </div>
    )
}

export default Video
