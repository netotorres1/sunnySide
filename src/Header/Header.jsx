import React from 'react'
import './Header.css'
import background from './../assets/desktop/image-header.jpg'

const Header = () => {
  return (
    <div className='HeaderContainer'>
        <div className='navbarContainer' >
            <div className='headerNavbar'>
                <h2 className='headerTitle'>sunnyside</h2>
                <nav className='navbar'>
                    <button className='headerbtn'>About</button>
                    <button className='headerbtn'>Services</button>
                    <button className='headerbtn'>Projects</button>
                    <button className='headerbtn'>Contact</button>
                </nav>
            </div>

        </div>
        <h1 className='title'>WE ARE CREATIVES</h1>
        <img src={background} alt='' className='background' />
    </div>
  )
}

export default Header