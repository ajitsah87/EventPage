import React from "react";
import PersonOutlineSharpIcon from "@mui/icons-material/PersonOutlineSharp";
import PhoneSharpIcon from "@mui/icons-material/PhoneSharp";
import LocalPostOfficeSharpIcon from "@mui/icons-material/LocalPostOfficeSharp";
function Contact() {
  return (
    <>
      <div className=" mb-10 ">
        <h1 className="text-4xl text-center font-semibold text-[#4E4E4E] my-10 mb-24">
          Contact US
        </h1>

        <div className="flex text-left items-center justify-evenly mx-6 max-md:mx-2   max-xl:flex-col">
          <div className="h-52 w-[550px] max-md:w-[450px] max-sm:w-[350px] pl-16 max-sm:pl-4 py-8 shadow-[0_0_10px_#00000030] mb-8 hover:scale-105 transition-all duration-300 hover:shadow-[0_0_20px_#00000050] bg-[#ffffff8a] ">
            <h2 className="text-[#6ABDBB] mb-2 text-2xl font-semibold">
              {" "}
              <span className="text-black mr-4  ">
                <PersonOutlineSharpIcon />
              </span>
              Pinky Chahar
            </h2>
            <p className="mb-4 pl-10  ">amet consectetur.</p>
            <p className="text-[#535353] mb-4">
              <span className="text-black mr-4 ">
                <PhoneSharpIcon />
              </span>
              9599193575
            </p>
            <a className="text-[#80AFCF] mb-4 cursor-pointer underline">
              <span className="text-black mr-4 cursor-none ">
                <LocalPostOfficeSharpIcon />
              </span>
              pinky.chahar@voiceofhealthcare.org
            </a>
          </div>
         
          <div className="h-52 w-[550px] max-md:w-[450px] max-sm:w-[350px] pl-16 max-sm:pl-4 py-8 shadow-[0_0_10px_#00000030] mb-8 hover:scale-105 transition-all duration-300 hover:shadow-[0_0_20px_#00000050] bg-[#ffffff8a] ">
            <h2 className="text-[#6ABDBB] text-2xl font-semibold mb-2">
              <span className="text-black mr-4 ">
                <PersonOutlineSharpIcon />
              </span>
              Khushbu
            </h2>
            <p className="mb-4 pl-10  ">Asst. Direc</p>
            <p className="text-[#535353] mb-4">
              {" "}
              <span className="text-black mr-4 ">
                <PhoneSharpIcon />
              </span>
              9599193575
            </p>
            <a className="text-[#80AFCF] mb-4 underline cursor-pointer">
              {" "}
              <span className="text-black mr-4 cursor-none ">
                <LocalPostOfficeSharpIcon />
              </span>
              khushbu.sharm@voiceofhealthcare.org
            </a>
          </div>
        
        </div>
      </div>
    </>
  );
}

export default Contact;
