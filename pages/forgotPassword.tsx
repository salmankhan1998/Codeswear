import Link from "next/link";
import React from "react";

const ForgotPassword = () => {
  return (
    <section className="mx-auto w-full md:w-3/5 lg:w-2/5 py-5 px-10 mt-20 shadow-2xl rounded-md">
        <div className="mx-auto w-24 overflow-hidden rounded-full p-1 bg-pink-500">
            <img
            className=" object-cover"
            src="/images/logo-circle.webp"
            alt="logo"
            />
        </div>
        <form>
            <p className="text-xl font-semibold text-center mt-4 mb-10">
            Sign Up to your account
            </p>

            <div className="mb-4">
            <input
                type="email"
                id="email"
                placeholder="Email"
                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-pink-500 focus:outline-none"
            />
            </div>

            <div className="text-center pt-1 mb-12 pb-1">
            <button
                className="inline-block px-6 py-2.5 text-pink-500 font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-pink-500 hover:shadow-lg hover:text-white focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
                type="button"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                // style="background: linear-gradient(to right,#ee7724,#d8363a,#dd3675,#b44593);"
            >
                Sign Up
            </button>
            </div>
        </form>
    </section>
  );
};

export default ForgotPassword;
