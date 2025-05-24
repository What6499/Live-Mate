import React, { use } from "react";
import { Link, NavLink } from "react-router";
import ThemeSwitcher from "../../util/ThemeSwitcher";
import { AuthContext } from "../../Context/AuthContext";

const NavBar = () => {
  const { user, logOut } = use(AuthContext);
  const handleSignOut = () => {
    logOut();
  };
  const links = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "underline  font-semibold text-md " : ""
          }
          to={"/"}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "underline  font-semibold text-md " : ""
          }
          to={"/add-to-find-roommate"}
        >
          Add to Find Roommate
        </NavLink>
      </li>

      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "underline  font-semibold text-md " : ""
          }
          to={"/browse-listings"}
        >
          Browse Listings
        </NavLink>
      </li>

      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "underline  font-semibold text-md " : ""
          }
          to={"/my-listings"}
        >
          My Listings
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar px-4  shadow-sm max-w-full  ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
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
            tabIndex={0}
            className="menu menu-sm l dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li className="flex flex-col  border-b pb-3 mb-3">
              <img src="/Logo1.png" alt="LiveMate" className="w-16 h-auto" />
              <span className="text-xl text-green-300 font-semibold ">
                LiveMate
              </span>
            </li>
            {links}
          </ul>
        </div>
        <div className="flex  items-center  space-x-2">
          <img
            className="  h-8 sm:h-12 lg:h-14"
            src={"/Logo1.png"}
            alt="LiveMate"
          />
          <span className="text-4xl xl:text-5xl hidden lg:block text-green-300 font-bold  ">
            LiveMate
          </span>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <ThemeSwitcher></ThemeSwitcher>

        {user ? (
          <div className="flex items-center gap-2 ">
            <div className="relative group flex items-center">
              <img
                className="size-12 rounded-full "
                src={user.photoURL}
                alt=""
              />
              <p className="absolute opacity-0 group-hover:opacity-100 font-bold transition-opacity duration-200 right-16 whitespace-nowrap">
                {user.displayName}
              </p>
            </div>
            <button
              onClick={handleSignOut}
              className="btn btn-outline border-black hover:bg-black hover:text-white"
            >
              Sign Out
            </button>
          </div>
        ) : (
          <Link to={"/login"}>
            <button className="btn bg-green-300 hover:bg-green-300/90 text-[#fefaf6]   md:btn-md lg:btn-lg ">
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;
