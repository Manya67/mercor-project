import { ArrowLeft2 } from "iconsax-react";
import React from "react";

const Title = () => {
  return (
    <div className="w-[18%] bg-white border-r-[1px] border-[#DBDBDB] flex justify-around items-center">
      <div className="flex jusify-center items-center">
        <span className="w-3 h-3 rounded-full bg-[#5030E5] mr-[9px]"></span>
        <p className="text-[#0D062D] text-[20px] font-semibold">Project M.</p>
      </div>
      <div className="flex">
        <ArrowLeft2 size="12" color=" #787486" />
        <ArrowLeft2 size="12" color=" #787486" />
      </div>
    </div>
  );
};

export default Title;
