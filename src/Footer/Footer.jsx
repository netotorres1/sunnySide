import React from 'react'
import FacebookIcon from './../assets/icon-facebook.svg'
import instagramIcon from './../assets/icon-instagram.svg'
import TwitterIcon from './../assets/icon-twitter.svg'
import PinterestIcon from './../assets/icon-pinterest.svg'
import './Footer.css'

const Footer = () => {
  return (
    <div className='Footer'>
        <h1 className='FooterTitle'>sunnyside</h1>
        <div className='ContainerInfo'>
            <button className='BtnInfo'>About</button>
            <button className='BtnInfo'>Services</button>
            <button className='BtnInfo'>Projects</button>
        </div>
        <div className='Icons'>
            <img className='Icon' src={FacebookIcon} />
            <img className='Icon' src={instagramIcon} />
            <img className='Icon' src={TwitterIcon} />
            <img className='Icon' src={PinterestIcon} />
        </div>
    </div>
  )
}

export default Footer