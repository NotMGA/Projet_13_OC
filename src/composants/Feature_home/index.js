import '../../Style/Feature_home/index.css'
import React from 'react'
function Feature(props) {
  return (
    <div className="feature-item">
      <img src={props.src} alt="Chat Icon" className="feature-icon"></img>
      <h3 className="feature-item-title">{props.h3}</h3>
      <p>{props.p}</p>
    </div>
  )
}
export default Feature
