
import React from 'react';
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeaturedContent from '@/components/FeaturedContent';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <FeaturedContent />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
