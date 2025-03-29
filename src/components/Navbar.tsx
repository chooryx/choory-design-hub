
import React from 'react';
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar = () => {
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="w-full py-4 px-6 md:px-12 border-b border-gray-100">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-1">
            <a href="/" className="inline-block">
              <img 
                src="/lovable-uploads/f0faffa6-cef4-43f4-ab24-57113067e4bf.png" 
                alt="Choory Logo" 
                className="h-10 md:h-12"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            <a href="/apply" className="choory-nav-item">Apply for Blogging</a>
            <a href="/designers" className="choory-nav-item">List of Designers</a>
            <a href="/x" className="choory-nav-item">X</a>
            <a href="/primfeed" className="choory-nav-item">Primfeed</a>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <div className="flex flex-col gap-1.5">
                  <div className="w-6 h-0.5 bg-black"></div>
                  <div className="w-6 h-0.5 bg-black"></div>
                  <div className="w-6 h-0.5 bg-black"></div>
                </div>
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-[73px] left-0 right-0 bg-white z-50 border-b border-gray-100 animate-fade-in">
          <div className="container mx-auto py-4 px-6">
            <nav className="flex flex-col space-y-4">
              <a href="/apply" className="choory-nav-item py-2">Apply for Blogging</a>
              <a href="/designers" className="choory-nav-item py-2">List of Designers</a>
              <a href="/x" className="choory-nav-item py-2">X</a>
              <a href="/primfeed" className="choory-nav-item py-2">Primfeed</a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
