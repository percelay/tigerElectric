'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md ${
        scrolled
          ? 'bg-bg/90 border-b border-white/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 group">
          <div className="w-10 h-10 relative flex-shrink-0">
            <Image
              src="/images/cropped-Tiger-Electric-Icon.png"
              alt="Tiger Electrical Services logo"
              fill
              className="object-contain"
              sizes="40px"
            />
          </div>
          <div className="leading-none">
            <p className="text-white font-black text-sm tracking-widest uppercase group-hover:text-primary transition-colors">Tiger Electrical</p>
            <p className="text-primary text-[10px] tracking-[0.2em] uppercase font-bold">Services</p>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-text-muted hover:text-primary transition-colors duration-200 text-xs tracking-[0.2em] uppercase font-semibold"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-primary text-white px-5 py-2.5 text-xs font-black tracking-widest uppercase hover:bg-white hover:text-bg transition-colors duration-200"
          >
            Get a Quote
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white p-1"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } bg-bg/98 border-t border-white/10`}
      >
        <div className="px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-white hover:text-primary transition-colors text-base font-semibold tracking-wide"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="bg-primary text-white px-5 py-3 text-sm font-black tracking-widest uppercase text-center hover:bg-white hover:text-bg transition-colors mt-2"
          >
            Get a Quote
          </a>
        </div>
      </div>
    </header>
  );
}
