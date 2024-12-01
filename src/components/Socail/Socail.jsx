import React from 'react'
import "./Socail.css"
import Foodballer from "../../assets/footbler1.jpg"
import Icon from "../../assets/icon1.png"
import Icon2 from "../../assets/communication.png"
import Icon3 from "../../assets/twitter.png"

const Socail = () => {
  return (
    <div className='socail-container'>
        <div className="socail-content">
            <h1>UFC ON SOCAIL MEDIA</h1>
            <small>Our socail medai</small>
            <div className="socail-media-card-list">
                <div className="socail-media-card">
                    <div className="socail-media-card-image">
                        <img src={Foodballer} alt="" />
                    </div>
                    <p className='specail'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
                    <div className="icon-socail-media">
                        <div className="icon">
                            <img src={Icon} alt="" />
                        </div>
                        <div className="socail-media-name">
                            <p>Liverpol FC</p>
                            <small>Please Follow</small>
                        </div>
                    </div>
                </div>
                <div className="socail-media-card">
                    <div className="socail-media-card-image">
                        <img src={Foodballer} alt="" />
                    </div>
                    <p className='specail'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
                    <div className="icon-socail-media">
                        <div className="icon">
                            <img src={Icon} alt="" />
                        </div>
                        <div className="socail-media-name">
                            <p>Liverpol FC</p>
                            <small>Please Follow</small>
                        </div>
                    </div>
                </div>
                <div className="socail-media-card">
                    <div className="socail-media-card-image">
                        <img src={Foodballer} alt="" />
                    </div>
                    <p className='specail'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
                    <div className="icon-socail-media">
                        <div className="icon">
                            <img src={Icon2} alt="" />
                        </div>
                        <div className="socail-media-name">
                            <p>Liverpol FC</p>
                            <small>Please Follow</small>
                        </div>
                    </div>
                </div>
                <div className="socail-media-card">
                    <div className="socail-media-card-image">
                        <img src={Foodballer} alt="" />
                    </div>
                    <p className='specail'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
                    <div className="icon-socail-media">
                        <div className="icon">
                            <img src={Icon3} alt="" />
                        </div>
                        <div className="socail-media-name">
                            <p>Liverpol FC</p>
                            <small>Please Follow</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Socail