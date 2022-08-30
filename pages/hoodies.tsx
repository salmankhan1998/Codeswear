import React from "react";
import Product from "../models/Product";
import Link from "next/link";
import axios from "axios";
import { connectDB } from "../lib/connectDB";

const Hoodies = ({products}: any) => {
  console.log("props", products)

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:3000/api/get_all_products")
  //     .then(function (response) {
  //       setProducts(response.data);
  //     })
  //     .catch(function (error) {
  //       console.log("product error:", error);
  //     })
  //     .then(function () {});
  // }, []);
  
  return (
    <section className="text-gray-600 body-font">
      <div className="px-5 py-24">
        <div className="flex flex-wrap">
          {Object.keys(products).map((item: any, index: any) => (
            // @ts-ignore
            <Link key={index} href={`/product/${products[item]?.slug}`}>
              <div className="lg:w-1/4 md:w-1/2 p-4 w-full shadow-md hover:shadow-2xl cursor-pointer transition duration-200">
                <a className="block relative rounded overflow-hidden h-80 lg:h-96 mb-5">
                  {/* @ts-ignore */}
                  <img
                    alt="ecommerce"
                    className="w-full h-full object-cover"
                    src={products[item].image}
                  />
                </a>
                <div className="">
                  <h6 className="text-xl text-black font-medium">
                    {/* @ts-ignore */}
                    {products[item].title}
                  </h6>
                  <div className="">
                    <span className="flex items-center">
                      {products[item].color.map(
                        (color: any, index: any) => (
                          <div
                            key={index}
                            className={`${
                              color === "red"
                                ? "bg-red-700"
                                : color === "blue"
                                ? "bg-blue-600 -ml-1 z-10"
                                : color === "white"
                                ? "bg-white border -ml-1 z-30"
                                : color === "yellow"
                                ? "bg-yellow-600 -ml-1 z-40"
                                : "bg-black -ml-1 z-50"
                            }  w-4 h-4 rounded-full`}
                          ></div>
                        )
                      )}
                      <p className="text-sm ml-1">
                        {products[item].color.length > 3 &&
                          `  +${products[item].color.length - 3}`}
                      </p>
                    </span>
                    <h6 className="text-base font-normal text-gray-700 mb-2">
                      <span className="text-gray-400 line-through mr-2">
                        {/* @ts-ignore */}₹{item?.price}
                      </span>
                      ₹499
                    </h6>
                  </div>
                  <div className="flex pb-5">
                    {products[item].size.map((size: any, index: any) => (
                      <span
                        key={index}
                        className="border border-gray-300 px-1 mr-2 hover:bg-pink-500 hover:text-white cursor-default transition duration-300"
                      >
                        {size}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

// --------- Function for server side rendering ----------- //

export async function getServerSideProps(context: any) {
  connectDB();

  let data = await Product.find({ category: 'hoodies'})

  let hoodies = {};
  for( let item of data){
    if(item.title in hoodies){
      // @ts-ignore
      if(!hoodies[item.title].size.includes(item.size) && item.availableQty > 0){
        // @ts-ignore
        hoodies[item.title].size.push(item.size)
      }
      // @ts-ignore
      if(!hoodies[item.title].color.includes(item.color) && item.availableQty > 0){
        // @ts-ignore
        hoodies[item.title].color.push(item.color)
      }
    }
    else{
      // @ts-ignore
      hoodies[item.title] = JSON.parse(JSON.stringify(item))
      // @ts-ignore
      if(item.availableQty > 0){
      // @ts-ignore
        hoodies[item.title].size = [item.size];
      // @ts-ignore
        hoodies[item.title].color = [item.color];
      }
    }
  }
  return {
    props: {products: hoodies}, // will be passed to the page component as props
  };
}

export default Hoodies;
