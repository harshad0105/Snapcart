import React from "react";
import logo from "../src/assets/logo.png";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import logoAnimation from '../src/assets/shopping_cart.json';
import { Player } from "@lottiefiles/react-lottie-player";

const Header = () => {
  const cart =
    "https://png.pngtree.com/png-clipart/20230405/original/pngtree-cart-vector-icon-design-illustration-png-image_9027679.png";
  return (
    <>
      <div className="sticky top-0 z-1 left-0 flex items-center justify-around w-full h-16 bg-[#1E1E1E]">
        <div className="flex items-center">
        <Player
          autoplay
          loop
          src={logoAnimation}
          className="h-16 w-16" // adjust size as needed
        />

        <h1 className="text-white text-xl font-semibold">SnapCart</h1>
        </div>
        <input
          type="search"
          className="mt-2 h-11 w-100 px-3 py-1 border text-[#FFFFFF] border-gray-600 rounded-md focus:outline-none focus:ring-1 focus:ring-green-300"
          placeholder="Search..."
        />

        <Link to="/Login">
          <button className="text-xl text-white font-semibold">Login</button>
        </Link>

        <div className="flex h-12 justify-between item-center border-2 gap-1 rounded-xl p-2 bg-gray-200">
          <img src={cart} alt="" />
          <h1 className="text-xl font-semibold">My cart</h1>
        </div>
      </div>
      <NavBar />
    </>
  );
};

export default Header;
