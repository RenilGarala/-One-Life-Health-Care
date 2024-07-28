import React, { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
import { FaList } from "react-icons/fa";

const Header = () => {
  const [btnName, setBtnName] = useState("LOG IN");
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <div
      data-aos="fade-down"
      className="fixed top-0 left-0 w-full z-10 flex justify-between px-32 lg:px-20 md:px-16 sm:px-7 items-center h-20 bg-zinc-50 text-black border-b-2 border-gray-100"
    >
      <div className="max-w-40 lg:w-2/6 sm:w-32">
        <img src="https://cdn.onelifehealth.care/assets/one-life-logo.png" />
      </div>
      <div className="lg:hidden flex gap-10 text-lg">
        <div className="hover:text-green-700">Home</div>
        <div className="hover:text-green-700">About us</div>
        <div className="hover:text-green-700">Blogs</div>
        <div className="hover:text-green-700">Contact us</div>
      </div>
      <div className="hidden lg:block pt-2">
        <button
          className="text-lg hover:text-green-700 "
          onClick={() => setIsPopupOpen(!isPopupOpen)}
        >
          {/* {FaList} */}
          <img
            width="20"
            height="20"
            src="https://img.icons8.com/ios/50/menu--v1.png"
            alt="menu--v1"
          />
        </button>
      </div>
      <div className="lg:hidden">
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

      {isPopupOpen && (
        <div className="absolute top-20 right-8 w-1/4 min-w-48 bg-white border border-gray-100 rounded-lg shadow-lg p-5 lg:flex lg:flex-col gap-4 hidden">
          <div className="hover:text-green-700">Home</div>
          <div className="hover:text-green-700">About us</div>
          <div className="hover:text-green-700">Blogs</div>
          <div className="hover:text-green-700">Contact us</div>
          <div className="flex justify-center">
            <button
              className={`mt-4 px-8 w-36 py-3 font-bold text-sm tracking-wider rounded-full transition duration-300 ${
                btnName === "LOG IN"
                  ? "bg-green-700 text-white hover:bg-green-800"
                  : "bg-white text-green-700 border border-green-700 hover:bg-zinc-100"
              }`}
              onClick={() => {
                setBtnName(btnName === "LOG IN" ? "LOG OUT" : "LOG IN");
                setIsPopupOpen(false);
              }}
            >
              {btnName}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
