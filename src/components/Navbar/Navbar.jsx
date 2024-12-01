import React from 'react'
import "./Navbar.css"
import Logo from "../../assets/Logo-Liverpool.png"

const Navbar = () => {
  return (
    <div className='nav-container'>
        <nav>
            <div className="branch">
                <img src={Logo} alt="" />
            </div>
            <div className="nav-menu-item">
                <ul>
                    <li>Home</li>
                    <li>Home</li>
                    <li>Home</li>
                    <li>Home</li>
                    <li>Home</li>
                    <li>Home</li>
                    <li>Home</li>
                    <li>Home</li>
                </ul>
            </div>
            <div className="nav-icon">
                <ul>
                    <li>Language</li>
                    <li>Search</li>
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default Navbar