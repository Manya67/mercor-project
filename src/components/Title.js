import { ArrowLeft2, Colorfilter } from "iconsax-react";
import React from "react";

const Title = () => {
  return (
    <div className="w-[18%] bg-white border-r-[1px] border-[#DBDBDB] flex justify-around items-center">
      <div className="flex jusify-center items-center">
        <Colorfilter size="32" variant="Bulk" color="#5030E5" />

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
