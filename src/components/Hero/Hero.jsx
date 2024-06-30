import React from 'react'
import { Link } from 'react-router-dom'
import './Hero.css'
const Hero = ({ backgroundImage }) => {
    return (
        <div className='BY_Hero' style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="hero-section">
            <div className="cover-container">
                <div className="row">
                    <div className="col-md-7">

                    </div>
                    <div className="col-md-5 ">
                        <div className="hero-text">
                            <div className="container">
                                <h1>استكشف</h1>
                                <h4>أفضل الوجهات المثالية</h4>
                                <Link to='/explore' className="explore-button pt-2">
                                    <button>{"<"}  استكشف المزيد </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Hero