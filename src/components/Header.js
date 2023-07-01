import React from "react";
import { Input } from "@material-tailwind/react";
import {
  Calendar2,
  Notification,
  MessageQuestion,
  ArrowDown2,
} from "iconsax-react";
const Header = () => {
  return (
    <div className="flex items-center justify-between w-[79%] m-4">
      <form class="flex items-center w-[30%] p-6">
        <label htmlFor="simple-search" className="sr-only">
          Search
        </label>
        <div class="relative w-full">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            id="simple-search"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search"
            required
          />
        </div>
      </form>

      <div className="flex justify-between items-center  w-[30%]">
        <div className="flex gap-4">
          <Calendar2 color="#787486" />
          <MessageQuestion color="#787486" />
          <Notification color="#787486" />
        </div>
        <div className="flex">
          <div>
            <p>Anima Agrawal</p>
            <p>U.P, India</p>
          </div>
          <span></span>
          <ArrowDown2 size="32" color="#787486" />
        </div>
      </div>
    </div>
  );
};

export default Header;
