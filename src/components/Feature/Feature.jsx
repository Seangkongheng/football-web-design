import React from 'react'
import "./Feature.css"
import Manger from "../../assets/manger2.png"
import Foodballer1 from "../../assets/footbler1.jpg"

const Feature = () => {
  return (
    <div className='feature-container'>
        <div className="feature-content">
            <div className="feature-content-description">
                <div className="feature-content-description-list-card">
                    <div className="feature-content-description-card">
                        <div className="feature-content-description-card-image">
                            <img src={Foodballer1} alt="" />
                        </div>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
                        <button>Watch</button>
                    </div>
                    <div className="feature-content-description-card">
                        <div className="feature-content-description-card-image">
                            <img src={Foodballer1} alt="" />
                        </div>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
                        <button>Watch</button>
                    </div>
                </div>
            </div>
            <div className="feature-image">
                <img src={Manger} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Feature