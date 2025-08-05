import React, { useEffect } from "react";

const SignUp = () => {
  return (
    <div className="mt-15 w-screen flex items-center justify-center">
      <form className="w-96 bg-gray-100 shadow-lg rounded-xl p-8">
        <h2 className="text-center text-2xl font-bold mb-6">Sign up</h2>

        <div className="mb-4">
          <h1 className="block text-gray-700 font-semibold mb-1"> Email </h1>
          <input
            id="email"
            type="email"
            placeholder="Enter email id"
            className="w-full h-10 px-3 border-2 border-gray-300 rounded focus:outline-none focus:border-green-400"
          />
        </div>

        <div className="mb-4">
          <h1 className="block text-gray-700 font-semibold mb-1">
            {" "}
            Mobile No.{" "}
          </h1>
          <input
            id="number"
            type="email"
            placeholder="Enter Mobile number"
            className="w-full h-10 px-3 border-2 border-gray-300 rounded focus:outline-none focus:border-green-400"
          />
        </div>

        <div className="mb-6">
          <h1 className="block text-gray-700 font-semibold mb-1"> Password </h1>
          <input
            id="password"
            type="password"
            placeholder="Enter password"
            className="w-full h-10 px-3 border-2 border-gray-300 rounded focus:outline-none focus:border-green-400"
          />
        </div>

        <div className="mb-6">
          <h1
            htmlFor="password"
            className="block text-gray-700 font-semibold mb-1"
          >
            Conform your Password{" "}
          </h1>
          <input
            id="password"
            type="password"
            placeholder="Enter password"
            className="w-full h-10 px-3 border-2 border-gray-300 rounded focus:outline-none focus:border-green-400"
          />
        </div>

        <button className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded font-semibold transition duration-200">
          Sign up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
