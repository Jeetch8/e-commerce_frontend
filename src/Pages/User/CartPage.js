import React from "react";
import Navbar from "../../Components/Home/Navbar";
import Footer from "../../Components/Home/Footer";

const CartPage = () => {
  return (
    <div>
      <Navbar />
      <div>
        <h1 className="text-[40px] text-[#1B4B66] font-semibold">My Cart</h1>
        <div className="flex justify-between">
          <table className="w-[50vw] ">
            <thead className="border-b-[1px]">
              <tr className=" text-zinc-400 font-medium">
                <th className="text-left pl-2 py-2">Product Name</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={1} className="flex py-4 pl-2">
                  <img
                    src="https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80"
                    alt="Product"
                    width={"120px"}
                    className="rounded-lg"
                  />
                  <div>
                    <h1>Coach</h1>
                    <h2>Leather Coach bag</h2>
                    <h4>Qty-1</h4>
                  </div>
                </td>
                <td className="text-center">$54.69</td>
                <td className="text-center">1</td>
                <td className="text-center">$54.69</td>
              </tr>
              <tr>
                <td colSpan={1} className="flex py-4 pl-2">
                  <img
                    src="https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80"
                    alt="Product"
                    width={"120px"}
                    className="rounded-lg"
                  />
                  <div>
                    <h1>Coach</h1>
                    <h2>Leather Coach bag</h2>
                    <h4>Qty-1</h4>
                  </div>
                </td>
                <td className="text-center">$54.69</td>
                <td className="text-center">1</td>
                <td className="text-center">$54.69</td>
              </tr>
            </tbody>
          </table>
          <div className="">
            <table className="leading-7">
              <thead>
                <tr className="border-b-2">
                  <th colSpan={1} className="text-[18px] pb-1">
                    Order Summary
                  </th>
                  <th colSpan={1}></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-gray-500 font-semibold pt-4">
                    Sub Total
                  </td>
                  <td className="font-semibold w-[200px] text-right">
                    $119.69
                  </td>
                </tr>
                <tr>
                  <td className="text-gray-500 font-semibold">Discount</td>
                  <td className="font-semibold text-right">-$13.40</td>
                </tr>
                <tr>
                  <td className="text-gray-500 font-semibold">Delivery Fee</td>
                  <td className="font-semibold text-right">-$0.00</td>
                </tr>
                <tr className="font-semibold">
                  <td className="font-semibold">Grand Total</td>
                  <td className="text-right">$106.29</td>
                </tr>
              </tbody>
            </table>
            <div className="flex items-center gap-8">
              <button className="bg-[#1B4B66] text-white rounded-md px-10 py-2">
                Place Order
              </button>
              <button className="border-2 border-[#1B4B66] text-[#1B4B66] font-semibold px-4 py-1 rounded-md bg-transparent">
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CartPage;
