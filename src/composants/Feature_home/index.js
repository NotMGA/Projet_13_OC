import '../../Style/Feature_home/index.css'
import React from 'react'
function Feature(props) {
  return (
    <div class="feature-item">
      <img src={props.src} alt="Chat Icon" class="feature-icon"></img>
      <h3 class="feature-item-title">{props.h3}</h3>
      <p>{props.p}</p>
    </div>
  )
}
export default Feature
