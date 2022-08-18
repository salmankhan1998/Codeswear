import React from 'react'
import Link from 'next/link'

const Tshirts = () => {
  const data = [
    { 
      imageUrl: "/images/shirts/image1.jpeg",
      title: "Codec",
      actualPrice: "599",
      discountedPrice: "449",
      colors: ['blue','black'],
      size: ['M','L','XL','XXL']
    },
    { 
      imageUrl: "/images/shirts/image2.jpeg",
      title: "Comics",
      actualPrice: "799",
      discountedPrice: "699",
      colors: ['red','blue','black'],
      size: ['S','M','L','XL']
    },
    { 
      imageUrl: "/images/shirts/image3.jpeg",
      title: "Css lovers",
      actualPrice: "999",
      discountedPrice: "799",
      colors: ['red','blue'],
      size: ['S','M','L']
    },
    { 
      imageUrl: "/images/shirts/image4.jpeg",
      title: "Youtubers",
      actualPrice: "799",
      discountedPrice: "699",
      colors: ['red','blue','black', 'yellow'],
      size: ['S','M','L','XL','XXL']
    },
    { 
      imageUrl: "/images/shirts/image2.jpeg",
      title: "Comics",
      actualPrice: "799",
      discountedPrice: "699",
      colors: ['red','black'],
      size: ['S','M','L','XL']
    },
    { 
      imageUrl: "/images/shirts/image1.jpeg",
      title: "Eat Sleep Code Repeat",
      actualPrice: "599",
      discountedPrice: "449",
      colors: ['red','blue','black'],
      size: ['M','L','XL','XXL']
    },
  ]
  return (
    <section className="text-gray-600 body-font">
      <div className="px-5 py-24">
        <div className="flex flex-wrap space-y-6">
          {data.map((item,index) =>(
            <Link key={index} href={`/product/${item.title}`}>
              <div  className="lg:w-1/4 md:w-1/2 p-4 w-full shadow-md hover:shadow-2xl cursor-pointer transition duration-200">
                <a className="block relative rounded overflow-hidden h-96">
                  <img alt="ecommerce" className="object-cover" src={item.imageUrl}/>
                </a>
                <div className="">
                  <h6 className="text-xl text-black font-medium">
                    {item.title}
                  </h6>
                  <div className="">
                    <span className="flex items-center">
                      {item.colors.map((color,index)=>(
                        <div key={index} className={`${color === "red" ? 'bg-red-700': color === "blue" ? "bg-blue-600 -ml-1 z-10" : color === "yellow" ? "bg-yellow-600 -ml-1 z-30" : 'bg-black -ml-1 z-20'}  w-4 h-4 rounded-full` }></div>
                      ))}
                      <p className='text-sm ml-1'>
                        {item.colors.length > 3 && `  +${item.colors.length - 3}`}
                      </p>
                    </span>
                    <h6 className="text-base font-normal text-gray-700 mb-2">
                      <span className="text-gray-400 line-through mr-2">
                        ₹{item.actualPrice}
                      </span>
                      ₹{item.discountedPrice}
                    </h6>
                  </div>
                  <div className="flex pb-5">
                    {item.size.map((size,index)=>(
                      <span key={index} className="border border-gray-300 px-1 mr-2 hover:bg-pink-500 hover:text-white cursor-default transition duration-300">{size}</span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Tshirts