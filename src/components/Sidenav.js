import React from "react";
import {
  Category,
  Message,
  Setting2,
  TaskSquare,
  Profile2User,
  AddSquare,
  LampOn,
} from "iconsax-react";

const Sidenav = () => {
  return (
    <div className="w-[18%] h-full bg-white border-r-[1px] border-[#DBDBDB] flex flex-col justify-center items-center">
      <div className="mt-[31px] p-7 mr-9">
        <ul className="space-y-[25px]">
          <li className="flex  ">
            <Category
              size="24"
              color=" #787486
"
            />
            <h3 className="ml-[14px] text-[#787486]">Home</h3>
          </li>
          <li className="flex  ">
            <Message
              size="24"
              color=" #787486
"
            />
            <h3 className="ml-[14px] text-[#787486]">Messages</h3>
          </li>
          <li className="flex  ">
            <TaskSquare
              size="24"
              color=" #787486
"
            />
            <h3 className="ml-[14px] text-[#787486]">Tasks</h3>
          </li>
          <li className="flex  ">
            <Profile2User size="24" color=" #787486" />
            <h3 className="ml-[14px] text-[#787486]">Members</h3>
          </li>
          <li className="flex">
            <Setting2 size="24" color=" #787486" />
            <h3 className="ml-[14px] text-[#787486]">Settings</h3>
          </li>
        </ul>
      </div>
      <div className="mt-[30px] ml-[12px] mr-[13px] mb-[50px]">
        <div className="flex mx-[10px]">
          <div className="font-semibold uppercase text-[12px] mr-[100px] text-[#787486]">
            My projects
          </div>
          <AddSquare size="24" color=" #787486" />
        </div>
        <ul className="mt-[20px]">
          <li className="flex justify-start items-center h-[39px] hover:border-[1px] hover:rounded-md px-[12px] hover:bg-[#5030e514] hover:font-semibold hover:text-[#000000]">
            <span className="w-3 h-3 rounded-full bg-[#7AC555] mr-[16px]"></span>
            <h3 className="font-medium text-[16px] text-[#787486]">
              Mobile App
            </h3>
          </li>
          <li className="flex justify-start items-center h-[39px] hover:border-[1px] hover:rounded-md px-[12px] hover:bg-[#5030e514] hover:font-semibold hover:text-[#000000]">
            <span className="w-3 h-3 rounded-full bg-[#FFA500] mr-[16px]"></span>
            <h3 className="font-medium text-[16px] text-[#787486]">
              Website Redesign
            </h3>
          </li>
          <li className="flex justify-start items-center h-[39px] hover:border-[1px] hover:rounded-md px-[12px] hover:bg-[#5030e514] hover:font-semibold hover:text-[#000000]">
            <span className="w-3 h-3 rounded-full bg-[#E4CCFD] mr-[16px]"></span>
            <h3 className="font-medium text-[16px] text-[#787486]">
              Design System
            </h3>
          </li>
          <li className="flex justify-start items-center h-[39px] hover:border-[1px] hover:rounded-md px-[12px] hover:bg-[#5030e514] hover:font-semibold hover:text-[#000000]">
            <span className="w-3 h-3 rounded-full bg-[#76A5EA] mr-[16px]"></span>
            <h3 className="font-medium text-[16px] text-[#787486]">
              Wireframes
            </h3>
          </li>
        </ul>
      </div>

      <div className=" bg-[#F5F5F5] mt-20 rounded-2xl mx-[22px] relative">
        <div className=" absolute -top-12 inset-x-0 flex justify-center items-center">
          <div className=" bg-[#F5F5F5] rounded-full  w-16 h-16 flex justify-center items-center backdrop-blur-xl">
            <div className="bg-[#FCD64AB2] rounded-full w-10 h-10">
              <div className=" absolute flex justify-center items-center backdrop-blur-md w-16 h-16 top-0 right-0 left-0 rounded-full ">
                <LampOn variant="Bulk" size="34" color="#FBCB18" />
              </div>
            </div>
          </div>
        </div>
        <div className=" flex flex-col justify-center items-center py-5 px-10 space-y-5 ">
          <p className=" text-black text-sm ">Thoughts Time</p>
          <p className=" text-grayColor text-xs text-center ">
            We don't have any notice for you, till then you can share your
            thoughts with your peers.
          </p>
          <button className=" bg-white text-black font-medium text-sm text-center py-3 px-6 rounded  ">
            Write a message
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidenav;
