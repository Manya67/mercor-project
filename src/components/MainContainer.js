import React from "react";
import { Select, Option, Button } from "@material-tailwind/react";
import MainHeading from "./MainHeading";
import {
  AddSquare,
  FilterSearch,
  ArrowDown2,
  Calendar1,
  Profile2User,
  Menu,
  Pause,
} from "iconsax-react";
import Cards from "./Cards";
import user2 from "../images/user2.png";
import user3 from "../images/user3.png";
import user4 from "../images/user4.png";
import user5 from "../images/user5.png";

const MainContainer = () => {
  return (
    <div className="flex justify-center items-center flex-col w-[75%] mt-10 mx-auto gap-3">
      <div className="w-full flex items-center justify-between">
        <MainHeading />
        {/* <Invite /> */}
        <div className="flex items-center justify-between md:justify-center md:space-x-5 ">
          <button className=" flex items-center justify-center space-x-2 ">
            <AddSquare size={20} color="#5030E5" variant="Bulk" />
            <span className=" font-medium text-[#5030E5] ">Invite</span>
          </button>
          <div className="flex -space-x-2 overflow-hidden ">
            <img
              className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
              src={user5}
              alt="{user.handle}"
            />
            <img
              className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
              src={user4}
              alt="{user.handle}"
            />
            <img
              className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
              src={user3}
              alt="{user.handle}"
            />
            <img
              className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
              src={user2}
              alt="{user.handle}"
            />
            <div className=" flex h-8 w-8 items-center justify-center rounded-full bg-red-200 ring-2 ring-white md:h-10 md:w-10 ">
              <span className=" font-medium text-[#D25B68] ">+2</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between  w-full font-medium my-3">
        <div className="flex items-center justify-center gap-5">
          <button className="flex items-center justify-center space-x-2 rounded-md border  px-3 py-1 md:py-2 ">
            <FilterSearch size={18} />
            <span>Filter</span>
            <ArrowDown2 size={18} />
          </button>

          <button className=" flex items-center justify-center space-x-2 rounded-md border px-3 py-1 md:py-2 ">
            <Calendar1 size={18} />
            <span>Today</span>
            <ArrowDown2 size={18} />
          </button>
        </div>

        <div className="flex  items-center justify-center gap-5">
          <button className="flex items-center justify-center space-x-2 rounded-md border px-3 py-2 ">
            <Profile2User size={18} />
            <span>Share</span>
          </button>
          <hr className=" h-7 border-[1px]  " />
          <div className=" flex h-10 w-10 justify-center rounded-md bg-[#5030E5] ">
            <button className="">
              <Pause
                variant="Bold"
                size={20}
                color="white"
                className=" rotate-90"
              />
            </button>
          </div>
          <button className="">
            <Menu size={20} color="#787486" />
          </button>
        </div>
      </div>
      <Cards />
    </div>
  );
};

export default MainContainer;
