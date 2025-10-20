import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import { NavLink } from "react-router";

const FindUs = () => {
  return (
    <div>
      <h1 className="font-bold text-xl">Find Us On</h1>
      <div>
        <div className="join join-vertical w-full mt-5 ">
          <button className="btn join-item bg-base-100 justify-start text-gray-600">
            <NavLink
              className="flex items-center gap-1"
              to="https://www.facebook.com/"
            >
              <div className="w-8 h-8 bg-base-300 text-blue-600 rounded-full flex items-center justify-center">
                <FaFacebook size={20} />
              </div>
              Facebook
            </NavLink>
          </button>
          <button className="btn join-item bg-base-100 justify-start text-gray-600">
            <NavLink
              className="flex items-center gap-1"
              to="https://www.x.com/"
            >
              <div className="w-8 h-8 bg-base-300 text-gray-600 rounded-full flex items-center justify-center">
                <FaX size={20} />
              </div>{" "}
              Twitter
            </NavLink>
          </button>
          <button className="btn join-item bg-base-100 justify-start text-gray-600">
            <NavLink
              className="flex items-center gap-1"
              to="https://www.instagram.com/"
            >
              <div className="w-8 h-8 bg-base-300 text-pink-600 rounded-full flex items-center justify-center">
                <FaInstagram size={20} />
              </div>{" "}
              Instagram
            </NavLink>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FindUs;
