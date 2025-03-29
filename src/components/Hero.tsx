
import React from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="py-16 md:py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-7xl md:text-9xl font-bold tracking-tighter mb-8">
              <span className="choory-title">YEAH!</span>
            </h1>
            <p className="text-lg mb-8 max-w-md leading-relaxed">
              Join our exclusive design hub where creativity meets functionality. 
              Discover the latest trends, connect with top designers, and elevate your design journey.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="choory-button rounded-none">Apply for Blogging</Button>
              <Button variant="outline" className="choory-button rounded-none">
                List of Designers
              </Button>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="aspect-square bg-gray-100 rounded-full overflow-hidden border-2 border-black">
              <img 
                src="/lovable-uploads/8950fd56-7a36-4de8-a4e8-1eaf8364a769.png" 
                alt="Design Inspiration" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
