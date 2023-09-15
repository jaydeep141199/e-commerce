import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Header = () => {
  const cart=useSelector((state)=>state.cart.cart)
  return (
    <>
      <nav className="bg-gray-800 sticky top-0 z-50 ">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16  ">
            <div className="flex items-center">
              <a className="text-white text-lg font-semibold" href="/">
                E-Commerce
              </a>
            </div>
            <div className="flex items-center">
              <a className="text-gray-300 hover:text-white px-3 py-2" href="/">
                Home
              </a>
              <a className="text-gray-300 hover:text-white px-3 py-2" href="/">
                About
              </a>
              <a className="text-gray-300 hover:text-white px-3 py-2" href="/">
                Services
              </a>
              <a className="text-gray-300 hover:text-white px-3 py-2" href="/">
                Contact
              </a>
              <div className="relative">
                <input
                  className="rounded-md bg-gray-700 text-gray-200 px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                  type="text"
                  placeholder="Search"
                />
                <button className="absolute right-0 top-0 h-full px-4 text-white bg-blue-500 hover:bg-blue-600 rounded-r-md">
                  Search
                </button>
              </div>
              <NavLink to='/cart'>
              <button
                type="button"
                className="btn btn-primary position-relative ml-5"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-cart4"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                </svg>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {cart.length}
                </span>
              </button></NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Header;
