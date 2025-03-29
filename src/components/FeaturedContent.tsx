
import React from 'react';

const FeaturedContent = () => {
  return (
    <section className="py-16 md:py-24 px-6 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 choory-title">FAKE NEWS!!</h2>
          <p className="text-lg max-w-2xl">
            Latest updates from the design world that push boundaries and challenge conventions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex flex-col space-y-6">
            <div className="aspect-[4/3] bg-white border border-gray-200 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800"
                alt="Tech Design"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-bold">Breaking Design Trends</h3>
              <p className="text-gray-700">
                Latest insights on the evolving design landscape and how it's shaping our digital experiences.
              </p>
            </div>
          </div>

          <div className="flex flex-col space-y-6">
            <div className="aspect-[4/3] bg-white border border-gray-200 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800"
                alt="Design Workspace"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-bold">Designer Spotlight</h3>
              <p className="text-gray-700">
                Featuring innovative creators who are pushing the boundaries of design and aesthetics.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <a href="/primfeed" className="inline-block choory-button">
            Explore Primfeed
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedContent;
