import React from 'react'
import Image from 'react-bootstrap/Image'
import HomeImage from '../../assets/images/home.webP'
import '../../css/Home.css'

export default function Home() {
    return (
        <React.Fragment>
            {/* <Image alt='abstraction' className="position-relative top-0 w-100 h-50" fluid src={HomeImage} /> */}
            <div id="blank">Welcome to React Basics!</div>
            <div id="home">Home</div>
        </React.Fragment>
    )
}
