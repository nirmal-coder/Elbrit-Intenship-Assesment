import React from 'react'
import "./index.css"
import Image from 'next/image'

const HeroSection = () => {
  return (
    <section className='heroContainer'>
        <h1>Essential Vitamins</h1>
        <div className='responsiveContainer'>
        <div className="heroFirstBox">
          <p>Online Medical Supplies</p>
          <h3>Get Your Vitamins
          & Minerals</h3>
          <button className='btn-explore'><a>Explore</a></button>
        </div>
        <div className="heroImgContainer">
        <Image src="/rs-module (1).png"  className="heroImg" priority={true} width={500} height={500} alt="Probiotics medicine image" />
        </div>
        
        <div className="heroSecondBox">
          <div className='boxInside'>
          <Image src="/Vitamins.png.png" alt="Vitamins" width={50} height={50} loading="lazy"/>
          <div>
            <h6>Vitamins</h6>
            <p>Increased Vitamins and minerals in your diet</p>
          </div>
          </div>
          <div className='boxInside'>
          <Image src="/Weight Loss.png.png" alt="Weight Loss" width={50} height={50} loading="lazy"/>
          <div>
            <h6>Weight Loss</h6>
            <p> Weight Loss 
            Find scientifically proven solutions</p>
          </div>
          </div>
          <div className='boxInside'>
          <Image src="/Functional Foods.png.png" alt="Functional Foods" width={50} height={50} loading="lazy"/>
          <div>
            <h6>Functional Foods</h6>
            <p>Functional Foods
            From protein powers to baby formula</p>
          </div>
          </div>
        </div>
        </div>
        <Image src="/rs-module-dote.png" width={100} height={60} alt="dote" loading="lazy"/>
    </section>
  )
}

export default HeroSection
