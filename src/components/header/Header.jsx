import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../ui/button'

function Header() {
  return (
    <header className="sticky top-0 z-50 text-[hsl(var(--foreground))] bg-transparent shadow-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-1">
          {/* Brand Name */}
          <Link to="/" className="flex items-center">
            <h1 className="text-2xl font-bold text-[hsl(var(--foreground))]">
              Sweety's Beauty Spot
            </h1>
          </Link>
          
          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link 
              to="/" 
              className="text-white hover:text-[hsl(var(--primary))] transition-colors duration-200 font-medium"
            >
              Home
            </Link>
            <Link 
              to="/services" 
              className="text-white hover:text-[hsl(var(--primary))] transition-colors duration-200 font-medium"
            >
              Services
            </Link>
            <Link 
              to="/contact" 
              className="text-white hover:text-[hsl(var(--primary))] transition-colors duration-200 font-medium"
            >
              Contact
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