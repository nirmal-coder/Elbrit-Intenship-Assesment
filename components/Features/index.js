import React from 'react'
import "./index.css"
import Image from 'next/image'



const Features = () => {
  return (
    <>
        <section className='featureContainerTop'>
        <div className="cardContainerTop">
        <div className="card">
                <Image width={50} height={50} src="/a.item-icon-e.png" alt="clinically studied" loading="lazy"/>
                <h5>clinically studied</h5>
                <p>All products that we offer have undergone lab and safety tests</p>
            </div>

            <div className="card">
                <Image width={50} height={50} src="/a.item-icon-e (1).png" alt="Vegetarian Friendly" loading="lazy"/>
                <h5>Vegetarian Friendly</h5>
                <p>We have a wide selection of vegetarian products to meet your needs</p>
            </div>
            <div className="card">
                <Image width={50} height={50} src="/a.item-icon-e (2).png" alt="Made in India" loading="lazy"/>
                <h5>Made in India</h5>
                <p>Shop local and explore health products made right here in India</p>
            </div>
        </div>
        </section>
        <section className='featureContainerBottom'>
        <div className="cardContainerBottom">
        <div className="card">
                <Image width={50} height={50} src="/a.item-icon-e (3).png" alt="Free shipping" loading="lazy" />
                <h5>Free shipping</h5>
                <p>We deliver to your door with no shipping costs on your orders</p>
            </div>
            <div className="card">
                <Image width={50} height={50} src="/a.item-icon-e (4).png" alt="No Risk" loading="lazy"/>
                <h5>No Risk</h5>
                <p>We ensure that all products are safe and within their use-by date</p>
            </div>
            <div className="card">
                <Image width={50} height={50} src="/a.item-icon-e (5).png" alt="GMO free" loading="lazy"/>
                <h5>GMO free</h5>
                <p>Natural, no modified products and derivatives for those who need it</p>
            </div>
        </div>
            
    </section>
    </>
    
  )
}

export default Features