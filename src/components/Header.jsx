import React from 'react'

function Header() {
  return (
    <div>
        <header className="site-header">
    <div className="logo">Wanderlust</div>
    <nav className="nav-links">
      <a href="#home">Home</a>
      <a href="#gallery">Gallery</a>
      <a href="#contact">Contact</a>
    </nav>
    <button className="hamburger">
      <span></span>
      <span></span>
      <span></span>
    </button>
  </header>
    </div>
  )
}

export default Header