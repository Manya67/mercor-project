import React from "react";
import { Select, Option, Button } from "@material-tailwind/react";
import MainHeading from "./MainHeading";
import { TableDocument, Category, AddSquare } from "iconsax-react";
import Cards from "./Cards";
import user2 from "../images/user2.png";
import user3 from "../images/user3.png";
import user4 from "../images/user4.png";
import user5 from "../images/user5.png";

const MainContainer = () => {
  return (
    <div className="flex justify-center items-center m-auto border border-red-300 flex-col w-[75%] space-y-[40px]">
      <div className="border border-brown-800 w-full flex items-center justify-between">
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
      <div className="flex items-center justify-between border w-full ">
        <div className="flex gap-1">
          <div className="">
            <Select label="Filters">
              <Option>Options you may want</Option>
            </Select>
          </div>
          <div>
            <Select label="Today">
              <Option>Options you may want</Option>
            </Select>
          </div>
        </div>
        <div className="divide-x flex">
          <Button
            variant="outlined"
            className="border-[#787486] text-[#787486]"
          >
            Share
          </Button>
          <div className="flex items-center gap-3 m-2">
            <TableDocument size="24" color="#FF8A65" />
            <Category size="24" color=" #787486" />
          </div>
        </div>
      </div>
      <Cards />
    </div>
  );
};

export default MainContainer;
