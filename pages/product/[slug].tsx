import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { HiStar } from "react-icons/hi";
import { BsSuitHeart } from "react-icons/bs";

const Images = [
  "/images/shirts/image1.jpeg",
  "/images/shirts/image2.jpeg",
  "/images/shirts/image3.jpeg",
  "/images/shirts/image4.jpeg",
];

const Slug = ( {addToCart}: any) => {
  const [src, setSrc] = useState("");
  const [pin, setPin] = useState();
  const [service, setService] = useState();
  const router = useRouter();
  const { slug } = router.query;

  const checkServiceability = async () => {
    const res = await fetch("http://localhost:3000/api/pincode");
    
    const pinData = await res.json();
    pinData && console.log("pin codes",pinData);
      // @ts-ignore
    if (pinData.pinCodes.includes(parseInt(pin))) {
      // @ts-ignore
      setService(true);
    }
    else{
      // @ts-ignore
      setService(false);
    }
  };

  useEffect(() => {
     async function run() {
      const res = await fetch("http://localhost:3000/api/pincode");
      console.log('res: ', res);
    }

    run()
    
  },[])

  const handleChange = (e : Event)=>{
      // @ts-ignore
    setPin(e.target.value);
  }

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <div className="flex">
            <div className="flex flex-col w-16">
              {Images.map((imgSrc, index) => (
                <img
                  key={index}
                  src={imgSrc}
                  alt=""
                  className="w-full h-16"
                  onClick={() => {
                    setSrc(imgSrc);
                  }}
                />
              ))}
            </div>
            <img
              alt="ecommerce"
              className="w-96 lg:h-auto h-64 object-cover object-center rounded flex-shrink-0"
              src={src ? src : Images[0]}
            />
          </div>
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest uppercase">
              codeswear
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              Wear the code (XL/Blue)
            </h1>
            <div className="flex mb-4">
              <span className="flex items-center">
                <HiStar className="w-4 h-4 text-pink-500" />
                <HiStar className="w-4 h-4 text-pink-500" />
                <HiStar className="w-4 h-4 text-pink-500" />
                <HiStar className="w-4 h-4 text-pink-500" />
                <HiStar className="w-4 h-4" />
                <span className="text-gray-600 ml-3">4 Reviews</span>
              </span>
            </div>
            <p className="leading-relaxed">
              Fam locavore kickstarter distillery. Mixtape chillwave tumeric
              sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo
              juiceramps cornhole raw denim forage brooklyn. Everyday carry +1
              seitan poutine tumeric. Gastropub blue bottle austin listicle
              pour-over, neutra jean shorts keytar banjo tattooed umami
              cardigan.
            </p>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
              <div className="flex">
                <span className="mr-3">Color</span>
                <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                <button className="border-2 border-gray-300 ml-1 bg-pink-500 rounded-full w-6 h-6 focus:outline-none"></button>
              </div>
              <div className="flex ml-6 items-center">
                <span className="mr-3">Size</span>
                <div className="relative">
                  <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-pink-200 focus:border-pink-500 text-base pl-3 pr-10">
                    <option>S</option>
                    <option>M</option>
                    <option>L</option>
                    <option>XL</option>
                    <option>XXL</option>
                  </select>
                  <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            <div className="flex space-x-2 justify-between">
              <span className="title-font font-medium text-2xl text-gray-900">
                ₹599
              </span>
              <div className="flex items-center space-x-4">
                <button className="flex ml-auto text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded">
                  Buy Now
                </button>
                <button onClick={()=>{addToCart(slug, 1, 599,'Wear the code (XL/Blue)', 'XL',"Red")}} className="flex ml-auto text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded">
                  Add to Cart
                </button>
                <BsSuitHeart className="text-3xl text-pink-500" />
              </div>
            </div>
            <div className="relative flex space-x-8 mt-5">
              <input
                type="text"
                id="pin"
                name="pin"
                value={pin || ''}
                placeholder="Enter pin code for serviceability"
                // @ts-ignore
                onChange={(e: Event)=>{handleChange(e)}}
                className="max-w-[310px] w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
              <button
                onClick={checkServiceability}
      // @ts-ignore
                disabled={!pin}
                className="text-white bg-pink-500 border-0 py-2 px-8 focus:outline-none hover:bg-pink-600 rounded textLg disabled:cursor-not-allowed"
              >
                Check
              </button>
            </div>
            {(service && service != null) && <div className='text-green-600 mt-4' >
              Yes! We can deliver the order to this location.
            </div>}
            {(!service && service != null) && <div className='text-red-600 mt-4' >
              Sorry! Our service is not available on this location.
            </div>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slug;
