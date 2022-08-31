import type { AppProps } from "next/app";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/index.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const [cart, setCart] = useState({});
  const [subTotal, setSubTotal] = useState();
  const [showCart, setShowCart] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false)
  const [localCart, setLocalCart] = useState();

  useEffect(() => {
    console.log("app running");
    try {
      if (localStorage.getItem("cart")) {
        // @ts-ignore
        setCart(JSON.parse(localStorage.getItem("cart")));
        // @ts-ignore
        saveCart(JSON.parse(localStorage.getItem("cart")));
      }
    } catch (error) {
      console.log("error: ", error);
      localStorage.clear();
    }
    const token = localStorage.getItem('token')
    if(token){
      setLoggedIn(true);
    }
  }, [router.query]);

  const saveCart = (myCart: any) => {
    console.log("save to cart ++++++++++", myCart);
    let total = 0;
    let keys = Object.keys(myCart);
    localStorage.setItem("cart", JSON.stringify(myCart));
    for (let i = 0; i < keys.length; i++) {
      total += myCart[keys[i]]["price"] * myCart[keys[i]]["qty"]; // Multiplying price of item with total quantity
    }
    // @ts-ignore
    setSubTotal(total);
  };

  const clearCart = () => {
    console.log("clear cart -----------");
    if (cart) {
      saveCart({});
      setCart({});
      // Router.push("/");
    }
  };

  const addToCart = (
    itemId: any,
    qty: any,
    price: any,
    name: any,
    size: any,
    variant: any
  ) => {
    console.log("add to cart ~~~~~~~~~~~~~");
    let newCart = cart;
    if (itemId in cart) {
      // @ts-ignore
      newCart[itemId].qty = cart[itemId].qty + qty;
    } else {
      // @ts-ignore
      newCart[itemId] = { qty: 1, price, name, size, variant };
    }
    setCart(newCart);
    saveCart(newCart);
  };

  const buyNow = (
    itemId: any,
    qty: any,
    price: any,
    name: any,
    size: any,
    variant: any
  ) => {
    clearCart();
    let newCart = {};
    // @ts-ignore
    newCart[itemId] = { qty: qty, price, name, size, variant };
    setCart(newCart)
    saveCart(newCart);
    Router.push('/checkout')
  };

  const removeFromCart = (
    itemId: any,
    qty: any,
    price: any,
    name: any,
    size: any,
    variant: any
  ) => {
    let newCart = cart;
    // @ts-ignore

    console.log("remove from cart >>>>>>>>>>>", cart);
    if (itemId in cart) {
      // @ts-ignore
      newCart[itemId].qty = cart[itemId].qty - qty;
    }
    // @ts-ignore
    if (newCart[itemId]["qty"] <= 0) {
      // @ts-ignore
      delete newCart[itemId];
    }
    setCart(newCart);
    saveCart(newCart);
  };

  return (
    <>
      <Navbar
        // @ts-ignore
        cart={cart}
        // @ts-ignore
        subTotal={subTotal}
        clearCart={clearCart}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        loggedIn={loggedIn}
      />
      <div className="max-w-[1440px] px-10 lg:px-0 mx-auto">
        <Component
          cart={cart}
          subTotal={subTotal}
          clearCart={clearCart}
          addToCart={addToCart}
          buyNow={buyNow}
          removeFromCart={removeFromCart}
          loggedIn={loggedIn}
          {...pageProps}
        />
      </div>
      <Footer />
    </>
  );
}

export default MyApp;
