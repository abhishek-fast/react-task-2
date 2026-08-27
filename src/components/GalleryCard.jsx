import React from 'react'

function GalleryCard({image, title, location, date}) {
  return (
    <div>
        <div class="gallery-card">
        <img src={image} />
        <div class="gallery-card-info">
          <h3>{title}</h3>
          <p class="location">{location}</p>
          <p class="date">{date}</p>
        </div>
      </div>
    </div>
  )
}

export default GalleryCard