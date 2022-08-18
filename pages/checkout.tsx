import React, { useState } from "react";
import Link from "next/link";
import Input from "../components/Input";
import { HiMinusSm, HiPlusSm } from "react-icons/hi";
import { BsBagCheckFill } from "react-icons/bs";

const Checkout = ({
  cart,
  subTotal,
  addToCart,
  removeFromCart,
  clearCart,
  showCart,
  setShowCart,
}: any) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [number, setNumber] = useState("");
  const [pin, setPin] = useState("");
  const [state, setState] = useState("");
  const [district, setDistrict] = useState("");

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl lg:text-3xl font-semibold text-center capitalize my-5">
        checkout
      </h1>
      <h2 className="text-lg lg:text-xl font-semibold capitalize mt-5 mb-2">
        1. Delivery Details
      </h2>
      <div className="px-5">
        <div className="flex space-x-5 w-full">
          <Input
            label="Name"
            type="text"
            id="name"
            placeholder="Enter your name"
            handleChange={(e) => {
              // @ts-ignore
              console.log(e.target.value);
            }}
          />
          <Input
            label="Email"
            type="email"
            id="email"
            placeholder="Enter your email"
            handleChange={(e) => {
              // @ts-ignore
              console.log(e.target.value);
            }}
          />
        </div>

        <div className="relative mb-4">
          <label htmlFor="address" className="leading-7 text-sm text-gray-600">
            Address
          </label>
          <textarea
            id="address"
            name="address"
            placeholder="Enter your address"
            onChange={(e) => {
              // @ts-ignore
              console.log(e.target.value);
            }}
            className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out placeholder:text-base"
          ></textarea>
        </div>
        <div className="flex space-x-5 w-full">
          <Input
            label="Phone Number"
            type="text"
            id="number"
            placeholder="Enter your 10 Digit Number"
            handleChange={(e) => {
              // @ts-ignore
              console.log(e.target.value);
            }}
          />
          <Input
            label="Pin (Shipping only accross Pakistan)"
            type="text"
            id="pin"
            placeholder=""
            handleChange={(e) => {
              // @ts-ignore
              console.log(e.target.value);
            }}
          />
        </div>
        <div className="flex space-x-5 w-full">
          <Input
            label="State"
            type="text"
            id="state"
            placeholder=""
            handleChange={(e) => {
              // @ts-ignore
              console.log(e.target.value);
            }}
          />
          <Input
            label="District"
            type="text"
            id="district"
            placeholder=""
            handleChange={(e) => {
              // @ts-ignore
              console.log(e.target.value);
            }}
          />
        </div>
      </div>
      <h2 className="text-lg lg:text-xl font-semibold capitalize mt-5 mb-2">
        2. Review Cart Items & Pay
      </h2>
      <div className="mx-3 p-7 bg-pink-200">
        <ol className="list-decimal">
          {Object.keys(cart).length == 0 && (
            <div className="text-base font-semibold">Your cart is Empty!</div>
          )}
          {Object.keys(cart).map((key, i) => (
            <li key={key} className="flex space-x-10 my-4">
              <span className="w-1/3 text-lg font-semibold">
                {i + 1}. {cart[key].name}
              </span>
              <span className="flex items-center space-x-2">
                <HiMinusSm
                  onClick={() => {
                    removeFromCart(
                      key,
                      1,
                      cart[key].price,
                      cart[key].name,
                      cart[key].size,
                      cart[key].variant
                    );
                  }}
                  className="border border-pink-500 rounded-full text-sm text-pink-500"
                />
                <p>{cart[key].qty}</p>
                <HiPlusSm
                  onClick={() => {
                    addToCart(
                      key,
                      1,
                      cart[key].price,
                      cart[key].name,
                      cart[key].size,
                      cart[key].variant
                    );
                  }}
                  className="border border-pink-500 rounded-full text-sm text-pink-500"
                />
              </span>
            </li>
          ))}
        </ol>
        <div className="text-base font-semibold mt-2">
          Subtotal: ₹{subTotal}
        </div>
        {/* {Object.keys(cart).length !== 0 && (
          <div className="flex space-x-4  mt-7">
            <Link href={"/checkout"}>
              <button className="flex items-center text-white bg-pink-500 border-0 py-1 px-4 focus:outline-none hover:bg-pink-600 rounded text-base">
                <HiShoppingCart />
                Checkout
              </button>
            </Link>
            <button
              onClick={clearCart}
              className="flex  text-white bg-pink-500 border-0 py-1 px-4 focus:outline-none hover:bg-pink-600 rounded text-base"
            >
              Clear Cart
            </button>
          </div>
          )} */}
      </div>
      <div className="px-3 py-5">
        <Link href={"/checkout"}>
          <button
            disabled={Object.keys(cart).length == 0}
            className="flex items-center text-white bg-pink-500 border-0 py-1 px-4 focus:outline-none hover:bg-pink-600 rounded text-base disabled:opacity-70 disabled:pointer-events-none"
          >
            <BsBagCheckFill className="mr-2" />
            Pay {subTotal}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Checkout;
