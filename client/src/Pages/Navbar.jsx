import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <div className="glass-pill w-full max-w-5xl h-14 flex items-center justify-between px-6 rounded-full">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <span className="syne-headline text-xl tracking-tighter text-brand-accent">
            HEALIO
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium opacity-80 font-dmsans">
          <a className="hover:text-brand-accent transition-colors text-white" href="#features">
            Features
          </a>
          <a className="hover:text-brand-accent transition-colors text-white" href="#vision">
            About
          </a>
          <a className="hover:text-brand-accent transition-colors text-white" href="#stats">
            Impact
          </a>
          <a className="hover:text-brand-accent transition-colors text-white" href="#pricing">
            Pricing
          </a>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center">
          <Link
            to="/"
            className="bg-brand-accent text-brand-black px-5 py-2 rounded-full text-sm font-bold hover:opacity-90 transition-opacity font-dmsans"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-0.5 bg-white transition-transform duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-5 h-0.5 bg-white transition-opacity duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-0.5 bg-white transition-transform duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`absolute top-20 left-4 right-4 glass-pill rounded-2xl px-6 py-6 flex-col gap-4 font-dmsans transition-all duration-300 ${
          mobileOpen ? 'flex opacity-100' : 'hidden opacity-0'
        } md:hidden`}
      >
        <a className="text-white/80 hover:text-brand-accent transition-colors text-sm font-medium py-2" href="#features">
          Features
        </a>
        <a className="text-white/80 hover:text-brand-accent transition-colors text-sm font-medium py-2" href="#vision">
          About
        </a>
        <a className="text-white/80 hover:text-brand-accent transition-colors text-sm font-medium py-2" href="#stats">
          Impact
        </a>
        <a className="text-white/80 hover:text-brand-accent transition-colors text-sm font-medium py-2" href="#pricing">
          Pricing
        </a>
        <Link
          to="/"
          className="bg-brand-accent text-brand-black px-5 py-3 rounded-full text-sm font-bold text-center hover:opacity-90 transition-opacity mt-2"
        >
          Get Started
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
