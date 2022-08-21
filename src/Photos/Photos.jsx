import React from 'react'
import Milk from './../assets/desktop/image-gallery-milkbottles.jpg'
import Orange from './../assets/desktop/image-gallery-orange.jpg'
import Sugar from './../assets/desktop/image-gallery-sugarcubes.jpg'
import Cone from './../assets/desktop/image-gallery-cone.jpg'
import './Photos.css'

const Photos = () => {
  return (
    <div className='Photos'>
        <img className='Img' src={Milk} />
        <img className='Img' src={Orange} />
        <img className='Img' src={Cone} />
        <img className='Img' src={Sugar} />
    </div>
  )
}

export default Photos