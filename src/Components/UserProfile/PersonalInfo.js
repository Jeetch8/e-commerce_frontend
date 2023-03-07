import React from "react";
import { RiDeleteBinLine } from "react-icons/ri";

const PersonalInfo = () => {
  return (
    <div className="inline-block">
      <div>
        <h3>Peronal Information</h3>
      </div>
      {/* Profile pic */}
      <div>
        <img
          src="https://imgv3.fotor.com/images/blog-cover-image/10-profile-picture-ideas-to-make-you-stand-out.jpg"
          alt=""
          className="w-[90px] h-[90px] rounded-full object-cover"
        />
        <button>Upload</button>
        <button className="flex gap-3 text-red-500 font-semibold item-center">
          <RiDeleteBinLine /> Delete
        </button>
      </div>
      <div className="flex">
        <div>
          <h2>First Name</h2>
          <input type="text" placeholder="John" />
        </div>
        <div>
          <h2>Last Name</h2>
          <input type="text" placeholder="Doe" />
        </div>
      </div>
      <div>
        <h2>Email</h2>
        <input type="text" placeholder="JohDoe@gmail.com" />
      </div>
      <div>
        <h3>Mobile Number</h3>
        <div>
          <input type="text" />
          <input type="text" />
        </div>
      </div>
      <div>
        <h3>Date of birth</h3>
      </div>
      <div className="border-b-2">
        <h3>Change Password</h3>
      </div>
      <div>
        <h3>Curent Password</h3>
        <input type="password" />
      </div>
      <div>
        <h3>New Password</h3>
        <input type="password" />
      </div>
      <div>
        <h3>Confirm Password</h3>
        <input type="password" />
      </div>
    </div>
  );
};

export default PersonalInfo;
