import React from "react";

function Speakers() {
  return (
    <>
      <div className=" text-white mt-24 flex justify-center items-center text-center gap-5 mx-40 max-lg:flex-col my-56">
        <div>
          <div className="relative w-[500px] h-[75px] grid place-content-center max-sm:h-[50px]   max-sm:w-[340px] max-sm:text-sm  bg-[#363B39] font-normal whitespace-nowrap  mb-5 text-lg">
            28+ Speakers
            <span className=" absolute -z-10 -top-5 -left-5 inline-block w-10 aspect-square bg-[#80AFCF] rounded-full "></span>
          </div>
          <div className="w-[500px] h-[75px] grid place-content-center whitespace-nowrap  max-sm:h-[50px]   max-sm:w-[340px] max-sm:text-sm bg-[#363B39] font-normal text-lg">
            6+ Knowledge Sessions
          </div>
        </div>
        <div className="">
          <div className=" w-[500px] h-[75px] grid max-[600px]:w-auto place-content-center whitespace-nowrap max-sm:h-[50px]   max-sm:w-[340px] max-sm:text-sm bg-[#363B39] font-normal mb-5 text-lg">
            6+ Partners
          </div>
          <div className="relative whitespace-nowrap w-[500px] h-[75px] grid place-content-center max-sm:h-[50px]   max-sm:w-[340px] max-sm:text-sm bg-[#363B39] font-normal text-lg">
            200+ Delegate
            <span className=" absolute -z-10 -bottom-5 -right-5 inline-block w-10 aspect-square bg-[#80AFCF] rounded-full "></span>
          </div>
        </div>
     
        <span></span>
      </div>
    </>
  );
}

export default Speakers;
