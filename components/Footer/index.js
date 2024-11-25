import Image from 'next/image'
import React from 'react'
import "./index.css"

const Footer = () => {
  return (
    <footer className='footer'>
        <div className='footerTop'>
        <div className='FooterCard'>
          <Image src="/Component-2.svg.png" width={50} height={50} alt="phone number" loading="lazy"/> 
          <div>
            <p>Phone Number</p>
            <p>+974 3118 1843</p>
          </div>
        </div>
        <div className='FooterCard'>
          <Image src="/Component-2-1.svg.png" width={50} height={50} alt="Email Address" loading="lazy"/>
          <div>
            <p>Email Address</p>
            <p>Elbrithcqhr@gmail.com</p>
          </div>
        </div>
        <div className='FooterCard'>
          <Image src="/Component-2-2.svg.png" width={50} height={50} alt="office location icon" loading="lazy"/>
          <div>
            <p>Office Location</p>
            <p> Ambassador Street, Zone 61,</p>
          </div>
        </div>
        </div>
        <div className="footercenter">
          <Image src="/image.png" alt="logo" height={50} width={150} loading="lazy"/>
          <p>Your health, physical and emotional well-being is important to us. We are always by your side and have made it even easier for you to find the necessary vitamins.</p>
        </div>
        <div className="footerBottom">
        <p>Elbrit Life Sciences Private Limited. C20, BKC, G Block, Mumbai 400051</p>
        </div>
    </footer>
  )
}

export default Footer