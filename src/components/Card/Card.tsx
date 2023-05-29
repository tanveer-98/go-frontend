import React from 'react'
import  './styles.css'
const Card = () => {
  return (
    <div className= "interior card-list">
    <div className="interior card">
      <p className="interior title">CT</p>
      <p>CT Full body</p>
      <p>12/12/2019</p>
    </div>
    <div className="interior card">
      <p className="interior title">X-RAY</p>
      <p>X-Ray Left Foot</p>
      <p>12/12/2019</p>
    </div>
  </div>
  )
}

export default Card