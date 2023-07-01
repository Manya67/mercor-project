import React from "react";
import avatar from "../images/avatar.png";
import {
  Calendar2,
  Notification,
  MessageQuestion,
  ArrowDown2,
  SearchNormal1,
} from "iconsax-react";
const Header = () => {
  return (
    <div className="flex items-center justify-between w-[79%] p-4 bg-white">
      <form action="" className=" w-1/3 hidden md:block ">
        <div className=" relative flex items-center ">
          <SearchNormal1
            size={20}
            className="pointer-events-none absolute ml-4 "
          />
          <input
            type="text"
            className=" w-full rounded-md border-none bg-[#F5F5F5] py-3 pl-14 pr-3 text-sm outline-none ring-0 placeholder:text-grayColor  focus:border-none focus:ring-0"
            placeholder="Search for anything..."
          />
        </div>
      </form>

      <div className="flex justify-between items-center gap-10">
        <div className="flex  items-center justify-center  gap-4">
          <Calendar2 color="#787486" />
          <MessageQuestion color="#787486" />
          <Notification color="#787486" />
        </div>
        <div className="flex items-center justify-center gap-2">
          <div>
            <p>Anima Agrawal</p>
            <p>U.P, India</p>
          </div>
          <div className=" flex items-center justify-center space-x-3 ">
            <img
              className=" h-12 w-12 rounded-full object-cover  object-top "
              src={avatar}
              alt=""
            />
            <ArrowDown2 size={20} className=" text-[#292D32] " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
