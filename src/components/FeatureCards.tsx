
import React from 'react';
import { X } from "lucide-react";

const FeatureCards = () => {
  return (
    <section className="relative py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
        {/* Left Card */}
        <div className="bg-white rounded-3xl border-2 border-black p-8 relative z-10 transform hover:scale-[1.02] transition-transform">
          <div className="absolute top-4 right-4 flex space-x-2">
            <div className="w-2 h-2 bg-black rounded-full"></div>
            <div className="w-2 h-2 bg-black rounded-full"></div>
            <div className="w-2 h-2 bg-black rounded-full"></div>
          </div>
          <div className="absolute top-4 right-16">
            <X className="h-5 w-5" />
          </div>
          
          <div className="flex flex-col items-center justify-center h-full py-8">
            <div className="text-5xl font-bold mb-8 text-center">
              <span>MAKE</span>
              <div className="flex items-center justify-center">
                <div className="border-2 border-black p-2 px-6 transform -rotate-6 inline-block">
                  <span className="text-black font-bold text-4xl">BRE</span>
                </div>
                <span className="mx-2 text-sm">or</span>
                <div className="border-2 border-black p-2 px-6 transform rotate-3 inline-block">
                  <span className="text-black font-bold text-4xl">AK</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right Card */}
        <div className="bg-black rounded-3xl text-white p-8 flex flex-col justify-between relative z-0">
          <div className="flex flex-col items-start justify-center h-full">
            <h2 className="text-4xl font-bold mb-8">THE BOYZ</h2>
            
            <div className="flex flex-col gap-4 w-full">
              <div className="bg-white text-black px-6 py-3 rounded-full inline-block">
                <span className="font-medium">FAVORITE</span>
              </div>
              <div className="bg-white text-black px-6 py-3 rounded-full inline-block">
                <span className="font-medium">#SpotifySong</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Circles decoration */}
      <div className="absolute -left-20 top-1/2 transform -translate-y-1/2">
        <div className="border-4 border-black w-40 h-40 rounded-full"></div>
      </div>
    </section>
  );
};

export default FeatureCards;
