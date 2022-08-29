import React from "react";
import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";
import { HiMinusSm, HiPlusSm, HiShoppingCart } from "react-icons/hi";
import Button from "./Button";
import { useRouter } from "next/router";

interface ShoppingCartProps {
  cart: Object;
  subTotal: Number;
  addToCart: Function;
  removeFromCart: Function;
  clearCart: Function;
  showCart: boolean;
  setShowCart: Function;
}

const ShoppingCart: React.FC<ShoppingCartProps> = ({
  cart,
  subTotal,
  addToCart,
  removeFromCart,
  clearCart,
  showCart,
  setShowCart,
}: any) => {
  const router = useRouter();
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
                {i + 1}. {cart[key].name} ({cart[key].size}/{cart[key].variant})
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
          <Button
            title="Checkout"
            disable={Object.keys(cart).length == 0}
            variant="contained"
            icon="shoppingCart"
            handleClick={() => {
              setShowCart(!showCart);
              router.push("/checkout");
            }}
          />
          <Button
            title="Clear Cart"
            disable={Object.keys(cart).length == 0}
            variant="contained"
            icon=""
            handleClick={() => {
              clearCart();
              setTimeout(() => {
                setShowCart(!showCart);
              }, 400);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
