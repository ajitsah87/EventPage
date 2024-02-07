import React from "react";

function Event() {
  return (
    <>
      <div className=" my-24">
        <h1 className="text-4xl text-center font-semibold text-[#4E4E4E] my-24">
          Event Schedule
        </h1>
        <div className="h-0  relative border-[#6D6D6D]  border-[5px] w-full ">
          <span className="w-6 aspect-square absolute -top-3 bg-[#3D3D3D] rounded-full inline-block  left-[13%]  hover:w-10"></span>
          <span className="w-6 aspect-square absolute -top-3 bg-[#3D3D3D] rounded-full inline-block  left-[28%] "></span>
          <span className="w-6 aspect-square absolute -top-3 bg-[#3D3D3D] rounded-full inline-block  left-[42%]"></span>
          <span className="w-6 aspect-square absolute -top-3 bg-[#3D3D3D] rounded-full inline-block  left-[56%] "></span>
          <span className="w-6 aspect-square absolute -top-3 bg-[#3D3D3D] rounded-full inline-block  left-[70%] "></span>
          <span className="w-6 aspect-square absolute -top-3 bg-[#3D3D3D] rounded-full inline-block  left-[84%] "></span>
        </div>
        <div className=" flex mx-2 max-lg:flex-col  gap-10 my-24 px-40 max-sm:px-2">
          <div className="">
            <div className="  h-36  mb-20">
              <p className="  ml-28 p border-b-[1px] font-medium text-[#4E4E4E]">
                Lorem ipsum
              </p>
              <p className=" text-[#BB2648] font-medium text-wrap  ">
                10:00 -1:00
              </p>
              <p className=" text-[#6E6E6E]  ml-28">
                Sorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus. S
              </p>
            </div>
            <div className="  h-36 mb-20">
              <p className="  ml-28 p border-b-[1px] font-medium text-[#4E4E4E]">
                Lorem ipsum
              </p>
              <p className=" text-[#BB2648] font-medium text-wrap  ">
                10:00 -1:00
              </p>
              <p className="  text-[#6E6E6E]  ml-28">
                Sorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus. S
              </p>
            </div>
          </div>
          <div>
            <div className="  h-36  mb-20">
              <p className="  ml-28 p border-b-[1px] font-medium text-[#4E4E4E]">
                Lorem ipsum
              </p>
              <p className=" text-[#BB2648] font-medium text-wrap  ">
                10:00 -1:00
              </p>
              <p className=" text-[#6E6E6E]  ml-28">
                Sorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus. S
              </p>
            </div>
            <div className="  h-36 mb-20">
              <p className="  ml-28 p border-b-[1px] font-medium text-[#4E4E4E]">
                Lorem ipsum
              </p>
              <p className=" text-[#BB2648] font-medium text-wrap  ">
                10:00 -1:00
              </p>
              <p className="  text-[#6E6E6E] ml-28">
                Sorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus. S
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Event;
