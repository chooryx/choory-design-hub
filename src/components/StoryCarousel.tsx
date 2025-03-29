
import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";

const StoryCarousel = () => {
  const designers = [
    { name: "James", image: "/lovable-uploads/e6f9ff4e-99a0-4c18-9e2d-468bb1e79d5d.png" },
    { name: "Nick", image: "/lovable-uploads/e6f9ff4e-99a0-4c18-9e2d-468bb1e79d5d.png" },
    { name: "Sarah", image: "/lovable-uploads/e6f9ff4e-99a0-4c18-9e2d-468bb1e79d5d.png" },
  ];

  return (
    <section className="py-16 relative">
      <div className="text-center mb-6">
        <p className="text-xs tracking-widest uppercase mb-2">NEW STORY</p>
        <h2 className="text-4xl font-bold">Who's Playing?</h2>
      </div>
      
      <div className="relative mt-12 max-w-3xl mx-auto">
        <Carousel className="w-full">
          <CarouselContent>
            {designers.map((designer, index) => (
              <CarouselItem key={index} className="md:basis-1/3 flex justify-center">
                <div className="relative">
                  <div className="w-[200px] h-[200px] rounded-full overflow-hidden border-2 border-black">
                    <img 
                      src={designer.image}
                      alt={designer.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="mt-4 text-center font-medium uppercase">{designer.name}</p>
                  {index === 1 && (
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="bg-white rounded-full p-2">
                        <ChevronRight className="h-6 w-6" />
                      </div>
                    </div>
                  )}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute -left-4 top-1/2 border-2 border-black rounded-full" />
          <CarouselNext className="absolute -right-4 top-1/2 border-2 border-black rounded-full" />
        </Carousel>
      </div>
    </section>
  );
};

export default StoryCarousel;
