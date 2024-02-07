import React from 'react'
import stethoscopeCheck from "@/public/assets/stethoscopeCheck.png" 
import medicalServices from "@/public/assets/medicalServices.png" 
import prescriptions from "@/public/assets/prescriptions.png" 
import personCelebrate from "@/public/assets/personCelebrate.png" 
import Image from 'next/image'

function Participate() {
  return (
    <>
    <div>
        <div className='flex justify-evenly items-center mx-16 gap-10 max-lg:flex-col max-sm:mx-4 my-24'>
            <div className=' '>
                <h1 className='text-[#80AFCF] max-sm:text-[40px] max-sm:leading-[50px] text-[60px] leading-[75px] font-medium'>Why to Participate ?</h1>
            </div>
            <div className=''>
                <p className='mb-8'>
                Precision medicine allows for the creation of personalized wellness plans that consider an individual's unique genetic and environmental factors, promoting long-term health and well-being.
                </p>
                <div className='grid grid-cols-2 gap-4 max-md:grid-cols-1 max-md:place-content-center '>    
                <div className=' flex items-center justify-center relative my-4'><span><Image className="h-8 w-8 mr-4" src={medicalServices} alt="Icons"/></span> <h3 className='font-medium text-lg whitespace-nowrap text-center '>Optimized Management:</h3></div>
                <div className=' flex  items-center justify-center relative my-4'><span><Image className="h-8 w-8 mr-4" src={prescriptions} alt="Icons"/></span> <h3 className='font-medium text-lg whitespace-nowrap text-center '>Preventive Health Planning:</h3></div>
                <div className=' flex  items-center justify-center relative my-4'><span><Image className="h-8 w-8 mr-4" src={personCelebrate} alt="Icons"/></span> <h3 className='font-medium text-lg whitespace-nowrap text-center '>Enhanced Quality of Life:</h3></div>
                <div className=' flex  items-center justify-center relative my-4'><span><Image className="h-8 w-8 mr-4" src={stethoscopeCheck} alt="Icons"/></span> <h3 className='font-medium text-lg whitespace-nowrap text-center '>Reduced Side Effects:</h3></div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Participate
