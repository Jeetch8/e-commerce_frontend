import React from "react";
import { RxCross2 } from "react-icons/rx";
import { BsArrowLeft } from "react-icons/bs";

const FloatingCart = ({ setCartOpen }) => {
  const allProducts = [
    {
      image: "https://placeimg.com/640/480/any?r=0.591926261873231%22",
      title: "Coach",
      quantity: 1,
      price: 59,
    },
    {
      image: "https://placeimg.com/640/480/any?r=0.591926261873231%22",
      title: "Coach",
      quantity: 1,
      price: 59,
    },
    {
      image: "https://placeimg.com/640/480/any?r=0.591926261873231%22",
      title: "Coach",
      quantity: 1,
      price: 59,
    },
  ];
  return (
    <div className="h-full bg-[rgba(0,0,0,0.2)] w-full absolute top-0 left-0 flex justify-end items-start">
      <div className="bg-white w-[21vw] p-3 mt-14 mr-6">
        <div
          className="flex gap-4 items-center text-[#1B4B66] pl-2 pt-2 pb-2 cursor-pointer select-none"
          onClick={() => setCartOpen(false)}
        >
          <BsArrowLeft color="#1B4B66" fontWeight={"900"} />
          Back
        </div>
        <div className="h-[220px] overflow-y-scroll">
          {allProducts.map((item) => {
            return (
              <div className="flex justify-between py-4 border-b-2">
                <div className="flex">
                  <img
                    src={item.image}
                    alt=""
                    width={"100px"}
                    className="rounded-md"
                  />
                  <div>
                    <h3>{item.title}</h3>
                    <h2>{item.quantity}</h2>
                  </div>
                </div>
                <div>
                  <RxCross2 />
                  <h3>${item.price}</h3>
                </div>
              </div>
            );
          })}
        </div>
        <div className="text-[15px] font-light flex justify-between pt-4 px-1 pb-1">
          <h3 className="">Subtotal:</h3>
          <h4>$109.00</h4>
        </div>
        <div className="text-[15px] flex justify-between px-1 font-light pb-1">
          <h3>Tax:</h3>
          <h4>$2.00</h4>
        </div>
        <div className="flex justify-between px-1 mb-5">
          <h3>Total:</h3>
          <h4>$111.38</h4>
        </div>
        <button className="bg-[#1B4B66] text-white w-full py-2 text-[15px] rounded-md">
          Place Order
        </button>
        <div className="text-center pt-6 text-[15px]">
          <a href="" className="underline text-[#1B4B66]">
            Continue Shopping
          </a>
        </div>
      </div>
    </div>
  );
};

export default FloatingCart;
