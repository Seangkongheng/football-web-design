import React from 'react'
import "./Player.css"
import Artis1 from "../../assets/artis1.jpg"

const Player = () => {
  return (
    <div className='player-container'>
        <div className="player-content">
            <h1>LFC PLAYERS</h1>
            <small>Visit player</small>
            <div className="player-history">
                <div className="player-history-personal">
                    <div className="player-history-personal-image-content">
                        <div className="player-history-personal-image">
                            <img src={Artis1} alt="" />
                        </div>
                        <div className="player-historey-personal-description">
                            <h1>"11</h1>
                            <h1>Mohamed Salah</h1>
                            <small>Ecgypt</small>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero doloremque eos dolores quidem laudantium recusandae blanditiis, nihil deserunt libero officiis molestias consectetur dignissimos fuga laboriosam molestiae. Dolore aspernatur quas ipsam.</p>
                            <button>View</button>
                        </div>
                    </div>
                    <div className="player-history-personal-recode">
                        <h3>2020-10-02</h3>
                        <ul>
                            <li>Play record</li>
                            <li>Age </li>
                            <li>Hight</li>
                            <li>Total Gold</li>
                            <li>Married</li>
                        </ul>
                    </div>
                </div>
                <div className="player-history-another">
                    <div className="player-history-another-card">
                        <div className="player-history-another-card-image">
                            <img src={Artis1} alt="" />
                        </div>
                        <div className="player-history-another-card-description">
                            <p>Seang kong heng</p>
                            <small>Attact</small>
                        </div>
                    </div>
                    <div className="player-history-another-card">
                        <div className="player-history-another-card-image">
                            <img src={Artis1} alt="" />
                        </div>
                        <div className="player-history-another-card-description">
                            <p>Seang kong heng</p>
                            <small>Attact</small>
                        </div>
                    </div>
                    <div className="player-history-another-card">
                        <div className="player-history-another-card-image">
                            <img src={Artis1} alt="" />
                        </div>
                        <div className="player-history-another-card-description">
                            <p>Seang kong heng</p>
                            <small>Attact</small>
                        </div>
                    </div>
                    <div className="player-history-another-card">
                        <div className="player-history-another-card-image">
                            <img src={Artis1} alt="" />
                        </div>
                        <div className="player-history-another-card-description">
                            <p>Seang kong heng</p>
                            <small>Attact</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Player