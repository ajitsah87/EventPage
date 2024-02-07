import React from 'react'

function KeyHighlight() {
  return (
    <>
      <div className='h-auto '>
        <h1 className='font-bold text-4xl text-center my-24'> Key Highlights </h1>
          <div className=' grid grid-flow-col place-content-center gap-20 mx-20 max-lg:grid-rows-2 whitespace-nowrap  max-sm:mx-4'>
            <div  >
                <div className='bg-gray-300 h-28 w-28 rounded-full mb-4'></div>
                <p>Lorem ipsum dolor</p>
            </div>
            <div>
                <div className='bg-gray-300 h-28 w-28 rounded-full mb-4'></div>
                <p>Lorem ipsum dolor</p>
            </div>
            <div>
                <div className='bg-gray-300 h-28 w-28 rounded-full mb-4'></div>
                <p>Lorem ipsum dolor</p>
            </div>
            <div>
                <div className='bg-gray-300 h-28 w-28 rounded-full mb-4'></div>
                <p>Lorem ipsum dolor</p>
            </div>
          </div>
      </div>
    </>
  )
}

export default KeyHighlight
