import React, { useState } from 'react'
import './Header.css'
import background from './../assets/desktop/image-header.jpg'
import ArrowDown from './../assets/icon-arrow-down.svg'
import Hamburguer from './../assets/icon-hamburger.svg'

const Header = () => {

  const [isActive, setIsActive] = useState();
  
  const onClick = () => setIsActive(!isActive);



  return (
    <div className='HeaderContainer'>
        <div className='navbarContainer' >
            <div className='headerNavbar'>
                <h2 className='headerTitle'>sunnyside</h2>
                <div className={`navbar ${isActive ? 'active' : 'inactive'}`}>
                    <button className='headerbtn'>About</button>
                    <button className='headerbtn'>Services</button>
                    <button className='headerbtn'>Projects</button>
                    <button className='headerbtnContact'>Contact</button>
                </div>
            </div>
            <img alt='Menu' onClick={onClick} className='hamburger'  src={Hamburguer} />
        </div>

        <h1 className='title'>WE ARE CREATIVES</h1>
        <img src={background} alt='Header' className='background' />
        <img className='IconArrow' src={ArrowDown} alt="Arrow Down" />
    </div>
  )
}

export default Header