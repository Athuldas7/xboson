"use client";

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { TextGenerateEffect } from './TextGenerateEffect';

const Caax = () => {
  const router = useRouter();

  const handleLeftClick = () => {
    router.push('/krishisat');
  };

  const handleRightClick = () => {
    router.push('/ProductCaax');
  };

  return (
    <div className="relative w-screen h-screen overflow-y-hidden">
      {/* Main Grid */}
      <div className="grid w-full h-full grid-cols-2 transition-all duration-700">
        
        {/* Left Column */}
        <div
          className="relative flex items-center justify-end w-full h-full overflow-hidden bg-center bg-cover cursor-pointer caax group"
          onClick={handleLeftClick}
        >
          {/* Background with Hover Blur */}
          <div
            className="absolute inset-0 transition-all duration-500 bg-no-repeat bg-cover opacity-75 group-hover:blur-sm"
            style={{ backgroundImage: "url('/images/paddy.jpg')" }} 
          />

          {/* Space Image with Hover Effect */}
          <div className="relative transition-transform duration-500 transform group-hover:scale-105 group-hover:drop-shadow-lg space-container">
            <Image
              src="/images/space1.png"
              alt="Space"
              width={610}
              height={438}
              className="space"
            />
          </div>
          
          {/* Text Generation Effect - Left Side */}
          <div className="absolute leftf">
            <TextGenerateEffect 
              text="Krishisat" 
              className="text-6xl text-cool"
            />
          </div>
        </div>

        {/* Right Column */}
        <div
          className="relative flex items-center justify-start w-full h-full overflow-hidden bg-center bg-cover cursor-pointer caax group"
          onClick={handleRightClick}
        >
          {/* Background with Hover Blur */}
          <div
            className="absolute inset-0 transition-all duration-500 bg-no-repeat bg-cover opacity-75 group-hover:blur-sm"
            style={{ backgroundImage: "url('/images/earthbg.jpg')" }} 
          />

          {/* Earth Image with Hover Effect */}
          <div className="relative transition-transform duration-500 transform group-hover:scale-105 group-hover:drop-shadow-lg earth-container">
            <Image
              src="/images/earth.png"
              alt="Earth"
              width={400}
              height={395}
              className="earth"
            />
          </div>
          
          {/* Text Generation Effect - Right Side */}
          <div className="absolute rightf">
            <TextGenerateEffect 
              text="CAAX - Earth" 
              className="text-6xl text-cool"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Caax;