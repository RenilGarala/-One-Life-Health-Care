import React ,{ useState } from "react";
import "animate.css";

const Header = () => {
    const [btnName, setBtnName] = useState("LOG IN");
  return (
    <div>
      <div className="flex justify-between px-32 animate__animated animate__slideInDown items-center h-20 bg-zinc-50 text-black border-b-2 border-gray-100">
        <div className="w-40 ">
          <img src="https://cdn.onelifehealth.care/assets/one-life-logo.png"></img>
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
              btnName === "LOG IN"
                ? setBtnName("LOG OUT")
                : setBtnName("LOG IN");
            }}
          >
            {btnName}
          </button>
        </div>
      </div>
      <div></div>
    </div>
  );
};
export default Header;
