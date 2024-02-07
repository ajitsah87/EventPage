import React from "react";
import Image from "next/image";
import FemaleDoctor from "@/public/assets/FemaleDoctor.jpg";
import Doctor from "@/public/assets/Doctor.jpg";
import SeniorDoctor from "@/public/assets/SeniorDoctor.jpg";
import AssociationDoctor from "@/public/assets/AssociationDoctor.png";
function Speakerss() {
  return (
    <>
      <div className="mx-10 mb-40">
        <h1 className="text-4xl text-center font-semibold text-[#4E4E4E]  my-28">
          Meet The Experts: Our Esteemed{" "}
          <span className="text-[#6ABDBB] text-4xl">Speakers</span>
        </h1>
        <div className="flex items-center justify-center gap-20 text-center max-lg:flex-col max-xl:gap-6 ">
          <div className="">
            <div className="my-2 h-[254px] w-[254px] rounded-full overflow-hidden">
              <Image
                src={FemaleDoctor}
                alt="FrontDoctor "
                height={254}
                width={254}
              />
            </div>
            <p className="font-semibold text-lg my-2 ">Lorem ipsum dolor.</p>
            <p>amet consectetur.</p>
          </div>
          <div className="">
            <div className="my-2 h-[254px] w-[254px] rounded-full overflow-hidden">
              <Image src={Doctor} alt="FrontDoctor" height={254} width={254} />
            </div>
            <p className="font-semibold text-lg my-2 ">Lorem ipsum dolor.</p>
            <p>amet consectetur.</p>
          </div>
          <div className="">
            <div className="my-2 h-[254px] w-[254px] rounded-full overflow-hidden">
              <Image
                src={SeniorDoctor}
                alt="FrontDoctor"
                height={254}
                width={254}
              />
            </div>
            <p className="font-semibold text-lg my-2 ">Lorem ipsum dolor.</p>
            <p>amet consectetur.</p>
          </div>
          <div className="">
            <div className="my-2 h-[254px] w-[254px] rounded-full overflow-hidden ">
              <Image src={AssociationDoctor} alt="FrontDoctor " />
            </div>
            <p className="font-semibold text-lg my-2 ">Lorem ipsum dolor.</p>
            <p>amet consectetur.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Speakerss;
