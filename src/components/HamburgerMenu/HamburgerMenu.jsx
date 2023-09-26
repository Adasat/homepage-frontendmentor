import React, { useState } from 'react'

function HamburgerMenu() {
   const [menuVisible, setMenuVisible] = useState(false);

   const toggleMenu = () => {
     setMenuVisible(!menuVisible);
   };
  return (
    <>
      <div>
        <button
          className="text-white focus:ring-4  font-medium rounded-lg text-sm px-5 py-2.5 mr-2"
          type="button"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="black"
            className="w-6 h-6 hover:stroke-SoftRed "
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>

      {menuVisible && (
        <div
          id="drawer-navigation"
          className="fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto transition-transform translate-x-0 bg-white w-3/4 text-black"
          tabIndex="-1"
          aria-labelledby="drawer-navigation-label"
        >
          <button
            type="button"
            data-drawer-hide="drawer-navigation"
            aria-controls="drawer-navigation"
            className="text-gray-400 stroke-black hover:bg-gray-200 hover:stroke-SoftRed rounded-lg text-sm w-8 h-8 absolute top-2.5 right-2.5 inline-flex items-center justify-center "
            onClick={toggleMenu}
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="black"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
          </button>
          <div className="flex flex-col mt-28 font-fuente text-body font-700">
            <p className="ml-3 mb-5">Home</p>
            <p className="ml-3 mb-5">New</p>
            <p className="ml-3 mb-5">Popular</p>
            <p className="ml-3 mb-5">Trending</p>
            <p className="ml-3">Categories</p>
          </div>
        </div>
      )}
    </>
  );
}

export default HamburgerMenu