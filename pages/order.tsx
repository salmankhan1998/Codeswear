import React from "react";

const Order = () => {
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
            <h2 className="text-sm title-font text-gray-500 uppercase tracking-widest">
              codeswear.com
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">
              Order Id: #93593902
            </h1>
            <table className="table-auto w-full text-left whitespace-no-wrap mb-5">
              <thead>
                <tr>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                    Items
                  </th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                    Quantity
                  </th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                    Cost
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4  border-t-2 border-gray-200 py-3">
                    Wear the code
                  </td>
                  <td className="px-4 py-3 text-center border-t-2 border-gray-200 ">1</td>
                  <td className="px-4 py-3 border-t-2 border-gray-200 ">499</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 border-t-2 border-gray-200 ">
                    Wear the code
                  </td>
                  <td className="px-4 py-3 text-center border-t-2 border-gray-200 ">1</td>
                  <td className="px-4 py-3 border-t-2 border-gray-200 ">499</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 border-t-2 border-gray-200 ">
                    Wear the code
                  </td>
                  <td className="px-4 py-3 text-center border-t-2 border-gray-200 ">1</td>
                  <td className="px-4 py-3 border-t-2 border-gray-200 ">499</td>
                </tr>
              </tbody>
            </table>
            <div className="flex">
              <span className="title-font font-medium text-2xl text-gray-900">
                SubTotal: $58.00
              </span>
              <button className="flex ml-auto text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded">
                Track Order
              </button>
            </div>
          </div>
          <img
            alt="ecommerce"
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            src="https://dummyimage.com/400x400"
          />
        </div>
      </div>
    </section>
  );
};

export default Order;
