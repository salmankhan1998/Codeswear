import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { MongoClient } from "mongodb";
import Product from "../../models/Product";
import { HiStar } from "react-icons/hi";
import { BsSuitHeart } from "react-icons/bs";

const mongoose = require("mongoose");
const uri =
  "mongodb+srv://salmankhan:salmankhan1998@cluster0.95nnhdx.mongodb.net/?retryWrites=true&w=majority";

const Images = [
  "/images/shirts/image1.jpeg",
  "/images/shirts/image2.jpeg",
  "/images/shirts/image3.jpeg",
  "/images/shirts/image4.jpeg",
];

const Slug = ({ addToCart, product, variants }: any) => {
  console.log("product of slug", product);
  console.log("variants of slug", variants);


  // const [currentSize, setCurrentSize]= useState('')
  const [service, setService] = useState();
  const [src, setSrc] = useState("");
  const [pin, setPin] = useState();
  const router = useRouter();
  const { slug } = router.query;
  const [sizes, setSizes]= useState(['S']);
  const colors: Array<string> = []

  for( let color of Object.keys(variants)){
    colors.push(color);
  }
  // for (let item of Object.keys(variants)) {
  //   Object.keys(variants[item]).map((val) => {
  //     sizes.push(val);
  //   });
  // }

  const checkServiceability = async () => {
    const res = await fetch("http://localhost:3000/api/pincode");

    const pinData = await res.json();
    // pinData && console.log("pin codes",pinData);
    // @ts-ignore
    if (pinData.pinCodes.includes(parseInt(pin))) {
      // @ts-ignore
      setService(true);
    } else {
      // @ts-ignore
      setService(false);
    }
  };

  const changeVariant = (color: string, size: string)=>{
    console.log("color",color, "check",Object.keys(variants).includes(color))
    if(Object.keys(variants).includes(color)){
      let temp = []
      for(let item of Object.keys(variants[color])){
        temp.push(item)
      }
      if(temp.length > 0 ){
        // @ts-ignore
        setSizes(temp)
      }
    }
  }

  useEffect(() => {
    async function run() {
      const res = await fetch("http://localhost:3000/api/pincode");
      // console.log('res: ', res);
    }
    run();
  }, []);

  const handleChange = (e: Event) => {
    // @ts-ignore
    setPin(e.target.value);
  };

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
              {product.title} (XL/Blue)
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
             {product.description}
            </p>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
              <div className="flex">
                <span className="mr-3">Color</span>
                {colors.map((color,index) => {
                  return (
                    <button
                      key={index}
                      onClick={()=>{changeVariant(color,"S")}}
                      className={`border-2 ${color} ${color == "red" && "border border-gray-600"} rounded-full w-6 h-6 focus:outline-none`}
                    ></button>
                  );
                })}
              </div>
              <div className="flex ml-6 items-center">
                <span className="mr-3">Size</span>
                <div className="relative">
                  <select onChange={(e)=>{}} className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-pink-200 focus:border-pink-500 text-base pl-3 pr-10">
                    {sizes.map((size,index) => {
                      return <option key={index}>{size}</option>;
                    })}
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
                ₹ {product.price}
              </span>
              <div className="flex items-center space-x-4">
                <button className="flex ml-auto text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded">
                  Buy Now
                </button>
                <button
                  onClick={() => {
                    addToCart(
                      slug,
                      1,
                      599,
                      "Wear the code (XL/Blue)",
                      "XL",
                      "Red"
                    );
                  }}
                  className="flex ml-auto text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded"
                >
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
                value={pin || ""}
                placeholder="Enter pin code for serviceability"
                // @ts-ignore
                onChange={(e: Event) => {
                  handleChange(e);
                }}
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
            {service && service != null && (
              <div className="text-green-600 mt-4">
                Yes! We can deliver the order to this location.
              </div>
            )}
            {!service && service != null && (
              <div className="text-red-600 mt-4">
                Sorry! Our service is not available on this location.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export async function getServerSideProps(context: any) {
  const db = mongoose.connect(uri);
  mongoose.Promise = global.Promise;
  mongoose.connection.once("open", () => {
    console.log(" 🍃 connected to mongoDB mLab");
  });

  let product = await Product.findOne({ slug: context.query.slug });
  let productVariants = await Product.find({ title: product?.title });
  let colorSizeSlug = {};

  for (let item of productVariants) {
    //{red: { size: { slug: "slug-name"}}}
    // @ts-ignore
    if (Object.keys(colorSizeSlug).includes(item.color)) {
      // @ts-ignore
      colorSizeSlug[item.color][item?.size] = { slug: item?.slug };
    } else {
      // @ts-ignore
      colorSizeSlug[item.color] = {};
      // @ts-ignore
      colorSizeSlug[item.color][item?.size] = { slug: item?.slug };
    }
  }

  return {
    props: {
      product: JSON.parse(JSON.stringify(product)),
      variants: JSON.parse(JSON.stringify(colorSizeSlug)),
    }, // will be passed to the page component as props
  };
}

export default Slug;
