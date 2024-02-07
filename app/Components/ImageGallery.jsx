
import React from 'react';


const ImageGallery = () => {
  return (
  <div>
     <h1 className="font-bold text-4xl text-center text-[#4E4E4E] my-24">
     Glimpse of Previous Medical
          <span className="text-[#BB2648]"> Event</span>
        </h1>

    <div  className="w-full h-[320px] flex flex-col justify-center relative">
      <div  className="absolute top-0 h-[50px] w-full bg-white rounded-bl-[70%] rounded-br-[70%]"></div>
      <div className="w-full min-w-[300px] flex flex-nowrap h-[300px] gap-10 overflow-x-auto">
        {[...Array(16)].map((_, index) => (
          <div
            key={index}
            id="strip-item"
            className="h-[300px] w-[300px] min-w-[300px]  bg-gray-100 bg-cover"
            style={{
              backgroundImage: `url(https://images.unsplash.com/photo-1470848051974-964b789cb6fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80)`,
            }}
          ></div>
        ))}
      </div>
      <div className="absolute bottom-0 h-[50px] w-full bg-white rounded-tl-[50%] rounded-tr-[50%]"></div>
    </div>
  </div>
  );
};

export default ImageGallery;

