import React from "react";
import Navbar from "../../Components/Home/Navbar";
import Footer from "../../Components/Home/Footer";
import { MdArrowForwardIos, MdLogout } from "react-icons/md";
import PersonalInfo from "../../Components/UserProfile/PersonalInfo";

const UserProfile = () => {
  return (
    <div>
      <Navbar />
      <div>
        <div className="flex justify-between">
          <h1 className="text-[30px] font-semibold">Personal Information</h1>
          <button className="flex text-[#1B4B66] items-center gap-2 border-[#1B4B66] border-2 px-6 py-1 rounded-lg font-semibold">
            <MdLogout />
            Logout
          </button>
        </div>
        <div>
          {/* OPtions part */}
          <ul className="w-[280px] font-semibold inline-block align-top">
            <li className=" bg-zinc-300 items-center flex justify-between py-5 pr-1 border-l-black border-2">
              <h2>Personal Information</h2>
              <MdArrowForwardIos />
            </li>
            <li className=" bg-zinc-300 items-center flex justify-between py-5 pr-1">
              <h2>Refer and Earn</h2>
              <MdArrowForwardIos />
            </li>
            <li className=" bg-zinc-300 items-center flex justify-between py-5 pr-1">
              <h2>My Orders</h2>
              <MdArrowForwardIos />
            </li>
            <li className=" bg-zinc-300 items-center flex justify-between py-5 pr-1">
              <h2>My Wishlist</h2>
              <MdArrowForwardIos />
            </li>
            <li className=" bg-zinc-300 items-center flex justify-between py-5 pr-1">
              <h2>My Reviews</h2>
              <MdArrowForwardIos />
            </li>
            <li className=" bg-zinc-300 items-center flex justify-between py-5 pr-1">
              <h2>My Address Book</h2>
              <MdArrowForwardIos />
            </li>
          </ul>
          {/* Information part */}
          <PersonalInfo />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UserProfile;
