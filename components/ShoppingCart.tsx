import React from "react";
import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";
import { HiMinusSm, HiPlusSm, HiShoppingCart } from "react-icons/hi";

const ShoppingCart = ({
  cart,
  subTotal,
  addToCart,
  removeFromCart,
  clearCart,
  showCart,
  setShowCart,
}: any) => {
  console.log("cart --------", cart);
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
          {Object.keys(cart).length == 0 && (
            <div className="text-lg font-semibold">Your cart is Empty!</div>
          )}
          {Object.keys(cart).map((key, i) => (
            <li key={key} className=" list-decimal flex space-x-10 my-4">
              <span className="text-lg font-semibold">
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
        <div className="text-lg font-semibold">Subtotal: ₹{subTotal}</div>

        <div className="flex space-x-4 w-max mx-auto mt-10">
          <Link href={"/checkout"}
          >
            <button
            onClick={() => {
              setShowCart(!showCart);
            }}
              disabled={Object.keys(cart).length == 0}
              className="flex items-center text-white bg-pink-500 border-0 py-1 px-4 focus:outline-none hover:bg-pink-600 rounded text-base disabled:opacity-70 disabled:cursor-not-allowed"
            >
              <HiShoppingCart />
              Checkout
            </button>
          </Link>
          <button
            disabled={Object.keys(cart).length == 0}
            onClick={()=>{
              clearCart(); 
              setTimeout(()=>{
                setShowCart(!showCart)
              },400);
            }}
            className="flex text-white bg-pink-500 border-0 py-1 px-4 focus:outline-none hover:bg-pink-600 rounded text-base disabled:opacity-70 disabled:cursor-not-allowed"
          >
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
