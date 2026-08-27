import React from 'react'
import GalleryCard from './GalleryCard'

function Gallery() {
  return (
    <div>
       <section class="gallery" id="gallery">
    <h2 class="section-title">Featured Shots</h2>
    <p class="section-subtitle">A few of our favourite frames from the last year of travel.</p>

    <div class="gallery-grid">
        <GalleryCard 
         image="./images/pic1.jpg"
         title="River Bend"
         location="Queenston, New Zealand"
         date="March 2023"
        />
        <GalleryCard 
         image="./images/pic2.jpg"
         title="Rocky Mountain"
         location="Big Sur, USA"
         date="April 2023"
        />
        <GalleryCard 
         image="./images/pic3.jpg"
         title="Forest Trail"
         location="Kyoto, Japan"
         date="April 2026"
        />
        <GalleryCard 
         image="./images/pic4.jpg"
         title="Golden Duns"
         location="Wadi Rum, Jordan"
         date="June 2023"
        />
        <GalleryCard 
         image="./images/pic5.jpg"
         title="Still Water"
         location="Plitvice Lakes, Croatia"
         date="July 2026"
        />
        <GalleryCard 
         image="./images/pic6.jpg"
         title="Snowy peak"
         location="Zermatt, Switzerland"
         date="August 2026"
        />

    </div>
  </section> 
    </div>
  )
}

export default Gallery