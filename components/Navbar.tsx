import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import ArrowDown from "../public/icons/ArrowDown";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { RiAccountPinCircleFill } from "react-icons/ri";
import ShoppingCart from "./ShoppingCart";

interface NavbarProps {
  cart: Object;
  subTotal: Number;
  addToCart: Function;
  removeFromCart: Function;
  clearCart: Function;
  loggedIn: boolean;
}

const Navbar: React.FC<NavbarProps> = ({
  cart,
  subTotal,
  addToCart,
  removeFromCart,
  clearCart,
  loggedIn,
}) => {
  const [showCart, setShowCart] = useState(false);
  const [toggle, setToggle] = useState(false);
  const router = useRouter();
  const ref = useRef();

  useEffect(() => {
    if (!localStorage.getItem("token")) router.push("/");
  }, []);

  const logOut = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };
  return (
    <header className="bg-white text-gray-600 body-font w-full sticky top-0 border-b border-gray-200 px-10 z-50">
      <div className="bg-white flex justify-between flex-wrap flex-col md:flex-row items-center h-20">
        <Link href={"/"}>
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 cursor-pointer">
            <img src="/images/logo.webp" />
          </a>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center space-x-10">
          <Link href={"/tshirts"}>
            <a className="text-xl text-black hover:text-pink-500 cursor-pointer flex items-center space-x-2 group">
              T-Shirts
              <span className="group-hover:rotate-180">
                <ArrowDown />
              </span>
            </a>
          </Link>
          <Link href={"/mugs"}>
            <a className="text-xl text-black hover:text-pink-500 cursor-pointer flex items-center space-x-2 group">
              Mugs
              <span className="group-hover:rotate-180">
                <ArrowDown />
              </span>
            </a>
          </Link>
          <Link href={"/hoodies"}>
            <a className="text-xl text-black hover:text-pink-500 cursor-pointer">
              Hoodies
            </a>
          </Link>
          <Link href={"/stickers"}>
            <a className="text-xl text-black hover:text-pink-500 cursor-pointer">
              Stickers
            </a>
          </Link>
          {loggedIn && (
            <Link href={"/addProduct"}>
              <a className="text-xl text-black hover:text-pink-500 cursor-pointer">
                Add Product
              </a>
            </Link>
          )}
          <div className="flex items-center space-x-4 relative">
            {!loggedIn && (
              <Link href={"/login"}>
                <a className="text-sm text-white px-2 py-1 w-max h-8 rounded-md bg-pink-500 cursor-pointer border  hover:bg-white hover:text-pink-500 hover:border border-pink-500 transition duration-300">
                  Login
                </a>
              </Link>
            )}

            {loggedIn && (
              <>
                <RiAccountPinCircleFill
                  className="w-7 h-7 cursor-pointer text-black"
                  onMouseOver={() => {
                    setToggle(true);
                  }}
                  onMouseLeave={() => {
                    setToggle(false);
                  }}
                />
                {/* <div
                  
                  className="text-sm text-white px-2 py-1 w-max h-8 rounded-md bg-pink-500 cursor-pointer border  hover:bg-white hover:text-pink-500 hover:border border-pink-500 transition duration-300"
                >
                  LogOut
                </div> */}
                <AiOutlineShoppingCart
                  onClick={() => {
                    setShowCart(!showCart);
                  }}
                  className="border hover:bg-gray-100 border-gray-300 text-pink-500 rounded-lg p-1 h-8 w-8 cursor-pointer"
                />
              </>
            )}
            {toggle && (
              <ul
                onMouseEnter={() => {
                  setToggle(true);
                }}
                onMouseLeave={() => {
                  setToggle(false);
                }}
                className="w-40 rounded-md border border-pink-500 bg-white shadow-xl p-5 absolute top-8 right-12"
              >
                <li className="mb-3 hover:text-pink-700 cursor-pointer">
                  My Account
                </li>
                <li
                  onClick={() => {
                    router.push("/orders");
                  }}
                  className="mb-3 hover:text-pink-700 cursor-pointer"
                >
                  Orders
                </li>
                <li
                  className="mb-3 hover:text-pink-700 cursor-pointer"
                  onClick={logOut}
                >
                  Logout
                </li>
              </ul>
            )}
          </div>
        </nav>
      </div>
      {showCart && loggedIn && (
        <ShoppingCart
          cart={cart}
          subTotal={subTotal}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          clearCart={clearCart}
          showCart={showCart}
          setShowCart={setShowCart}
        />
      )}
    </header>
  );
};

export default Navbar;
