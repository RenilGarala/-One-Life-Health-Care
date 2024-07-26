import React, { useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

const Header = () => {
  const [btnName, setBtnName] = useState("LOG IN");

  return (
    <div data-aos="fade-down" className="fixed top-0 left-0 w-full z-10 flex justify-between px-32 items-center h-20 bg-zinc-50 text-black border-b-2 border-gray-100">
      <div className="w-40 ">
        <img src="https://cdn.onelifehealth.care/assets/one-life-logo.png" />
      </div>
      <div className="flex gap-10 text-lg">
        <div className="hover:text-green-700">Home</div>
        <div className="hover:text-green-700">About us</div>
        <div className="hover:text-green-700">Blogs</div>
        <div className="hover:text-green-700">Contact us</div>
      </div>
      <div className="hover:text-green-700">
        <button
          className={`px-8 py-3 w-36 font-bold text-sm tracking-wider rounded-full transition duration-300 ${
            btnName === "LOG IN"
              ? "bg-green-700 text-white hover:bg-green-800"
              : "bg-white text-green-700 border border-green-700 hover:bg-zinc-100"
          }`}
          onClick={() => {
            setBtnName(btnName === "LOG IN" ? "LOG OUT" : "LOG IN");
          }}
        >
          {btnName}
        </button>
      </div>
    </div>
  );
};

export default Header;
