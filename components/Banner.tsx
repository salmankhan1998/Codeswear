import React from 'react'
import ImageWrapper from './ImageWrapper'

const Banner = () => {

  return (
    <div>
        <ImageWrapper mensCollection="mens-collection.png" delivery="free-delivery.png" mug="mugs.png" />
        <ImageWrapper discount="discounts.png" customMug="custom-mugs.png" shirts="unisex-shirts.webp" reverse={true}/>
    </div>
  )
}

export default Banner