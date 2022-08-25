import React, { useState } from "react";
import axios from "axios";
import Input from "../components/Input";

const AddProduct = () => {
  const [product, setProduct] = useState({});
  const [logo, setLogo] = useState(null);

  const handleChange = (e: any, name: string) => {
    console.log(e.target.value);
    let val = e.target.value;
    setProduct({ ...product, [name]: val });
  };

  const handleImage = (e: any, name: string) => {
    console.log("file : ", e.target.value);
    let file = e.target.files[0];
    console.log("file : ", file);
    if (file) {
      // @ts-ignore
      setProduct({ ...product, [name]: URL.createObjectURL(file) });
      // @ts-ignore
      setLogo(URL.createObjectURL(file));
    }
  };

  const AddProduct = async () => {
    console.log("Product details", product);
    // setLoading(true);
    axios
      .post("http://localhost:3000/api/add_product", product)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    // setPostsState([...postsState, res]);
    // setLoading(false);
  };

  return (
    <div className="w-2/5 mx-auto">
      <h2 className="text-2xl lg:text-3xl font-semibold text-center capitalize my-10">
        Add New Product
      </h2>
      <form action="">
        <Input
          label="Poduct Title"
          type="text"
          id="title"
          placeholder="Enter product name"
          handleChange={(e) => {
            handleChange(e, "title");
          }}
        />
        <Input
          label="Slug"
          type="text"
          id="slug"
          placeholder="Enter Unique Identity for product"
          handleChange={(e) => {
            handleChange(e, "slug");
          }}
        />
        <Input
          label="Description"
          type="text"
          id="desc"
          placeholder="Enter Description"
          handleChange={(e) => {
            handleChange(e, "description");
          }}
        />

        {/* .icon-img{
            position: absolute;
            width: 30px;
            height: 30px;
            object-fit: cover;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
        } */}

        <div className="flex flex-col mb-4">
          <label className="leading-7 text-sm text-gray-600">Logo</label>
          <div className="w-full h-[200px] border border-gray-300 rounded-md relative">
            <img
              src={logo ? logo : "/icons/upload-icon.png"}
              alt="logo"
              className={`absolute mx-auto ${
                logo
                  ? "w-full h-full absolute object-contain"
                  : " h-[100px] w-[100px] object-contain transform top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]"
              }`}
            />
            <input
              type="file"
              accept="image/*"
              className="opacity-0 w-full h-full cursor-pointer"
              onChange={(e) => {
                handleImage(e, "image");
              }}
            />
          </div>
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="category" className="leading-7 text-sm text-gray-600">
            Choose category
          </label>
          <select
            name="category"
            id="category"
            className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-2.5 px-3 leading-8 transition-colors duration-200 ease-in-out placeholder:text-base"
            onChange={(e) => {
              handleChange(e, "category");
            }}
          >
            <option value=""></option>
            <option value="shirt">Shirt</option>
            <option value="mug">Mug</option>
            <option value="hoodie">Hoodie</option>
            <option value="sticker">Sticker</option>
          </select>
        </div>

        <div className="flex flex-col mb-4">
          <label htmlFor="size" className="leading-7 text-sm text-gray-600">
            Choose Size:
          </label>
          <select
            name="size"
            id="size"
            className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-2.5 px-3 leading-8 transition-colors duration-200 ease-in-out placeholder:text-base"
            onChange={(e) => {
              handleChange(e, "size");
            }}
          >
            <option value=""></option>
            <option value="S">Small</option>
            <option value="M">Medium</option>
            <option value="L">Large</option>
            <option value="XL">Extre-Large</option>
          </select>
        </div>

        <div className="flex flex-col mb-4">
          <label htmlFor="color" className="leading-7 text-sm text-gray-600">
            Choose Color:
          </label>
          <select
            name="color"
            id="color"
            className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-2.5 px-3 leading-8 transition-colors duration-200 ease-in-out placeholder:text-base"
            onChange={(e) => {
              handleChange(e, "color");
            }}
          >
            <option value=""></option>
            <option value="red">Red</option>
            <option value="blue">Blue</option>
            <option value="black">Black</option>
            <option value="yellow">Yellow</option>
            <option value="gray">Gray</option>
            <option value="white">White</option>
          </select>
        </div>

        <Input
          label="Price"
          type="number"
          id="price"
          placeholder="Enter Price"
          handleChange={(e) => {
            handleChange(e, "price");
          }}
        />
        <Input
          label="Available"
          type="number"
          id="quanity"
          placeholder="Enter product name"
          handleChange={(e) => {
            handleChange(e, "availableQty");
          }}
        />
        <div className="flex justify-end">
          <button
            className="inline-block w-max mt-5 px-6 py-2.5 text-pink-500 font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-pink-500 hover:shadow-lg hover:text-white focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out mb-3 border border-pink-500"
            type="button"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
            onClick={AddProduct}
            // style="background: linear-gradient(to right,#ee7724,#d8363a,#dd3675,#b44593);"
          >
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
