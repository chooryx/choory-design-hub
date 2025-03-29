
import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-gray-100">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <img 
              src="/lovable-uploads/f0faffa6-cef4-43f4-ab24-57113067e4bf.png" 
              alt="Choory Logo" 
              className="h-8 mb-4"
            />
            <p className="text-sm text-gray-600 max-w-xs">
              Choory is a design hub for creative professionals seeking inspiration and connection.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/apply" className="text-sm hover:underline">Apply for Blogging</a></li>
              <li><a href="/designers" className="text-sm hover:underline">List of Designers</a></li>
              <li><a href="/x" className="text-sm hover:underline">X</a></li>
              <li><a href="/primfeed" className="text-sm hover:underline">Primfeed</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm hover:underline">Instagram</a></li>
              <li><a href="#" className="text-sm hover:underline">Twitter</a></li>
              <li><a href="#" className="text-sm hover:underline">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-gray-100">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} Choory Design Hub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
