
import React from 'react';
import { Play } from "lucide-react";

const BottomCard = () => {
  return (
    <section className="py-16 relative">
      <div className="flex justify-center mb-8">
        <div className="h-2 w-2 bg-black rounded-full"></div>
      </div>
      
      <div className="relative rounded-3xl overflow-hidden border-2 border-black">
        <div className="relative">
          <img 
            src="/lovable-uploads/e6f9ff4e-99a0-4c18-9e2d-468bb1e79d5d.png"
            alt="Featured content"
            className="w-full h-[400px] object-cover"
          />
          
          <div className="absolute top-6 left-6 text-white">
            <p className="text-sm">I wanna</p>
            <h2 className="text-4xl font-bold">ROCK</h2>
            <p className="text-sm">your body</p>
          </div>
          
          <div className="absolute top-6 right-6">
            <div className="bg-white rounded-lg px-3 py-1 flex items-center">
              <span>+2</span>
            </div>
          </div>
          
          {/* Play button */}
          <div className="absolute top-1/2 left-10 transform -translate-y-1/2">
            <div className="bg-white rounded-full p-4 shadow-lg">
              <Play className="h-6 w-6" />
            </div>
          </div>
          
          {/* Bottom black section */}
          <div className="absolute bottom-0 left-0 right-0 bg-black text-white p-6">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-4xl font-bold">THE TIMES</h3>
                <p className="text-sm opacity-70">made by choory</p>
              </div>
              
              <div className="relative">
                <div className="bg-white text-black px-4 py-2 rounded-lg inline-block">
                  <span>NEWS</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Floating cards */}
          <div className="absolute bottom-20 right-6">
            <div className="bg-white rounded-lg px-4 py-3 shadow-lg">
              <div className="text-black">
                <h4 className="font-bold">NEW VIDEO</h4>
              </div>
            </div>
          </div>
          
          <div className="absolute bottom-40 right-10">
            <div className="bg-black text-white rounded-2xl px-6 py-3 shadow-lg">
              <span className="font-bold">#VOTY</span>
            </div>
          </div>
          
          <div className="absolute bottom-60 right-4 max-w-[240px]">
            <div className="bg-white rounded-lg p-4 shadow-lg text-xs">
              <div className="flex justify-between">
                <p className="font-medium">comentar</p>
              </div>
              <p className="mt-2 text-gray-600 text-xs">
                Nueva publicación, descarga ahora. Si pulsas el botón de descarga podrás descargar el video automáticamente.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 -right-20">
        <div className="bg-black text-white rounded-2xl px-6 py-3 transform rotate-12">
          <span className="font-bold text-2xl">Spotify</span>
        </div>
      </div>
      
      <div className="mt-6 flex justify-center">
        <div className="bg-black text-white rounded-full px-8 py-2">
          <span>siguiente historia.</span>
        </div>
      </div>
    </section>
  );
};

export default BottomCard;
