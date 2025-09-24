import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../ui/button'

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 text-white bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          {/* Brand Name */}
          <Link to="/" className="flex items-center">
            <div className="leading-tight text-center">
              <h1 className="brand-heading text-3xl sm:text-4xl font-extrabold text-white">
                Sweety's Beauty Spot
              </h1>
              <p className="text-[10px] sm:text-xs uppercase tracking-widest text-white/80">
                Skin | Hair | Makeup
              </p>
            </div>
          </Link>
          
          {/* Navigation */}
          <nav className="hidden md:flex space-x-8 ml-auto">
            <Link 
              to="/" 
              className="text-white hover:text-[hsl(var(--primary))] transition-colors duration-200 font-medium uppercase tracking-wide text-sm"
            >
              About
            </Link>
            <Link 
              to="/services" 
              className="text-white hover:text-[hsl(var(--primary))] transition-colors duration-200 font-medium uppercase tracking-wide text-sm"
            >
              Services
            </Link>
            <Link 
              to="/contact" 
              className="text-white hover:text-[hsl(var(--primary))] transition-colors duration-200 font-medium uppercase tracking-wide text-sm"
            >
              Contact me
            </Link>
          </nav>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" className="text-white hover:text-[hsl(var(--primary))]">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header