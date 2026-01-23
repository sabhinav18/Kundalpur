// 
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Sun } from 'lucide-react';
import logo from '../assets/logo1.png';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'श्री बड़े बाबा', href: '#home' },
    { name: 'परिचय', href: '#about' },
    { name: 'योजनाओं', href: '#schemes' },
    { name: 'दान', href: '#donation' },
    { name: 'अन्य सुविधाएं', href: '#facilities' },
    { name: 'आवास', href: '#room-booking' },
    { name: 'फोटो गैलरी', href: '#gallery' },
    { name: 'सहायता', href: '#support' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="flex items-center space-x-2">
              {/* <Sun className={`h-8 w-8 ${scrolled ? 'text-temple-orange' : 'text-white'}`} /> */}
              {/* <span className={`text-2xl font-bold uppercase tracking-wider ${scrolled ? 'text-gray-900' : ' text-temple-gold'}`}>
                {/* Shri Bade Baba Temple */}
                {/* श्री बड़े बाबा मंदिर */}

              {/* </span> */ }

               <img
                src={logo}
                alt="Shri Bade Baba Temple Logo"
                className={`h-12 w-auto transition-all duration-300 ${
                  scrolled ? 'brightness-100' : 'brightness-125'
                }`}
              />
            </a>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium hover:text-temple-orange transition-colors ${
                    scrolled ? 'text-gray-700' : 'text-white'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <a href="#donation" className="bg-temple-orange hover:bg-temple-red text-white px-4 py-2 rounded-full text-sm font-medium transition-colors">
                दान करें
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md ${scrolled ? 'text-gray-700' : 'text-white'}`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full top-full left-0">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-temple-orange hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#donation" 
              className="block w-full text-left bg-temple-orange text-white px-3 py-2 rounded-md text-base font-medium mt-2"
              onClick={() => setIsOpen(false)}
            >
              दान करें
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
