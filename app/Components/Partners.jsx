import Image from 'next/image'
import React from 'react'
import Medical from "@/public/assets/Medical.png"
import LogoName from "@/public/assets/LogoName.png"
import TrustMedical from "@/public/assets/TrustMedical.png"
import PeopleCare from "@/public/assets/PeopleCare.png"
import Healthy from "@/public/assets/Healthy.png"
import LogoGuideline from "@/public/assets/LogoGuideline.png"
function Partners() {
  return (
    <>
      <div className="mb-24">
      <h1 className="text-4xl text-center font-semibold text-[#4E4E4E] my-24">Our Partners</h1>
<div className="flex justify-evenly flex-wrap gap-10 mx-56 max-xl:mx-32 max-lg:mx-10">
    <div className="relative h-[183px] w-[275px]"> 
    <Image src={Medical} alt='' fill />
    </div>
    <div className="relative h-[170px] w-[170px]"> 
    <Image src={LogoName} alt='' fill />
    </div>
    <div className="relative h-[111px] w-[237px]"> 
    <Image src={TrustMedical} alt='' fill />
    </div>
    <div className="relative h-[197px] w-[256px]"> 
    <Image src={PeopleCare} alt='' fill />
    </div>
    <div className="relative h-[190px] w-[158px]"> 
    <Image src={Healthy} alt='' fill />
    </div>
    <div className="relative h-[164px] w-[211px]"> 
    <Image src={LogoGuideline} alt='' fill />
    </div>
    </div>      

      </div>
    </>
  )
}

export default Partners
