import React from "react";
import Navbar from "../../Components/Home/Navbar";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { RiHeart2Line } from "react-icons/ri";
import ZaraLogo from "../../Assests/Images/Zara_Logo 1.svg";
import D_G_Logo from "../../Assests/Images/Dolce_&_Gabbana 1.svg";
import H_M_Logo from "../../Assests/Images/H&M-Logo 1.svg";
import Chanel_Logo from "../../Assests/Images/Chanel_logo_interlocking_cs 1.svg";
import Prada_Logo from "../../Assests/Images/Prada-Logo 1.svg";
import Biba_Logo from "../../Assests/Images/logo 1.svg";
import Footer from "../../Components/Home/Footer";

const Home = () => {
  const NewArrivalsArr = [
    {
      image:
        "https://images.pexels.com/photos/904350/pexels-photo-904350.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&dpr=1",
      productBrand: "Grande",
      productName: "Blossom Pouch",
      price: "39.49",
    },
    {
      image:
        "https://images.pexels.com/photos/4830925/pexels-photo-4830925.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&dpr=1",
      productName: "Leather Voach Bag",
      productBrand: "Coach",
      price: "54.69",
    },
    {
      image:
        "https://images.pexels.com/photos/1214212/pexels-photo-1214212.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      productBrand: "Remus",
      productName: "Brown Strap Bag",
      price: "57.00",
    },
    {
      image:
        "https://images.pexels.com/photos/3908800/pexels-photo-3908800.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      productBrand: "Boujee",
      productName: "Brown Bag",
      price: "56.49",
    },
  ];
  return (
    <div>
      <Navbar />
      <div className="flex justify-between items-basiline px-4 mb-6">
        <h2 className="text-[35px] font-semibold">New Arrivals</h2>
        <div className="flex items-center text-[#1B4B66] font-semibold gap-2">
          View All
          <MdOutlineArrowForwardIos color="#1B4B66" size={"20px"} />
        </div>
      </div>
      {/* New Arrivals Section */}
      <div className="flex justify-between px-4 mb-8">
        {NewArrivalsArr.map((item, index) => {
          return (
            <div key={index}>
              <div className="h-[400px] w-[400px] overflow-hidden rounded-2xl">
                <img
                  src={item.image}
                  alt={item.productName}
                  className=" object-cover"
                />
              </div>
              <div className="flex justify-between px-5 pt-2">
                <div>
                  <h3 className="font-medium text-[19px]">
                    {item.productBrand}
                  </h3>
                  <p className="text-zinc-500">{item.productName}</p>
                  <h3 className="font-medium">${item.price}</h3>
                </div>
                <RiHeart2Line size={"25px"} />
              </div>
            </div>
          );
        })}
      </div>
      {/* New Arrivals Section End */}
      {/* Handpicked Collecton section */}
      <div className="bg-[#1B4B66] pt-10 pb-14">
        <div className="text-white">
          <h2 className="font-semibold text-[30px] mb-6 mx-4">
            Handpicked Collections
          </h2>
        </div>
        <div className="flex justify-between px-4">
          <div className="bg-[url(https://images.pexels.com/photos/11515541/pexels-photo-11515541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)] h-[400px] w-[400px] bg-center text-[25px] font-semibold flex items-end rounded-2xl">
            <h3 className="pl-6 pb-4">Personal Care</h3>
          </div>
          <div className="bg-[url(https://images.pexels.com/photos/3661622/pexels-photo-3661622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)] h-[400px] w-[400px] bg-center text-[25px] font-semibold flex items-end rounded-2xl">
            <h3 className="pl-6 pb-4">Handbags</h3>
          </div>
          <div className="bg-[url(https://images.pexels.com/photos/4431871/pexels-photo-4431871.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)] h-[400px] w-[400px] bg-center text-[25px] font-semibold flex items-end rounded-2xl">
            <h3 className="pl-6 pb-4">Wrist Watches</h3>
          </div>
          <div className="bg-[url(https://images.pexels.com/photos/10260111/pexels-photo-10260111.jpeg?auto=compress&cs=tinysrgb&w=600)] h-[400px] w-[400px] bg-center text-[25px] font-semibold flex items-end rounded-2xl">
            <h3 className="pl-6 pb-4">Sun Glasses</h3>
          </div>
        </div>
      </div>
      {/* Handpicked Collecton section End*/}
      <div className="my-16">
        <h1 className="text-[30px] mb-4 font-semibold ml-4">Shop by Brands</h1>
        <div className="flex items-center justify-between px-4">
          <div className="h-[170px] w-[190px] flex items-center justify-center bg-neutral-200 rounded-lg">
            <img src={ZaraLogo} alt="logo" />
          </div>
          <div className="h-[170px] w-[190px] flex items-center justify-center bg-neutral-200 rounded-lg">
            <img src={D_G_Logo} alt="logo" />
          </div>
          <div className="h-[170px] w-[190px] flex items-center justify-center bg-neutral-200 rounded-lg">
            <img src={H_M_Logo} alt="logo" />
          </div>
          <div className="h-[170px] w-[190px] flex items-center justify-center bg-neutral-200 rounded-lg">
            <img src={Chanel_Logo} alt="logo" />
          </div>
          <div className="h-[170px] w-[190px] flex items-center justify-center bg-neutral-200 rounded-lg">
            <img src={Prada_Logo} alt="logo" />
          </div>
          <div className="h-[170px] w-[190px] flex items-center justify-center bg-neutral-200 rounded-lg">
            <img src={Biba_Logo} alt="logo" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
