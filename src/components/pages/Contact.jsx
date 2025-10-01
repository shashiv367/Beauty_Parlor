import React, { useState } from 'react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { Textarea } from '../ui/textarea'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import Footer from '../footer/Footer'


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    service: '',
    date: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const whatsappNumber = '919100350293' // country code + number
    const lines = [
      `New Booking Request`,
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Phone: ${formData.phone}`,
      `Address: ${formData.address || 'N/A'}`,
      `Service: ${formData.service}`,
      `Preferred Date: ${formData.date || 'N/A'}`,
      `Message: ${formData.message || 'N/A'}`,
    ]
    const text = encodeURIComponent(lines.join('\n'))
    const url = `https://wa.me/${whatsappNumber}?text=${text}`
    window.open(url, '_blank')
  }

  return (
    <div className="min-h-screen text-[hsl(var(--foreground))]">
      {/* Header Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-[hsl(var(--background))] via-[hsl(var(--gradient-via))] to-[hsl(var(--background))]">
        {/* Gradient overlay effects */}
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--primary))/0.3,transparent_50%)]" />
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(ellipse_at_bottom_left,hsl(var(--gradient-end))/0.3,transparent_50%)]" />
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Contact
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Ready to book your appointment or have questions? We'd love to hear from you!
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">Get In Touch</h2>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[hsl(var(--primary))] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
                    <p className="text-white">+91 9100350293</p>
                    <p className="text-white text-sm">Mon-Sun: 9:00 AM - 8:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[hsl(var(--primary))] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                    <p className="text-white">info@sweetysbeautyspot.com</p>
                    <p className="text-white text-sm">We'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[hsl(var(--primary))] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Location</h3>
                    <p className="text-white">Kukatpally, Hyderabad</p>
                    <p className="text-white text-sm">Free parking available</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[hsl(var(--primary))] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Hours</h3>
                    <div className="text-white space-y-1">
                      <p>Monday - Friday: 9:00 AM - 8:00 PM</p>
                      <p>Saturday: 8:00 AM - 9:00 PM</p>
                      <p>Sunday: 10:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-12">
                <h3 className="text-xl font-semibold text-white mb-4">Follow Me</h3>
                <div className="flex space-x-4">
                  <a 
                    href="https://www.instagram.com/sweety.beautyspot?igsh=c24yajFqaDhnaWU0" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-[hsl(var(--primary))] rounded-full flex items-center justify-center hover:opacity-90 transition-colors"
                    aria-label="Follow me on Instagram"
                  >
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
    
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="shadow-xl lift text-[hsl(var(--card-foreground))] bg-transparent backdrop-blur-sm border border-white/20">
              <CardHeader>
                <CardTitle className="text-3xl">Book Your Appointment</CardTitle>
              </CardHeader>
              <CardContent>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">Address</Label>
                  <Input
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Street, City, State, ZIP"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-white mb-2">
                      Service Interested In *
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[hsl(var(--primary))] focus:border-[hsl(var(--primary))] transition-colors"
                    >
                      <option value="">Select a service</option>
                      <option value="makeup">Makeup Artistry</option>
                      <option value="facial">Facial Treatments</option>
                      <option value="bridal">Bridal Packages</option>
                      <option value="eyebrow">Eyebrow Services</option>
                      <option value="lash">Lash Services</option>
                      <option value="hair">Hair Styling</option>
                      <option value="consultation">Consultation</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-white mb-2">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[hsl(var(--primary))] focus:border-[hsl(var(--primary))] transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Additional Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your specific needs or any questions you have..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[hsl(var(--primary))] hover:opacity-90 shine"
                  size="lg"
                >
                  Send Booking Request
                </Button>
              </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Contact
