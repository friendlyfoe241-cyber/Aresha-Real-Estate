'use client';

import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About Us' },
    { href: '#properties', label: 'Properties' },
    { href: '#services', label: 'Services' },
    { href: '#neighborhoods', label: 'Neighborhoods' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-gold-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3">
            <div className="w-14 h-14 rounded-lg shadow-lg flex-shrink-0 flex items-center justify-center bg-white">
              <Image
                src="/images/logo-main.png"
                alt="Aresha Logo"
                width={56}
                height={32}
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="hidden sm:flex flex-col gap-0.5 bg-white/90 px-2 py-1 rounded-md">
              <div className="relative h-5 w-36 overflow-hidden">
                <Image
                  src="/images/logo-company.png"
                  alt="Aresha Real Estate"
                  fill
                  className="w-full h-auto object-contain object-left"
                />
              </div>
              <div className="relative h-2.5 w-48 overflow-hidden">
                <Image
                  src="/images/logo-slogan.png"
                  alt="Premium Properties in Dubai"
                  fill
                  className="w-full h-auto object-contain object-left"
                />
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-gold-500 transition-colors duration-300 text-sm font-medium tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+971501234567"
              className="flex items-center gap-2 text-gray-300 hover:text-gold-500 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">+971 50 123 4567</span>
            </a>
            <a
              href="#contact"
              className="px-6 py-2.5 bg-gradient-to-r from-gold-500 to-gold-600 text-slate-900 font-semibold rounded-lg hover:from-gold-400 hover:to-gold-500 transition-all duration-300 shadow-lg shadow-gold-500/25"
            >
              Get in Touch
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-gray-300 hover:text-gold-500 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-gray-800">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-300 hover:text-gold-500 transition-colors text-sm font-medium py-2"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="mt-2 px-6 py-3 bg-gradient-to-r from-gold-500 to-gold-600 text-slate-900 font-semibold rounded-lg text-center"
              >
                Get in Touch
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}