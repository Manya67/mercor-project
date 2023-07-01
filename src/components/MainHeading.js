import React from "react";
import { Edit2, Link1 } from "iconsax-react";
const MainHeading = () => {
  return (
    <div className="flex gap-3 justify-center items-center">
      <span className="text-5xl font-semibold">Mobile App</span>
      <div className=" flex items-center justify-center space-x-5 ">
        <button className=" rounded-md bg-[#5030E533] p-1 ">
          <Edit2 size={16} color="#5030E5" />
        </button>
        <button className=" rounded-md bg-[#5030E533] p-1 ">
          <Link1 size={16} variant="Outline" color="#5030E5" />
        </button>
      </div>
    </div>
  );
};

export default MainHeading;
