import React, { useState } from "react";
import Link from "next/link";
import Input from "../components/Input";
import Button from "../components/Button";
import { HiMinusSm, HiPlusSm } from "react-icons/hi";
import { BsBagCheckFill } from "react-icons/bs";
import router from "next/router";
import Head from "next/head";
import Script from "next/script";
import axios from "axios";

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

  const initiatePayment = async () => {
    let txnToken;
    let oId = Math.floor( Math.random() * Date.now());
    let data = { cart, subTotal, oId, email: "email" };

    axios
      .post(`${process.env.NEXT_PUBLIC_HOST}/api/preTransaction`, data)
      .then((response) => {
        console.log("response", response);
      })
      .catch((err) => {
        console.log("error"), err;
      });

    var config = {
      root: "",
      flow: "DEFAULT",
      data: {
        orderId: oId /* update order id */,
        token: txnToken /* update token value */,
        tokenType: "TXN_TOKEN",
        amount: subTotal /* update amount */,
      },
      handler: {
        notifyMerchant: function (eventName: any, data: any) {
          console.log("notifyMerchant handler function called");
          console.log("eventName => ", eventName);
          console.log("data => ", data);
        },
      },
    };
    // initialze configuration using init method
    // @ts-ignore
    // window.Paytm.CheckoutJS.init(config)
    //   .then(function onSuccess() {
    //     // after successfully updating configuration, invoke JS Checkout
    //     // @ts-ignore
    //     window.Paytm.CheckoutJS.invoke();
    //   })
    //   .catch(function onError(error: any) {
    //     console.log("error => ", error);
    //   });
  };

  return (
    <div className="container mx-auto">
      <Head>
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0"
        />
      </Head>
      <Script
        type="application/javascript"
        src={`${process.env.NEXT_PUBLIC_PAYTM_HOST}/merchantpgpui/checkoutjs/merchants/${process.env.NEXT_PUBLIC_PAYTM_MID}.js`}
        onLoad={() => {}}
        crossOrigin="anonymous"
      />

      <h1 className="text-2xl lg:text-3xl font-semibold text-center capitalize my-5">
        checkout
      </h1>
      <h2 className="text-lg lg:text-xl font-semibold capitalize mt-5 mb-2">
        1. Delivery Details
      </h2>
      <div className="px-5">
        <div className="flex space-x-5 w-full">
          <div className="w-1/2">
            <Input
              label="Name"
              type="text"
              id="name"
              value=""
              placeholder="Enter your name"
              handleChange={(e) => {
                // @ts-ignore
                console.log(e.target.value);
              }}
            />
          </div>
          <div className="w-1/2">
            <Input
              label="Email"
              type="email"
              id="email"
              value=""
              placeholder="Enter your email"
              handleChange={(e) => {
                // @ts-ignore
                console.log(e.target.value);
              }}
            />
          </div>
        </div>

        <div className="relative mb-4">
          <label htmlFor="address" className="leading-7 text-sm text-gray-600">
            Address
          </label>
          <textarea
            id="address"
            value=""
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
          <div className="w-1/2">
            <Input
              label="Phone Number"
              type="text"
              id="number"
              value=""
              placeholder="Enter your 10 Digit Number"
              handleChange={(e) => {
                // @ts-ignore
                console.log(e.target.value);
              }}
            />
          </div>
          <div className="w-1/2">
            <Input
              label="Pin (Shipping only accross Pakistan)"
              type="text"
              id="pin"
              value=""
              placeholder=""
              handleChange={(e) => {
                // @ts-ignore
                console.log(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="flex space-x-5 w-full">
          <div className="w-1/2">
            <Input
              label="State"
              type="text"
              id="state"
              value=""
              placeholder=""
              handleChange={(e) => {
                // @ts-ignore
                console.log(e.target.value);
              }}
            />
          </div>
          <div className="w-1/2">
            <Input
              label="District"
              type="text"
              id="district"
              value=""
              placeholder=""
              handleChange={(e) => {
                // @ts-ignore
                console.log(e.target.value);
              }}
            />
          </div>
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
        {Object.keys(cart).length !== 0 && (
          <Button
            title="Clear Cart"
            disable={Object.keys(cart).length == 0}
            variant="contained"
            icon=""
            handleClick={() => {
              clearCart();
              // path May be replaced later
              router.push("/tshirts");
            }}
          />
        )}
      </div>
      <div className="px-3 py-5">
        <Button
          title={`Pay ${subTotal}`}
          disable={Object.keys(cart).length == 0}
          variant="contained"
          icon="bag"
          handleClick={initiatePayment}
        />
      </div>
    </div>
  );
};

export default Checkout;
