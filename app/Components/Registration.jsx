import React from "react";

function Registration() {
  return (
    <>
      <div className="my-40 mx-40">
        <h1 className="text-4xl text-center font-semibold text-[#4E4E4E] my-24 mb-32">
          <span className="text-[#6ABDBB] text-4xl ">
            Registration Packages
          </span>
          : Choose Your Pass
        </h1>
        <div className="flex items-center justify-evenly max-xl:flex-col gap-10 ">
          <div className=" bg-white shadow-[0_0_10px_#00000030] h-[409px] w-[357px] hover:scale-125 hover:shadow-[0_0_20px_#00000050] transition-all duration-300  mb-8">
            <div className="my-12 text-center ">
              <h4 className="text-2xl text-[#222E4C] font-semibold my-4 ">
                STUDENTS
              </h4>
              <p className="text-[#9F9F9F] text-xl my-4 ">Registration fee</p>
              <p className="my-2 text-xl font-medium line-through">1000 Rs</p>
              <p className="text-[#686868] text-xl my-2">Event fee</p>
              <h5 className="text-[#80AFCF] text-2xl font-semibold my-2">
                1000 Rs
              </h5>
              <p className="text-sm text-[#9F9F9F] my-1">Early Bird Offer</p>
              <button className="bg-[#BB2648] py-2 px-6 my-4 text-white text-lg ">
                Save My Seat
              </button>
            </div>
          </div>
          <div className=" bg-white shadow-[0_0_10px_#00000030] hover:shadow-[0_0_20px_#00000050] h-[409px] w-[357px] hover:scale-125 transition-all duration-300 mb-8 ">
            <div className="my-12 text-center  ">
              <h4 className="text-2xl text-[#222E4C] font-semibold my-4 ">
                INDIVIDUAL
              </h4>
              <p className="text-[#9F9F9F] text-xl my-4 ">Registration fee</p>
              <p className="my-2 text-xl font-medium line-through">1000 Rs</p>
              <p className="text-[#686868] text-xl my-2">Event fee</p>
              <h5 className="text-[#80AFCF] text-2xl font-semibold my-2">
                1500 Rs
              </h5>
              <p className="text-sm text-[#9F9F9F] my-1">Early Bird Offer</p>
              <button className="bg-[#BB2648] py-2 px-6 my-4 text-white text-lg ">
                Save My Seat
              </button>
            </div>
          </div>
          <div className=" bg-white shadow-[0_0_10px_#00000030] hover:shadow-[0_0_20px_#00000050] h-[409px] w-[357px] hover:scale-125 transition-all duration-300 mb-8 ">
            <div className="my-12 text-center">
              <h4 className="text-2xl text-[#222E4C] font-semibold my-4 ">
                GROUP OF 3
              </h4>
              <p className="text-[#9F9F9F] text-xl my-4 ">Registration fee</p>
              <p className="my-2 text-xl font-medium line-through">1000 Rs</p>
              <p className="text-[#686868] text-xl my-2">Event fee</p>
              <h5 className="text-[#80AFCF] text-2xl font-semibold my-2">
                3000 Rs
              </h5>
              <p className="text-sm text-[#9F9F9F] my-1">Early Bird Offer</p>
              <button className="bg-[#BB2648] py-2 px-6 my-4 text-white text-lg ">
                Save My Seat
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Registration;
