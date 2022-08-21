import React from 'react'
import Emily from './../assets/image-emily.jpg'
import Thomas from './../assets/image-thomas.jpg'
import Jennie from './../assets/image-jennie.jpg'
import './Testimonials.css'


const Testimonials = () => {
  return (
    <div className='Testimonials'>
        <h1 className='TitleTestimonials'>Client testimonials</h1>
        <div className='Container'>
            <div className='Comment'>
                <img src={Emily} alt='Emily' className='Photo'/>
                <p className='CommentP'> We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.
                Emily R.</p>
                <h2 className='CommentName'>Emily R.</h2>
                <p className='CommentP'>Marketing Director</p>
            </div>
            <div className='Comment'>
            <img src={Thomas} alt='Thomas'  className='Photo'/>
                <p className='CommentP'> Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.</p>
                <h2 className='CommentName'>Thomas S.</h2>
                <p className='CommentP'>Chief Operating Officer</p>
            </div>
            <div className='Comment'> 
            <img src={Jennie} alt='Thomas'  className='Photo'/>
                <p className='CommentP'> Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!</p>
                <h2 className='CommentName'> Jennie F.</h2>
                <p className='CommentP'>Business Owner</p>
            </div>
        </div>
    </div>
  )
}

export default Testimonials