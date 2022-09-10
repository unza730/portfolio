import React, { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
    const handleToggle = () => {
        console.log("ele")
        setToggle(!toggle);
}
  return (
    <>
      <nav className=" shadow-lg  ">
        <div className="max-w-6xl mx-auto px-4  ">
          <div className=" ">
            <div className="flex justify-between space-x-7">
              <div>
                {/* Website Logo --> */}
                <a href="#" className="flex items-center py-4 px-2">
                  {/* <img src="logo.png" alt="Logo" className="h-8 w-8 mr-2" /> */}
                  <span className="font-semibold text-white text-4xl">
                    Unza
                  </span>
                </a>
              </div>
              {/* Primary Navbar items --> */}
              <div className="hidden md:flex items-center space-x-10">
                <a
                  href=""
                  className="py-4 px-2 text-white border-b-4 border-yellow-500 font-semibold "
                >
                  Home
                </a>
                <a
                  href=""
                  className="py-4 px-2 text-white font-semibold hover:text-gray-900 transition duration-300"
                >
                  Services
                </a>
                <a
                  href=""
                  className="py-4 px-2 text-white font-semibold hover:text-gray-900 transition duration-300"
                >
                  Experience
                </a>
                <a
                  href=""
                  className="py-4 px-2 text-white font-semibold hover:text-gray-900 transition duration-300"
                >
                  Portfolio
                </a>
                {/* <a
                  href=""
                  className="py-4 px-2 text-gray-500 font-semibold hover:text-gray-900 transition duration-300"
                >
                  Contact Us
                </a> */}
                {/* <a
                  href=""
                  className="py-4 px-2 text-gray-500 font-semibold hover:text-gray-900 transition duration-300"
                >
                  Contact Us
                </a> */}
              </div>

              {/* Secondary Navbar items --> */}
              <div className="hidden md:flex items-center space-x-3 ">
                {/* <a
                href=""
                className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-green-500 hover:text-white transition duration-300"
              >
                Log In
              </a> */}
                <a
                  href=""
                  className="py-2 px-4 font-medium text-white bg-yellow-500 shadow-3xl    rounded-[34px]  hover:bg-yellow-400 transition duration-300"
                >
                  Contact
                </a>
              </div>
            </div>
            {/* Mobile menu button --> */}
            <div className="md:hidden flex items-center">
              <button
                className="outline-none mobile-menu-button"
                onClick={handleToggle}
              >
                <svg
                  className=" w-6 h-6 text-gray-500 hover:text-gray-900 "
                  x-show="!showMenu"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {toggle ? (
          <>
            {/* mobile menu */}
            <div className="mobile-menu">
              <ul className="">
                <li className="active">
                  <a
                    href="index.html"
                    className="block text-sm px-2 py-4 text-white bg-green-500 font-semibold"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="block text-sm px-2 py-4 hover:bg-yellow-800 transition duration-300"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </>
        ) : (
          ""
        )}
      </nav>
    </>
  );
};

export default Navbar;
