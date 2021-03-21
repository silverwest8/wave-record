import React from 'react'
import '../App.css';
import Title from "./Title"
import Video from "./Video"
import Like from "./Like"
import Footer from "./Footer"

function Main() {
    return (
        <div style={{ width: '100%', margin: '0 auto' }}>
            <Video></Video>
            <br/>
            <Title></Title>
            <br/>
            <Like></Like>
            <br/>
            <Footer></Footer>
        </div>
    )
}

export default Main;