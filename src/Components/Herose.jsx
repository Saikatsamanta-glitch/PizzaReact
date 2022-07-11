import React from 'react'
import pizzalot from '../Resources/hero-pizza.json'
import Lottie from 'react-lottie';
import {Link} from 'react-router-dom';
export default function Herose() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: pizzalot,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
    
  return (
    <div className='d-flex hero'>
        <div className="left_side d-flex align-items-center justify-content-center flex-column">
                <h1 className='text-secondary'>Welcome To <span className='text-warning'> Pizza Store</span></h1>
                <button className="btn btn-warning mt-5">Explore 🍕</button>
                
        </div>
        <div className="right_side ">
        <Lottie 
	    options={defaultOptions}
        height={500}
        width={500}
      />
        </div>
    </div>
  )
}
