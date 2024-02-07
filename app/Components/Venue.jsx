import React from "react";
import RoomIcon from "@mui/icons-material/Room";
function Venue() {
  return (
    <>
      <div className="mx-16 max-sm:mx-2 my-24">
        <div>
          <h1 className="font-bold text-4xl text-center my-24">Venue</h1>
        </div>
        <div className="flex max-lg:flex-col
          py-6 px-4 gap-10 max-lg:gap-0  shadow-[0_0_10px_#00000030]   hover:scale-105 transition-all duration-300 hover:shadow-[0_0_20px_#00000050] bg-[#ffffff8a] rounded-md">
          <div className="bg-[#FFFFFF] w-[967px] max-lg:w-auto h-96 ">
          <div className=" h-96">
      <div className="overflow-hidden h-full">
        <iframe
          title="Google Map"
          src="https://maps.google.com/maps?q=patna%20university&amp;t=&amp;z=9&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
          frameBorder="0"
          className="w-full h-full  "
        ></iframe>
      </div>
    </div>
          </div>
          <div className=' flex max-lg:justify-center w-5/12 max-lg:w-full' >
                <RoomIcon className='text-[#BB2648] mr-2 my-6'/>
                <div>
                    <h3 className='font-medium text-lg my-6'>Lorem ipsum dolor sit am consectetur</h3>
                    <p >Lorem ipsum dolor sit am consectetur adipisicing elit do eiusmod tempor incididunt ut labore dolore magna.</p>
                </div>
            </div>
        </div>
      </div>
    </>
  );
}

export default Venue;
