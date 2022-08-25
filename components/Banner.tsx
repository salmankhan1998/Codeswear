import React from 'react'
import ImageWrapper from './ImageWrapper'

const Banner = () => {
  
  return (
    <div>
        {/* @ts-ignore */}
        <ImageWrapper mensCollection="mens-collection.png" delivery="free-delivery.png" mug="mugs.png" />
        {/* @ts-ignore */}
        <ImageWrapper discount="discounts.png" customMug="custom-mugs.png" shirts="unisex-shirts.webp" reverse={true}/>
    </div>
  )
}

export default Banner