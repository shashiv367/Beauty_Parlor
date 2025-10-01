import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="text-[hsl(var(--foreground))] bg-gradient-to-b from-[hsl(var(--gradient-via))] to-[hsl(var(--background))]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid md:grid-cols-4 gap-5">
          {/* Brand Name and Description */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center mb-6">
              <h2 className="text-2xl font-bold text-[hsl(var(--foreground))]">
                Sweety's Beauty Spot
              </h2>
            </Link>
            <p className="text-white/80 mb-6 max-w-md">
              Your premier destination for professional beauty services. We specialize in making you look and feel your absolute best with our expert team and high-quality treatments.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Instagram" className="w-10 h-10 bg-[hsl(var(--primary))] rounded-full flex items-center justify-center hover:opacity-90 transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 2c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3h10zm-5 3.5A5.5 5.5 0 1017.5 13 5.5 5.5 0 0012 7.5zm0 2A3.5 3.5 0 1115.5 13 3.5 3.5 0 0112 9.5zM18 6.2a1 1 0 11-1-1 1 1 0 011 1z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-white/70 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white/70 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/70 hover:text-white transition-colors">Contact me</Link>
              </li>
              <li>
                <Link 
                  to="/#about" 
                  className="text-white/70 hover:text-white transition-colors"
                  onClick={(e) => {
                    if (window.location.pathname === '/') {
                      e.preventDefault()
                      document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
                    }
                  }}
                >
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <svg className="w-5 h-5 text-[hsl(var(--primary))] mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p className="text-gray-300">Kukatpally, Hyderabad</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <svg className="w-5 h-5 text-[hsl(var(--primary))] mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <p className="text-gray-300">+91 9100350293</p>
              </div>
              
              <div className="flex items-start">
                <svg className="w-5 h-5 text-[hsl(var(--primary))] mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <p className="text-gray-300">info@sweetysbeautyspot.com</p>
              </div>
              
              <div className="flex items-start">
                <svg className="w-5 h-5 text-[hsl(var(--primary))] mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <a 
                  href="https://www.instagram.com/sweety.beautyspot?igsh=c24yajFqaDhnaWU0" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[hsl(var(--primary))] transition-colors"
                >
                  @sweety.beautyspot
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/70 text-xs">
              © 2024 Sweety's Beauty Spot. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-3 md:mt-0">
              <a href="#" className="text-white/70 hover:text-white text-xs transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-white/70 hover:text-white text-xs transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-white/70 hover:text-white text-xs transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer