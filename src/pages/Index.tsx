
import React from 'react';
import Navbar from '@/components/Navbar';
import StoryCarousel from '@/components/StoryCarousel';
import FeatureCards from '@/components/FeatureCards';
import BottomCard from '@/components/BottomCard';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white overflow-x-hidden">
      <Navbar />
      <main className="flex-grow px-4 md:px-8 max-w-7xl mx-auto w-full">
        <StoryCarousel />
        <FeatureCards />
        <BottomCard />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
