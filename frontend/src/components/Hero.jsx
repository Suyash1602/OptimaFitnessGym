import React from 'react'
import { ToastContainer, toast } from 'react-toastify';

const Hero = () => {
  
  const notify = () => toast("Non Working Buttons",{ autoClose: 500 });

  return (
    <section className='hero'>
      <div className="content">
        <div className="title">
          <h1>LET'S</h1>
          <h1>GET</h1>
          <h1>MOVING</h1>
        </div>
        <div className="sub-title">
          <p>Your Journey to Fitness Starts Here</p>
          <p>Unleash Your Potential</p>
        </div>
        <div className="buttons">
          <button onClick={notify}>Start Your Journey</button>
          <button onClick={notify}>Discover Your Plan</button>
        </div>
      </div>
    </section>
  )
}

export default Hero