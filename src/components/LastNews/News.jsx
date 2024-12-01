import React from 'react'
import "./News.css"
import Artis1 from "../../assets/artis1.jpg"
import Artis2 from "../../assets/artis2.jpg"
import Artis3 from "../../assets/artis3.jpg"
import Artis4 from "../../assets/artis4.jpg"

const News = () => {
  return (
    <div className='news-container'>
        <div className="news-content">
            <h1>LATEST NEWS</h1>
            <small>Last news for you</small>
            <div className="news-list-card">
                <div className="news-card">
                    <p>Liverpool last win Mancity</p>
                    <h2>Van Dik have injure during match with mancity</h2>
                    <div className="artis-info">
                        <div className="artis-profile">
                            <img src={Artis1} alt="" />
                        </div>
                        <div className="artist-name">
                            <p>Seang kong heng</p>
                            <small>@seangkongheng</small>
                        </div>
                    </div>
                </div>
                <div className="news-card-two">
                    <p>Liverpool last win Mancity</p>
                    <h2>Van Dik have injure during match with mancity</h2>
                    <div className="artis-info">
                        <div className="artis-profile">
                            <img src={Artis2} alt="" />
                        </div>
                        <div className="artist-name">
                            <p>Seang kong heng</p>
                            <small>@seangkongheng</small>
                        </div>
                    </div>
                </div>
                <div className="news-card-three">
                    <p>Liverpool last win Mancity</p>
                    <h2>Van Dik have injure during match with mancity</h2>
                    <div className="artis-info">
                        <div className="artis-profile">
                            <img src={Artis3} alt="" />
                        </div>
                        <div className="artist-name">
                            <p>Seang kong heng</p>
                            <small>@seangkongheng</small>
                        </div>
                    </div>
                </div>
                <div className="news-card-four">
                    <p>Liverpool last win Mancity</p>
                    <h2>Van Dik have injure during match with mancity</h2>
                    <div className="artis-info">
                        <div className="artis-profile">
                            <img src={Artis4} alt="" />
                        </div>
                        <div className="artist-name">
                            <p>Seang kong heng</p>
                            <small>@seangkongheng</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default News