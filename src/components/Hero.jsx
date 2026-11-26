import React from 'react'
import swiggy from "../images/swiggy.webp"
import zomato from "../images/zomato.webp"
import kfc from "../images/kfc_png.webp"

const Hero = () => {
  return (
    <div className='hero'>
      <div className='left'>
        <span className='title'>TASTE THE BEST CHICKEN</span>
        <p>
          KFC stands for Kentucky Fried Chicken. It is an American fast-food restaurant chain founded by Colonel Harland Sanders in 1952. Its headquarters is located in Louisville, Kentucky, USA. KFC is famous for its delicious fried chicken and secret recipe of 11 herbs and spices. It operates in many countries around the world. Its menu includes burgers, chicken buckets, fries, wraps, and other food items. KFC is one of the largest fast-food chains globally. It provides dine-in, takeaway, and home delivery services. Its famous slogan is "It's Finger Lickin' Good." KFC is owned by Yum! Brands.
        </p>
        <div className='btns'>
          <button className='btn1'>ORDER NOW</button>
          <button className='btn2'>KFC CHICKEN</button>
        </div>
        <div className='social'>
          <span className='social-1'>Also available on</span>
          <div className='social-icons'>
              <img src={swiggy} alt="" />
              <img src={zomato} alt="" />
          </div>
        </div>
      </div>
      <div className='right'>
        <img src={kfc} alt="" />
      </div>
    </div>
  )
}

export default Hero