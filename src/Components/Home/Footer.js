import React from "react";
import { FiInstagram } from "react-icons/fi";
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { SiTwitter } from "react-icons/si";
import { CiLocationOn } from "react-icons/ci";

const Footer = () => {
  return (
    <div className="bg-[#1B4B66] pt-10 pb-14 text-[#B6B6B6]">
      <div className=" text-white flex justify-between leading-8 max-w-[90vw] mx-auto">
        <div className="flex max-w-xl w-full justify-between">
          <ul>
            <li className="font-semibold text-[18px]">Shop by Category</li>
            <li>Skincare</li>
            <li>Personal Care</li>
            <li>Handbags</li>
            <li>Apperels</li>
            <li>Watches</li>
            <li>Eye Wear</li>
            <li>Jewellerys</li>
          </ul>
          <ul>
            <li className="font-semibold text-[18px]">About</li>
            <li>Contect Us</li>
            <li>About Us</li>
            <li>Careers</li>
            <li>Press</li>
          </ul>
          <ul>
            <li className="font-semibold text-[18px]">Policy</li>
            <li>Return Policy</li>
            <li>Terms of Use</li>
            <li>Sitemap</li>
            <li>Security</li>
            <li>Privacy</li>
            <li>EPR Compliance</li>
          </ul>
        </div>
        <ul className=" text-right">
          <li className="flex justify-end gap-4">
            <div className="h-[35px] w-[35px] bg-[#639599] flex items-center justify-center rounded-full">
              <FaFacebookF className="bg-transparent" />
            </div>
            <div className="h-[35px] w-[35px] bg-[#639599] flex items-center justify-center rounded-full">
              <FiInstagram />
            </div>
            <div className="h-[35px] w-[35px] bg-[#639599] flex items-center justify-center rounded-full">
              <SiTwitter />
            </div>
            <div className="h-[35px] w-[35px] bg-[#639599] flex items-center justify-center rounded-full">
              <FaYoutube />
            </div>
          </li>
          <li className="flex gap-2 justify-end items-center font-semibold mt-6">
            <CiLocationOn
              color={"#ffffff"}
              size="22px"
              className="fill-white text-white"
            />{" "}
            Unites States
          </li>
          <li>@2021 | Cora Levience All Rights Reserved</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
