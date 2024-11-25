import React from 'react'
import "./index.css"
import Image from 'next/image'
import Link from 'next/link'

const Banners = () => {
  return (
    <section className='bannersContainer'>
        <div className="banners">
            <div className='text-banner'>
                <p>INgredients</p>
                <h4>Better Ingredients</h4>
                <p className='textP'>Only the best when you choose products offered on our platform - high-quality ingredients for high quality products! </p>
            </div>
            <div className="banner1">
                <div><h5 className='bannerh5'>Vitamin C</h5>
                <p className='bannerP'>Vitamin C as ascorbic acid</p></div>
                <Link href={""} className='link'>see more</Link>
            </div>
            <div className="banner2" >
                <div>
                <h5 className='bannerh5'>Vitamin B3</h5>
                <p className='bannerP'>Niacin for healthy gut and skin</p>
                </div>
                <Link href={""} className='link'>see more</Link>
            </div>
            <div className="banner3">
                <div>
                <h5 className='bannerh5'>Magnesium</h5>
                <p className='bannerP'>Boost energy and support muscle function</p>
                </div>
                <Link href={""} className='link'>see more</Link>
            </div>
            <div className="banner4">
                <div>
                <h5 className='bannerh5'>Hyaluronic Acid</h5>
                <p className='bannerP'>For smooth, supple and soft skin!</p>
                </div>
                <Link href={""} className='link'>see more</Link>
            </div>
            <div className="banner5">
                <div>
                <h5 className='bannerh5'>Lactobacillus</h5>
                <p className='bannerP'>Invigorate your gut microbiome</p>
                </div>
                <Link href={""} className='link'>see more</Link>
            </div>
        </div>
    </section>
  )
}

export default Banners
