import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
const Header = () => {
  return (
     <header className="header">
            {/* Logo */}
            <div className="logo">
              <h1>Super 30</h1>
            </div>
            {/* Navigation */}
            <div className="nav">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
            </div>
          </header>
  )
}

export default Header