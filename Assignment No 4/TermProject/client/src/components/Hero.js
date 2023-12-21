import React from 'react'
import '../App.css';



export default function Hero() {
  return (
    <div style={{ backgroundImage: `url(${require('../assets/hero4.png')})`}} id='hero'>
      <section id="hero" >
        <h4>Trade-in-offer</h4>
        <h2>Super value deals</h2>
        <h1>On all products</h1>
        <p>Save more with coupons & up to 70% off</p>
        <button style={{ backgroundImage: `url(${require('../assets/button.png')})`}} id='hero button'>
          Shop Now</button>
      </section>
    </div>
  )
}
