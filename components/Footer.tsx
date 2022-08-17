import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-gray-600 body-font px-20">
      <div className="flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col  py-24 ">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900 w-[160px] h-[35px] cursor-pointer">
            <img src="/images/logo.webp" alt="logo" className="w-full h-full" />
          </a>
          <p className="mt-2 text-sm text-gray-500">
            Wear the {"<code/>"}
            <br />
            Premium coding tshirts, hoodies and apparals
          </p>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              SHOP
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-600 hover:text-gray-800 cursor-pointer">
                  Tshirts
                </a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800 cursor-pointer">
                  Hoodies
                </a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800 cursor-pointer">
                  Stickers
                </a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800 cursor-pointer">
                  Mugs
                </a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              CUSTOMER SERVICE
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-600 hover:text-gray-800 cursor-pointer">
                  Contact Us
                </a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800 cursor-pointer">
                  About Us
                </a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800 cursor-pointer">
                  Return Policy
                </a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              POLICY
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-600 hover:text-gray-800 cursor-pointer">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800 cursor-pointer">
                  Terms and Conditions
                </a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <img src="/images/pay.png" alt="pay images" />
          </div>
        </div>
      </div>
      <div className="bg-gray-100">
        <div className="py-4 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © 2020 CodesWear.com ——
            <a
              href="https://twitter.com/knyttneve"
              rel="noopener noreferrer"
              className="text-gray-600 ml-1"
              target="_blank"
            >
              All Rights Reserved
            </a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <a className="text-gray-500">
              <FaFacebookF className="w-5 h-5" />
            </a>
            <a className="ml-3 text-gray-500">
              <FaTwitter className="w-5 h-5" />
            </a>
            <a className="ml-3 text-gray-500">
              <FaInstagram className="w-5 h-5" />
            </a>
            <a className="ml-3 text-gray-500">
              <FaLinkedin className="w-5 h-5" />
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
