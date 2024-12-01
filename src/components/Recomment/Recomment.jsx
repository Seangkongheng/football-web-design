import React from 'react'
import "./Recomment.css"
import RecomImage from "../../assets/artis1.jpg"
import RecomImage1 from "../../assets/artis2.jpg"
import RecomImage2 from "../../assets/artis3.jpg"
import RecomImage3 from "../../assets/artis5.jpg"
const Recomment = () => {
  return (
    <div className='recomment-container'>
        <div className="recomment-content">
            <h1>LFC RECOMMENDS</h1>
            <small>Please recommends</small>
            <div className="recommend-card-list">
                <div className="recommend-card">
                    <div className="recomment-card-image">
                        <img src={RecomImage} alt="" />
                    </div>
                    <div className="recommend-card-desc">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <button>View Recommend</button>
                    </div>
                </div>
                <div className="recommend-card-two">
                    <div className="recomment-card-image">
                        <img src={RecomImage1} alt="" />
                    </div>
                    <div className="recommend-card-desc">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <button>View Recommend</button>
                    </div>
                </div>
                <div className="recommend-card-three">
                    <div className="recomment-card-image">
                        <img src={RecomImage2} alt="" />
                    </div>
                    <div className="recommend-card-desc">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <button>View Recommend</button>
                    </div>
                </div>
                <div className="recommend-card-fouth">
                    <div className="recomment-card-image">
                        <img src={RecomImage3} alt="" />
                    </div>
                    <div className="recommend-card-desc">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <button>View Recommend</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Recomment