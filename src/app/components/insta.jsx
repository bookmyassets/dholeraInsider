import React from 'react';


const Insta = () => {
  return (
    <div className="relative p-4 mb-4">
      <div className="flex justify-center items-center  p-3">
        <button className="mt-[90px] mb-4 bg-orange-200 hover:bg-orange-600 px-4 py-1 rounded-2xl text-orange-500 hover:text-white h-8 w-28 font-black text-xs uppercase cursor-pointer ">
          instagram
        </button>
      </div>
      <div className="relative ">
        <div className="flex flex-col justify-center items-center">
          <p className="text-9xl sm:text-[160px] text-blue-700 opacity-5 font-black text-center z-0 absolute top-0 left-0 w-full uppercase dark:text-white">
            instagram
          </p>
          <p className="text-2xl sm:text-4xl text-blue-900 font-bold text-center z-20 relative capitalize mt-[55px] dark:text-gray-300">
            checkout what our customers shared{' '}
            <span className="normal-case">#homes</span>
          </p>
        </div>
      </div>

      
    </div>
  );
};

export default Insta;
