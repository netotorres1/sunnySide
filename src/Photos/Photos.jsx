import React from 'react'
import Milk from './../assets/desktop/image-gallery-milkbottles.jpg'
import Orange from './../assets/desktop/image-gallery-orange.jpg'
import Sugar from './../assets/desktop/image-gallery-sugarcubes.jpg'
import Cone from './../assets/desktop/image-gallery-cone.jpg'
import './Photos.css'

const Photos = () => {
  return (
    <div className='Photos'>
      <div className='containerphotos'>
      <img alt='Imagem' className='Img' src={Milk} />
        <img alt='Imagem' className='Img' src={Orange} />
      </div>
      <div className='containerphotos'>
      <img alt='Imagem' className='Img' src={Cone} />
        <img alt='Imagem' className='Img' src={Sugar} />
      </div>
    </div>
  )
}

export default Photos