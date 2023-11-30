'use client'
import React from "react";

const Spot = () => {
  return (
    <div className='flex items-center'>
      <video
        src="https://egoh-shot.s3.us-east-2.amazonaws.com/Dr.+Gerardo+Leon.mp4"
        controls
        playsInline
        autoPlay
        muted
        className="w-full h-auto object-center rounded-[0.175rem]"
      />
    </div>
  );
};

export default Spot;
