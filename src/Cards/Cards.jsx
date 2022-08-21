import React from 'react'
import './cards.css'
import Egg from './../assets/desktop/image-transform.jpg'
import StandOut from './../assets/desktop/image-stand-out.jpg'
import ImageGraphicDesign from './../assets/desktop/image-graphic-design.jpg'
import ImagePhotography from './../assets/desktop/image-photography.jpg'

const Cards = () => {
  return (
    <div className='CardsContainer'>
        <div className='div1'>
            <div className='card1'>
                <h2 className='card1Tittle'>Transform your brand</h2>
                <p className='card1p'>We are a full-service creative agency specializing in helping brands grow fast. 
                Engage your clients through compelling visuals that do most of the marketing for you.</p>
                <button className='card1btn'>Learn more</button>
            </div>
            <div >
                <img src={Egg}/>
            </div>
        </div>
        <div className='div2'>
            <div className='card2'>
                <h2 className='card2Title'>Stand out to the right audience</h2>
                <p className='card2p'>Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll
                 build and extend your brand in digital places.</p>
                 <button className='card2btn'>Learn more</button>
            </div>
            <div>
                <img src={StandOut}/>
            </div>
        </div>
        <div className='div3'>
            <div className='card3'>
                <img src={ImageGraphicDesign} />
                <h2 className='card3Title'>Graphic design</h2>
                <p className='card3p'>
                Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.
                </p>
            </div>
            <div className='card4'>
                <img src={ImagePhotography} />
                <h2 className='card4Title'>  Photography</h2>
                <p className='card4p'>
                Increase your credibility by getting the most stunning, high-quality photos that improve your business image.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Cards