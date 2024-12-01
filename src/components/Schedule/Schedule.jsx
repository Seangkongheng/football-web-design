import React from 'react'
import "./Schedule.css"

import Logo1 from "../../assets/Logo1.png"
import Logo2 from "../../assets/Logo2.png"

const Schedule = () => {
  return (
    <div className='schedule-container'>
        <div className="schedule-content">
            <h1>FEATURE VIDEO</h1>
            <p className='specail-view'>View and more</p>
            <div className="schedule-list-card">
                <div className="schedule-card">
                    <div className="schedule-card-logo-team">
                        <div className="schedule-card-logo">
                            <div className="schedule-card-item">
                                <img src={Logo1} alt="" />
                            </div>
                            <div className="schedule-card-item">
                                <img src={Logo2} alt="" />
                            </div>
                        </div>
                    </div>
                    <h4>Liverpool VS Everton</h4>
                    <small>10-15-2024 | 10:18min</small>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <button>Visite Live</button>
                    
                </div>
                <div className="schedule-card">
                    <div className="schedule-card-logo-team">
                        <div className="schedule-card-logo">
                            <div className="schedule-card-item">
                                <img src={Logo1} alt="" />
                            </div>
                            <div className="schedule-card-item">
                                <img src={Logo2} alt="" />
                            </div>
                        </div>
                    </div>
                    <h4>Liverpool VS Everton</h4>
                    <small>10-15-2024 | 10:18min</small>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <button>Visite Live</button>
                    
                </div>
                <div className="schedule-card">
                    <div className="schedule-card-logo-team">
                        <div className="schedule-card-logo">
                            <div className="schedule-card-item">
                                <img src={Logo1} alt="" />
                            </div>
                            <div className="schedule-card-item">
                                <img src={Logo2} alt="" />
                            </div>
                        </div>
                    </div>
                    <h4>Liverpool VS Everton</h4>
                    <small>10-15-2024 | 10:18min</small>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <button>Visite Live</button>
                    
                </div>
                <div className="schedule-card">
                    <div className="schedule-card-logo-team">
                        <div className="schedule-card-logo">
                            <div className="schedule-card-item">
                                <img src={Logo1} alt="" />
                            </div>
                            <div className="schedule-card-item">
                                <img src={Logo2} alt="" />
                            </div>
                        </div>
                    </div>
                    <h4>Liverpool VS Everton</h4>
                    <small>10-15-2024 | 10:18min</small>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <button>Visite Live</button>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Schedule