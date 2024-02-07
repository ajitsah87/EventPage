import React from 'react'
import Image from 'next/image'
import stethoscope from "@/public/assets/stethoscope-pieces.png"
function Register() {
  return (
    <>
      <div className="  bg-[#F4F4F4] mb-40  ">
        <div className='flex justify-between max-xl:mx-24 max-lg:mx-16 max-md:flex-col-reverse mx-52'>
            <div className='w-[45%] max-lg:w-[50%] max-md:w-[100%] mt-20 max-sm:mx-0'>
                <p className=' mb-10 hover:underline text-[#80AFCF]
                max-sm:text-sm'> <span  className='bg-[#F3B339] gap-2 py-1.5 px-6 text-white '>offline</span> December 20, 2023</p>
                <h2 className='text-3xl max-sm:text-2xl text-[#4E4E4E] mb-8'>Unlocking Tomorrow's Health Today.</h2>
                <p className='text-base text-[#4E4E4E] mb-16'>Join us on a journey through the realm of precision medicine for early disease diagnosis.</p>
                <button className='bg-[#BB2648] py-2.5 px-8 text-white mb-40'>Register</button>
            </div>
            <div className="relative w-[368px] max-sm:w-[300px] h-[245px] max-md:mx-auto max-lg:ml-10 ">
                <Image src={stethoscope} alt='stethoscope' fill
                />
            </div>
        </div>

      </div>
    </>
  )
}

export default Register
