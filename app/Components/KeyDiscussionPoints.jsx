import React from 'react'
import genetics from "@/public/assets/genetics.png" 
import bloodPressure from "@/public/assets/bloodPressure.png" 
import stethoscopeCheck from "@/public/assets/stethoscopeCheck.png" 
import medicalServices from "@/public/assets/medicalServices.png" 
import prescriptions from "@/public/assets/prescriptions.png" 
import personCelebrate from "@/public/assets/personCelebrate.png" 
import Image from 'next/image'

function KeyDiscussionPoints() {
  return (
    <>
      <div className='my-24 h-auto '>
        <h1 className='font-bold text-4xl text-center my-24'>Key Discussion Points</h1>
        <div className=' grid grid-flow-col place-content-center gap-8 mx-10 grid-rows-2 max-md:grid-rows-6 max-xl:mx-3 max-lg:grid-rows-3 '>
            <div className='border-[2px] h-[246px]  w-[307px] shadow-[0_0_10px_#00000030] p-3 text-center hover:scale-105 transition-all duration-300 hover:shadow-[0_0_20px_#00000050] bg-[#ffffff8a]'>

              <div className='flex relative my-4 '><span><Image className='h-8 w-8 mr-4' src={genetics} alt="Icons" /></span> <h3 className='font-medium text-lg whitespace-nowrap text-center '>Customized Treatment</h3></div>
              <p>It helps in determining the most appropriate dosage and type of medication based on a person’s genetic response ,enhancing treatment effectiveness</p>

            </div>
            <div className='border-[2px] h-[246px] w-[307px] shadow-[0_0_10px_#00000030] p-3 text-center hover:scale-105 transition-all duration-300 hover:shadow-[0_0_20px_#00000050] bg-[#ffffff8a]'>
              <div className=' flex relative my-4 text-center '><span><Image className="h-8 w-8 mr-4 " src={bloodPressure} alt="Icons fill"/></span> <h3 className='font-medium text-lg whitespace-nowrap text-center '>Early Disease Detection:</h3></div>
              <p>It enables earlier detection of diseases and health risks by analyzing genetic predispositions, leading to better preventive measures and early intervention.</p>

            </div>
            <div className='border-[2px] h-[246px] w-[307px] shadow-[0_0_10px_#00000030] p-3 text-center hover:scale-105 transition-all duration-300 hover:shadow-[0_0_20px_#00000050] bg-[#ffffff8a]'>
              <div className=' flex relative my-4'><span><Image className="h-8 w-8 mr-4" src={stethoscopeCheck} alt="Icons"/></span> <h3 className='font-medium text-lg whitespace-nowrap text-center '>Reduced Side Effects:</h3></div>
              <p>By considering an individual's genetic profile, precision medicine can help identify treatments that are more likely to work while minimizing harmful side effects, improving overall well-being.</p>

            </div>
            <div className='border-[2px] h-[246px] w-[307px] shadow-[0_0_10px_#00000030] p-3 text-center hover:scale-105 transition-all duration-300 hover:shadow-[0_0_20px_#00000050] bg-[#ffffff8a]'>
              <div className=' flex relative my-4'><span><Image className="h-8 w-8 mr-4" src={medicalServices} alt="Icons"/></span> <h3 className='font-medium text-lg whitespace-nowrap text-center '>Optimized Management:</h3></div>
              <p>It helps in determining the most appropriate dosage and type of medication based on a person's genetic response, enhancing treatment effectiveness.</p>

            </div>
            <div className='border-[2px] h-[246px] w-[307px] shadow-[0_0_10px_#00000030] p-3 text-center hover:scale-105 transition-all duration-300 hover:shadow-[0_0_20px_#00000050] bg-[#ffffff8a]'>
              <div className=' flex relative my-4'><span><Image className="h-8 w-8 mr-4" src={prescriptions} alt="Icons"/></span> <h3 className='font-medium text-lg whitespace-nowrap text-center '>Preventive Health Planning:</h3></div>
              <p>Precision medicine allows for the creation of personalized wellness plans that consider an individual's unique genetic and environmental factors, promoting long-term health and well-being.</p>

            </div>
            <div className='border-[2px] h-[246px] w-[307px] shadow-[0_0_10px_#00000030] p-3 text-center hover:scale-105 transition-all duration-300 hover:shadow-[0_0_20px_#00000050] bg-[#ffffff8a]'>
              <div className=' flex relative my-4'><span><Image className="h-8 w-8 mr-4" src={personCelebrate} alt="Icons"/></span> <h3 className='font-medium text-lg whitespace-nowrap text-center '>Enhanced Quality of Life:</h3></div>
              <p>By providing tailored healthcare solutions, precision medicine can lead to better outcomes, improved quality of life, and a more proactive approach to managing health and wellness.</p>

            </div>
        </div>
      </div>
    </>
  )
}

export default KeyDiscussionPoints
