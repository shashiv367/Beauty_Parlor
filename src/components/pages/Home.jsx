import React from 'react'
import bbbImg from '../../assets/bbb.png'
import beImg from '../../assets/be.png'
import bg2 from '../background/bg4.mp4'
import { Link } from 'react-router-dom'
import { Button } from '../ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import Typewriter from '../ui/Typewriter'
import { useEffect } from 'react'

const Home = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view')
        } else {
          entry.target.classList.remove('in-view')
        }
      })
    }, { threshold: 0.25 })

    document.querySelectorAll('.reveal-card').forEach((el, i) => {
      // slight stagger
      el.style.animationDelay = `${i * 120}ms`
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  // Scroll to section if hash is present in URL
  useEffect(() => {
    const hash = window.location.hash
    if (hash === '#about') {
      setTimeout(() => {
        const element = document.getElementById('about')
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }, 100)
    }
  }, [])
  return (
    <div className="min-h-screen">
      {/* Hero Section - Full Bleed Background Template */}
      <section
        className="relative min-h-[92vh] flex items-start pt-20 md:pt-28"
        style={{ backgroundImage: `url(${bbbImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        {/* Dark vignette overlay for readability */}
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.45)]" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start gap-1 mt-6 md:mt-12 lg:mt-16 min-h-[7rem] md:min-h-[8rem]">
            <Typewriter as="h1" className="text-white/40 text-6xl md:text-7xl font-bold tracking-wide leading-tight" text="SELF-CARE IS" startDelayMs={200} speedMs={70} />
            <Typewriter as="h1" className="text-white/40 text-6xl md:text-7xl font-bold tracking-wide leading-tight" text="IMPORTANT." startDelayMs={1100} speedMs={70} />
          </div>
          <p className="mt-6 text-white/85 text-lg md:text-xl max-w-2xl">
          All you need is one expert—for skin, hair, and makeup that feels like you.
          </p>
          {/* CTA moved to bottom-left box */}
        </div>
        {/* Bottom-left CTA box */}
        <div className="absolute left-24 bottom-6 z-10">
          <div className="bg-[hsl(var(--primary))]/30 backdrop-blur-md border border-[hsl(var(--primary))]/40 rounded-3xl shadow-lg p-4 w-[260px]">
            <Button asChild size="lg" className="w-full bg-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/90 text-white rounded-2xl font-semibold">
              <Link to="/contact" className="block w-full text-center">BOOK YOUR APPOINTMENT!</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="relative py-20 overflow-hidden text-[hsl(var(--card-foreground))]" id="services">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={bg2} type="video/mp4" />
        </video>
        
        {/* Dark overlay for better readability */}
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Styled Services Heading */}
    <div className="relative flex items-center justify-center mb-8 overflow-hidden min-h-[200px]">
      {/* Big outlined background text */}
      <h1 className="absolute text-[6rem] md:text-[10rem] lg:text-[12rem] font-bold text-transparent stroke-text uppercase tracking-tight whitespace-nowrap">
        Services
      </h1>

      {/* Foreground gradient text */}
      <h2 className="relative text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[hsl(var(--primary))] via-purple-300 to-pink-200 text-transparent bg-clip-text z-10">
              Services
            </h2>
    </div>
    
    <div className="text-center mb-16">
            <p className="text-xl text-white max-w-2xl mx-auto">
              Professional beauty services designed to enhance your natural beauty and boost your confidence.
            </p>
          </div>
          
    {/* Roadmap Layout */}
    <div className="relative max-w-4xl mx-auto" id="services-roadmap">
      {/* Center Line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[hsl(var(--primary))]/60 via-[hsl(var(--primary))] to-[hsl(var(--primary))]/60 -translate-x-1/2 hidden md:block" />

          {/* Roadmap Item 1 - Left */}
          <div className="relative flex items-center mb-16 md:mb-8">
            <div className="w-full md:w-7/12 md:pl-20">
            <Card className="glass-card lift text-center opacity-0 reveal-card min-h-[180px] flex flex-col rounded-sm">
             <CardHeader className="flex-grow">
               <div className="w-14 h-14 bg-[hsl(var(--primary))] rounded-sm flex items-center justify-center mx-auto mb-4">
                 <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                </div>
               <CardTitle className="text-2xl mb-4">Skin</CardTitle>
              </CardHeader>
             <CardContent className="pb-3">
               <CardDescription className="text-base leading-relaxed">
                  Professional makeup services for special occasions, weddings, and everyday beauty enhancement.
                </CardDescription>
              </CardContent>
            </Card>
        </div>
        {/* Center Node */}
        <div className="absolute left-1/2 -translate-x-1/2 w-8 h-8 bg-[hsl(var(--primary))] rounded-full border-4 border-[hsl(var(--background))] shadow-lg hidden md:block z-10" />
        <div className="w-full md:w-5/12"></div>
      </div>
      
      {/* Roadmap Item 2 - Right */}
<div className="relative flex items-center mb-16 md:mb-8">
  <div className="w-full md:w-5/12"></div>
  {/* Center Node */}
  <div className="absolute left-1/2 -translate-x-1/2 w-8 h-8 bg-[hsl(var(--primary))] rounded-full border-4 border-[hsl(var(--background))] shadow-lg hidden md:block z-20" />
  
  {/* Hair Card */}
  <div className="w-full md:w-7/12 md:pl-2 md:pr-5">   {/* ⬅️ Changed from md:pl-70 to md:pl-20 */}
     <Card className="glass-card lift text-center opacity-0 reveal-card min-h-[180px] flex flex-col rounded-sm">
       <CardHeader className="flex-grow">
         <div className="w-14 h-14 bg-[hsl(var(--primary))] rounded-sm flex items-center justify-center mx-auto mb-4">
           <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                  </svg>
                </div>
         <CardTitle className="text-2xl mb-4">Hair</CardTitle>
              </CardHeader>
       <CardContent className="pb-3">
         <CardDescription className="text-base leading-relaxed">
                  Rejuvenating facial treatments and skincare routines tailored to your skin type and concerns.
                </CardDescription>
              </CardContent>
            </Card>
  </div>
</div>


      {/* Roadmap Item 3 - Left */}
      <div className="relative flex items-center mb-8">
        <div className="w-full md:w-7/12 md:pl-12">
           <Card className="glass-card lift text-center transition-all duration-700 opacity-0 translate-x-[-40px] reveal-card min-h-[180px] flex flex-col rounded-sm">
             <CardHeader className="flex-grow">
               <div className="w-14 h-14 bg-[hsl(var(--primary))] rounded-sm flex items-center justify-center mx-auto mb-4">
                 <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
               <CardTitle className="text-2xl mb-4">Makeup & Bridal Packages</CardTitle>
              </CardHeader>
             <CardContent className="pb-3">
               <CardDescription className="text-base leading-relaxed">
                Complete bridal beauty packages, professional event makeup, and full styling.
                </CardDescription>
              </CardContent>
            </Card>
        </div>
        <div className="absolute left-1/2 -translate-x-1/2 w-8 h-8 bg-[hsl(var(--primary))] rounded-full border-4 border-[hsl(var(--background))] shadow-lg hidden md:block z-10" />
        <div className="w-full md:w-5/12"></div>
      </div>
          </div>
          
          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-[hsl(var(--primary))] hover:opacity-90 text-[hsl(var(--primary-foreground))] shine">
        <Link to="/services">Explore All Services</Link>
            </Button>
          </div>
        </div>
      </section>


      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-[hsl(var(--background))] via-[hsl(var(--gradient-via))] to-[hsl(var(--background))] text-[hsl(var(--foreground))]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-white/80 max-w-2xl mx-auto">Real experiences from happy clients who trust Sweety's Beauty Spot for their special moments.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-card lift rounded-xl p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-[hsl(var(--primary))] text-white flex items-center justify-center font-bold mr-3">AR</div>
                <div>
                  <div className="font-semibold">Aisha R.</div>
                  <div className="text-white/70 text-sm">Bridal Makeup</div>
                </div>
              </div>
              <div className="flex text-yellow-300 mb-3" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.802 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118L10 13.348l-2.984 2.134c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L3.38 8.72c-.783-.57-.38-1.81.588-1.81H7.43a1 1 0 00.95-.69l1.07-3.292z"/></svg>
                ))}
              </div>
              <p className="text-white/90">Sweety made me feel absolutely stunning on my wedding day. The makeup lasted all night and looked flawless in photos!</p>
            </div>

            <div className="glass-card lift rounded-xl p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-[hsl(var(--primary))] text-white flex items-center justify-center font-bold mr-3">KM</div>
                <div>
                  <div className="font-semibold">Karin M.</div>
                  <div className="text-white/70 text-sm">Skincare Treatments</div>
                </div>
              </div>
              <div className="flex text-yellow-300 mb-3" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.802 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118L10 13.348l-2.984 2.134c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L3.38 8.72c-.783-.57-.38-1.81.588-1.81H7.43a1 1 0 00.95-.69l1.07-3.292z"/></svg>
                ))}
              </div>
              <p className="text-white/90">My skin has never felt better. The facial was relaxing and the aftercare tips made a huge difference.</p>
            </div>

            <div className="glass-card lift rounded-xl p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-[hsl(var(--primary))] text-white flex items-center justify-center font-bold mr-3">JS</div>
                <div>
                  <div className="font-semibold">Julia S.</div>
                  <div className="text-white/70 text-sm">Hair & Lashes</div>
                </div>
              </div>
              <div className="flex text-yellow-300 mb-3" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.802 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118L10 13.348l-2.984 2.134c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L3.38 8.72c-.783-.57-.38-1.81.588-1.81H7.43a1 1 0 00.95-.69l1.07-3.292z"/></svg>
                ))}
              </div>
              <p className="text-white/90">Loved my lashes and hair styling! Super professional service and a really welcoming atmosphere.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 text-[hsl(var(--foreground))] bg-gradient-to-br from-[hsl(var(--background))] via-[hsl(var(--gradient-via))] to-[hsl(var(--background))]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="brand-heading text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-2">
                <span className="text-white/85">About </span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-[hsl(var(--primary))]">
                  Sweety's Beauty Spot
                </span>
              </h2>
              
              {/* Your Glow, My Passion - Special Tagline */}
              <div className="mb-6">
                <p className="text-2xl md:text-3xl lg:text-4xl font-bold italic bg-clip-text text-transparent bg-gradient-to-r from-[hsl(var(--primary))] via-pink-300 to-purple-300 tracking-wide animate-pulse">
                  "Your Glow, My Passion"
                </p>
              </div>
              
              <p className="text-lg text-white mb-6">
              At Sweety’s Beauty Spot, it’s just me bringing my passion and years of experience in beauty care to help you look and feel your absolute best. I believe beauty isn’t about hiding who you are, but celebrating your natural glow. That’s why every treatment I offer is tailored just for you – whether it’s flawless skin, healthy hair, or a refreshing makeover, you’ll always receive my personal touch and full attention.
              </p>
              <p className="text-lg text-white mb-8">
                We believe that beauty is about feeling confident in your own skin. Our personalized approach 
                ensures that every client receives treatments tailored to their unique needs and preferences.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[hsl(var(--primary))]">10+</div>
                  <div className="text-white">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[hsl(var(--primary))]">1000+</div>
                  <div className="text-white">Happy Clients</div>
                </div>
              </div>
            </div>
            <div className="glass-card p-8 rounded-xl shadow-lg">
              <div className="aspect-square rounded-lg overflow-hidden">
                <img src={beImg} alt="Professional Beauty Services" className="w-full h-full object-cover" />
              </div>
              <div className="text-center mt-4">
                <p>Kukatpally, Hyderabad • Call: +91 9100350293</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Combined CTA & Footer Section */}
      <footer className="text-[hsl(var(--foreground))] bg-gradient-to-b from-[hsl(var(--gradient-via))] to-[hsl(var(--background))]">
        {/* CTA Content */}
        <section className="py-20 bg-gradient-to-br from-[hsl(var(--background))] via-[hsl(var(--gradient-via))] to-[hsl(var(--background))] text-[hsl(var(--card-foreground))]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">
            Ready to Book Your Service?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center glass-card p-6 rounded-xl">
              <div className="w-16 h-16 bg-[hsl(var(--primary))]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[hsl(var(--primary))]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Easy Booking</h3>
              <p className="text-white/80">Schedule your appointment online or call us directly</p>
            </div>
            
            <div className="text-center glass-card p-6 rounded-xl">
              <div className="w-16 h-16 bg-[hsl(var(--primary))]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[hsl(var(--primary))]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Flexible Hours</h3>
              <p className="text-white/80">Open 7 days a week with extended hours for your convenience</p>
            </div>
            
            <div className="text-center glass-card p-6 rounded-xl">
              <div className="w-16 h-16 bg-[hsl(var(--primary))]//20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[hsl(var(--primary))]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Guarantee</h3>
              <p className="text-white/80">100% satisfaction guarantee on all our services</p>
            </div>
          </div>
          
          <div className="bg-[hsl(var(--primary))] text-white p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-4">Contact Us Today</h3>
            <p className="text-white/90 mb-6">
              Call us at +91 9100350293 or visit our contact page to book your appointment in Kukatpally, Hyderabad.
            </p>
            <button className="bg-white text-[hsl(var(--primary))] hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-200 shine">
              Book Appointment
            </button>
          </div>
        </div>
      </section>

        {/* Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 pt-12 border-t border-white/10">
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
                  <Link to="/" className="text-white/70 hover:text-white transition-colors">About</Link>
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
    </div>
  )
}

export default Home
