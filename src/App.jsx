import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Schedule from './components/Schedule/Schedule'
import Feature from './components/Feature/Feature'
import News from './components/LastNews/News'
import Player from './components/Player/Player'
import PlayerStart from './components/PlayerStart/PlayerStart'
import Socail from './components/Socail/Socail'
import Recomment from './components/Recomment/Recomment'
import Footer from './components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
        <div className='app-container'>
        <Navbar />
       
    </div>
     <Home />
     <Schedule />
     <Feature />
     <News />
     <Player />
     <PlayerStart />
     <Socail />
     <Recomment />
     <Footer />
    </div>
  
  )
}

export default App
