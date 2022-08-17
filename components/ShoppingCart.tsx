import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { HiMinusSm, HiPlusSm, HiShoppingCart } from "react-icons/hi";

const ShoppingCart = ({ showCart, setShowCart }: any) => {
  return (
    <div className="w-screen h-screen bg-[#00000080] z-30 absolute top-0 right-0 transition ease-linear duration-300 ">
      <div className="w-[30vw] h-full bg-white ml-auto relative px-7 py-9">
        <AiOutlineClose
          className="text-2xl absolute top-9 right-7"
          onClick={() => {
            setShowCart(!showCart);
          }}
        />
        <h2 className="text-2xl font-medium leading-8 text-pink-500">
          Shopping cart
        </h2>
        <ol className="list-decimal mt-10">
          <li className="flex space-x-10 my-4">
            <span>T-shirt - Wear the code</span>
            <span className="flex items-center space-x-2">
              <HiMinusSm className="border border-pink-500 rounded-full text-sm text-pink-500" />
              <p>1</p>
              <HiPlusSm className="border border-pink-500 rounded-full text-sm text-pink-500" />
            </span>
          </li>
          <li className="flex space-x-10 my-4">
            <span>T-shirt - Wear the code</span>
            <span className="flex items-center space-x-2">
              <HiMinusSm className="border border-pink-500 rounded-full text-sm text-pink-500" />
              <p>1</p>
              <HiPlusSm className="border border-pink-500 rounded-full text-sm text-pink-500" />
            </span>
          </li>
          <li className="flex space-x-10 my-4">
            <span>T-shirt - Wear the code</span>
            <span className="flex items-center space-x-2">
              <HiMinusSm className="border border-pink-500 rounded-full text-sm text-pink-500" />
              <p>1</p>
              <HiPlusSm className="border border-pink-500 rounded-full text-sm text-pink-500" />
            </span>
          </li>
          <li className="flex space-x-10 my-4">
            <span>T-shirt - Wear the code</span>
            <span className="flex items-center space-x-2">
              <HiMinusSm className="border border-pink-500 rounded-full text-sm text-pink-500" />
              <p>1</p>
              <HiPlusSm className="border border-pink-500 rounded-full text-sm text-pink-500" />
            </span>
          </li>
        </ol>
        <div className="flex space-x-4 w-max mx-auto mt-10">
          <button className="flex items-center text-white bg-pink-500 border-0 py-1 px-4 focus:outline-none hover:bg-pink-600 rounded text-base">
            <HiShoppingCart/>
            Checkout
          </button>
          <button className="flex  text-white bg-pink-500 border-0 py-1 px-4 focus:outline-none hover:bg-pink-600 rounded text-base">
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
