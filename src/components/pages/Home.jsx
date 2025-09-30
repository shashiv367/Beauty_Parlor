import React from 'react'
import bbbImg from '../../assets/bbb.png'
import beImg from '../../assets/be.png'
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
          observer.unobserve(entry.target)
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
      <section className="relative py-20 animated-gradient pattern-soft text-[hsl(var(--card-foreground))]" id="services">
        {/* Decorative beautician item icons (brush, compact, lipstick) */}
        <div className="pointer-events-none absolute inset-0">
          {/* Lipstick */}
          <svg className="decor-icon decor-delay-1 absolute top-28 -left-1 w-7 h-7 text-[hsl(var(--primary))]/70" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M7 11h10v9a2 2 0 01-2 2H9a2 2 0 01-2-2v-9z"/>
            <path d="M11 2.5c0-.83.67-1.5 1.5-1.5S14 1.67 14 2.5V11h-3V2.5z"/>
          </svg>
          {/* Powder compact disc */}
          <svg className="decor-icon decor-delay-2 absolute bottom-8 left-16 w-9 h-9 text-white/30" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <circle cx="12" cy="9" r="7"/>
            <rect x="4" y="18" width="16" height="3" rx="1.5"/>
          </svg>
          {/* Scissors */}
          <svg className="decor-icon decor-delay-3 absolute bottom-24 right-24 w-7 h-7 text-[hsl(var(--primary))]/60" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M9 12a3 3 0 11-3-3 3 3 0 013 3zm9 3a3 3 0 10-3-3 3 3 0 003 3z"/>
            <path d="M7.2 10.8L20 4l-1-2-13 7 1.2 1.8zM9 13l4 6 2-1-4-6-2 1z"/>
          </svg>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Services
            </h2>
            <p className="text-xl text-white max-w-2xl mx-auto">
              Professional beauty services designed to enhance your natural beauty and boost your confidence.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8" id="services-grid">
            <Card className="glass-card lift text-center transition-shadow duration-200 reveal-card">
              <CardHeader>
                <div className="w-16 h-16 bg-[hsl(var(--primary))] rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                </div>
                <CardTitle>Skin</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Professional makeup services for special occasions, weddings, and everyday beauty enhancement.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="glass-card lift text-center transition-shadow duration-200 reveal-card">
              <CardHeader>
                <div className="w-16 h-16 bg-[hsl(var(--primary))] rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                  </svg>
                </div>
                <CardTitle>Hair</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Rejuvenating facial treatments and skincare routines tailored to your skin type and concerns.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="glass-card lift text-center transition-shadow duration-200 reveal-card">
              <CardHeader>
                <div className="w-16 h-16 bg-[hsl(var(--primary))] rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <CardTitle>Makeup & Bridal Packages</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                Professional makeup services for special occasions, weddings and Complete bridal beauty packages including bridal party styling.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-[hsl(var(--primary))] hover:opacity-90 text-[hsl(var(--primary-foreground))] shine">
              <Link to="/services">
                Explore All Services
              </Link>
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
      <section className="py-20 text-[hsl(var(--foreground))] bg-gradient-to-br from-[hsl(var(--background))] via-[hsl(var(--gradient-via))] to-[hsl(var(--background))]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="brand-heading text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-4">
                <span className="text-white/85">About </span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-[hsl(var(--primary))]">
                  Sweety's Beauty Spot
                </span>
              </h2>
              <p className="text-lg text-white mb-6">
                With years of experience in the beauty industry, Sweety's Beauty Spot has been helping clients 
                enhance their natural beauty and boost their confidence. Our team of certified professionals 
                uses only the highest quality products and latest techniques.
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
                <p>Kukatpally • Call: 9100350293</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative py-20 text-white overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--primary))] via-[hsl(var(--gradient-via))] to-[hsl(var(--background))] opacity-95" />
        {/* Animated gradient overlay */}
        <div className="pointer-events-none absolute inset-0 animated-gradient opacity-35 mix-blend-overlay" />
        {/* Soft radial accents */}
        <div className="pointer-events-none absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full bg-[hsl(var(--primary))]/35 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -right-40 w-[560px] h-[560px] rounded-full bg-white/15 blur-3xl" />
        {/* Extra gradient richness */}
        <div className="pointer-events-none absolute inset-0 opacity-70 mix-blend-overlay bg-[radial-gradient(800px_400px_at_20%_20%,hsl(var(--gradient-end))_0%,transparent_60%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-60 mix-blend-soft-light bg-[radial-gradient(700px_360px_at_80%_70%,hsl(var(--primary))_0%,transparent_65%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-50 bg-[conic-gradient(from_140deg_at_50%_50%,hsl(var(--primary))/0.0_0deg,hsl(var(--primary))/0.25_120deg,hsl(var(--gradient-end))/0.25_240deg,hsl(var(--primary))/0.0_360deg)]" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Look?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Book your appointment today and experience the Sweety's Beauty Spot difference.
          </p>
          <Button asChild size="lg" variant="secondary" className="rounded-full px-8 py-6 font-semibold bg-white text-[hsl(var(--primary))] hover:bg-gray-100">
            <Link to="/contact"></Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

export default Home
