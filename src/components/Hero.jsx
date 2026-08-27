import React from 'react'

function Hero() {
  return (
    <div>
        <section className="hero" id="home">
    <img
      src="./images/Banner.jpg"
      alt="Mountain landscape"
      className="hero-img"
    />
    <div className="hero-overlay">
      <h1>Explore the World Through Our Lens</h1>
      <p>A small collection of moments captured across the road, the trail, and everywhere in between.</p>
      <button className="hero-btn">View Gallery</button>
    </div>
  </section>
    </div>
  )
}

export default Hero