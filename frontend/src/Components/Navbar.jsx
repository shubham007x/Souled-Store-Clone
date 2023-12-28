import { Box, Flex, Image, Spacer } from "@chakra-ui/react";
import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex  bg-red-500 font-sans">
      {/* logo */}
      <div className="flex flex-1 mr-6 items-center justify-center sm:items-stretch">
        <Link to={"/"}>
          {" "}
          <button onClick={<Navigate to="/" />}>
            <img
              className="h-10 w-auto"
              src="https://www.thesouledstore.com/static/img/300x157-twitter.png"
            ></img>
          </button>
        </Link>
      </div>
      {/* logo end */}

      {/* sections */}
      <div className=" m3-5 bg-red-500  flex flex-1 items-center ml-1 sm:items-stretch">
        <div className={"bg-red-500 border border-black p-2  hover:bg-red-400"}>
          <p className="text-white font-bold">
            <Link to={"/men"}>MEN</Link>
          </p>
        </div>
        <div className=" border  border-y-black p-2 hover:bg-red-400">
          <p className="text-white font-bold">
            {" "}
            <Link to={"/women"}>WOMEN</Link>
          </p>
        </div>
        <div className="border border-black p-2 hover:bg-red-400">
          <p className="text-white font-bold">KIDS</p>
        </div>
      </div>
      {/* section end */}

      <div className="inline-flex gap-2 bg-red-500 flex flex-1 items-center justify-center sm:items-stretch">
        <div>
          <p className="text-white font-semibold hover:cursor-pointer">
            Track Order
          </p>
        </div>
        <div>
          <p className="text-white font-semibold hover:cursor-pointer">
            Contact US
          </p>
        </div>
        <div>
          <p className="text-white font-semibold hover:cursor-pointer">
            Download App
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
