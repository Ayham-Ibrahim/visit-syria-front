import React from 'react'
import './Hero.css'
const Hero = ({ backgroundImage }) => {
    return (
        <div className='BY_Hero' style={{ backgroundImage: `url(${backgroundImage})` }}>
        </div>
    )
}

export default Hero