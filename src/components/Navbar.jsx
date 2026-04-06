import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const menuCommonClasses = ({ isActive }) =>
    `text-gray-400 px-5 hover:bg-white ${isActive ? "border px-1 rounded-md text-green-500 border-green-500" : null}`;
  const links = (
    <>
      <li>
        <NavLink className={menuCommonClasses} to={"/"}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className={menuCommonClasses} to={"/listedBooks"}>
          Listed Books
        </NavLink>
      </li>
      <li>
        <NavLink className={menuCommonClasses} to={"/page-to-read"}>
          Page to Read
        </NavLink>
      </li>
    </>
  );
  return (
    <header className="bg-base-100 shadow-sm ">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>

            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content  z-1 mt-3 w-52 p-2 "
            >
              {links}
            </ul>
          </div>
          <h2 className="font-semibold cursor-pointer text-xl">Book Vibe</h2>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end gap-3">
          <button className="btn btn-success  text-white      ">Sign In</button>
          <button className="btn btn-info text-white">Sign Up</button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
