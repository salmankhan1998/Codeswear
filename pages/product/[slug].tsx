import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Product from "../../models/Product";
import { HiStar } from "react-icons/hi";
import { BsSuitHeart } from "react-icons/bs";
import Button from "../../components/Button";
import { connectDB } from "../../lib/connectDB";

const Images = [
  "/images/shirts/image1.jpeg",
  "/images/shirts/image2.jpeg",
  "/images/shirts/image3.jpeg",
  "/images/shirts/image4.jpeg",
];

const Slug = ({ addToCart, buyNow, product, variants }: any) => {
  // console.log("product of slug", product);
  // console.log("variants of slug", variants);

  const router = useRouter();
  const { slug } = router.query;
  const [pin, setPin] = useState();
  const [src, setSrc] = useState(product.image);
  const [service, setService] = useState();
  const [activeSize, setActiveSize] = useState("");
  const [activeColor, setActiveColor] = useState(product.color);
  const [sizes, setSizes] = useState([product.size]);
  const [colors, setColors] = useState([]);
  let tempColor: Array<any> = [];

  useEffect(() => {
    async function run() {
      const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/pincode`);
    }
    run();
    changeColor(product.color)
    for (let color of Object.keys(variants)) {
      tempColor.push(color);
    }
    if (tempColor.length > 0) {
      // @ts-ignore
      setColors(tempColor);
      tempColor = [];
    }

  }, []);

  useEffect(()=>{
    // @ts-ignore
       setService()
  },[pin])

  const handleChange = (e: Event) => {
    // @ts-ignore
    let val = e.target.value;
    setPin(val);
  };

  const checkServiceability = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/pincode`);
    const pinData = await res.json();
    // @ts-ignore
    if (pinData.pinCodes.includes(pin)) {
      // @ts-ignore
      setService(true);
    } else {
      // @ts-ignore
      setService(false);
    }
  };

  const changeColor = (color: string) => {
    setActiveColor(color);
    if (Object.keys(variants).includes(color)) {
      let temp = [];
      for (let item of Object.keys(variants[color])) {
        temp.push(item);
      }
      if (temp.length > 0) {
        // @ts-ignore
        setSizes(temp);
      }
    }
  };

  const changeVariant = (color: string, size: string) => {
    // setActiveColor(color);
    setActiveSize(size);
    // if (Object.keys(variants).includes(color)) {
    //   let temp = [];
    //   for (let item of Object.keys(variants[color])) {
    //     temp.push(item);
    //   }
    //   if (temp.length > 0) {
    //     // @ts-ignore
    //     setSizes(temp);
    //   }
    // }

    if (color && size) {
      // console.log("getting variants of color >>>>", `http://localhost:3000/product/${variants[color][size]["slug"]}`);
      let url = `${process.env.NEXT_PUBLIC_HOST}/product/${variants[color][size]["slug"]}`;
      // @ts-ignore
      window.location = url;
    }
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
              {product.title} ({activeSize ? activeSize : product.size}/
              {activeColor ? activeColor : product.color})
            </h1>
            <div className="flex mb-4">
              <span className="flex items-center">
                <HiStar className="w-4 h-4 text-pink-500" />
                <HiStar className="w-4 h-4 text-pink-500" />
                <HiStar className="w-4 h-4 text-pink-500" />
                <HiStar className="w-4 h-4 text-pink-500" />
                <HiStar className="w-4 h-4 " />
                <span className="text-gray-600 ml-3 ">4 Reviews</span>
              </span>
            </div>
            <p className="leading-relaxed">{product.description}</p>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
              <div className="flex">
                <span className="mr-3">Color</span>
                {colors.map((color, index) => {
                  return (
                    <button
                      key={index}
                      onClick={() => {
                        changeColor(color);
                      }}
                      className={`border-2 ${color} ${
                        color === activeColor &&
                        "border border-cyan-400"
                      } rounded-full w-6 h-6 focus:outline-none`}
                    ></button>
                  );
                })}
              </div>
              <div className="flex ml-6 items-center">
                <span className="mr-3">Size</span>
                <div className="relative">
                  <select
                    onChange={(e) => {
                      changeVariant(activeColor, e.target.value);
                    }}
                    defaultValue={'DEFAULT'}
                    className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-pink-200 focus:border-pink-500 text-base pl-3 pr-10"
                  >
                    {/* <option value="" selected disabled hidden>Choose size</option> */}
                    <option value="DEFAULT" disabled>Choose size</option>
                    {sizes.map((size, index) => {
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
                <Button
                  title="Buy Now"
                  disable={false}
                  variant="contained"
                  icon=""
                  handleClick={() => {buyNow(slug,
                    1,
                    product.price,
                    product.title,
                    activeSize ? activeSize : product.size,
                    activeColor ? activeColor : product.color)}}
                />
                <Button
                  title="Add to Cart"
                  disable={false}
                  variant="contained"
                  icon=""
                  handleClick={() => {
                    addToCart(
                      slug,
                      1,
                      product.price,
                      product.title,
                      activeSize ? activeSize : product.size,
                      activeColor ? activeColor : product.color
                    );
                  }}
                />
                <BsSuitHeart className="text-3xl text-pink-500" />
              </div>
            </div>
            <div className="relative flex space-x-8 mt-5">
              <input
                type="text"
                id="pin"
                name="pin"
                // value={pin || ""}
                placeholder="Enter pin code for serviceability"
                // @ts-ignore
                onChange={(e: Event) => {
                  handleChange(e);
                }}
                className="max-w-[310px] w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
              <Button
                title="Check"
                disable={!pin}
                variant="contained"
                icon=""
                handleClick={checkServiceability}
              />
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
  connectDB();

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
