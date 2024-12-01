import React from 'react'
import "./Footer.css"
import LiverpoolLogo from "../../assets/Liverpool_FC.png"
import icon from "../../assets/icon1.png"
import icon1 from "../../assets/twitter.png"
import icon2 from "../../assets/communication.png"

const Footer = () => {
  return (
    <div className='footer-container'>
        <div className="footer-content">
            <div className="footer-brand">
                <img src={LiverpoolLogo} alt="" />
            </div>
            <div className="footer-description">
                <div className="footer-icon">
                    <div className="icon">
                        <img src={icon} alt="" />
                    </div>
                    <div className="icon">
                        <img src={icon1} alt="" />
                    </div>

                    <div className="icon">
                        <img src={icon2} alt="" />
                    </div>
                </div>
                <div className="footer-list-item">
                    <ul>
                        <li>test</li>
                        <li>test</li>
                        <li>test</li>
                        <li>test</li>
                        <li>test</li>
                        <li>test</li>
                        <li>test</li>
                        <li>test</li>
                        <li>test</li>
                    </ul>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum aliquam minima ea cupiditate, odio placeat similique quia itaque possimus suscipit nemo dolore ullam nihil sit alias atque rem natus facilis?</p>
            </div>
        </div>
    </div>
  )
}

export default Footer