import React from 'react'

const Services = () => {
  const services = [
    {
      title: "Makeup Artistry",
      description: "Professional makeup services for all occasions",
      price: "Starting at $75",
      features: [
        "Special Event Makeup",
        "Wedding Makeup",
        "Photoshoot Makeup",
        "Everyday Beauty Enhancement",
        "Makeup Consultation"
      ]
    },
    {
      title: "Facial Treatments",
      description: "Rejuvenating skincare treatments",
      price: "Starting at $85",
      features: [
        "Deep Cleansing Facial",
        "Anti-Aging Treatment",
        "Hydrating Facial",
        "Acne Treatment",
        "Custom Skincare Routine"
      ]
    },
    {
      title: "Bridal Packages",
      description: "Complete bridal beauty services",
      price: "Starting at $200",
      features: [
        "Bridal Trial Session",
        "Wedding Day Makeup",
        "Bridal Party Styling",
        "Touch-up Kit Included",
        "Timeline Coordination"
      ]
    },
    {
      title: "Eyebrow Services",
      description: "Perfectly shaped and styled brows",
      price: "Starting at $45",
      features: [
        "Eyebrow Shaping",
        "Tinting",
        "Lamination",
        "Microblading Consultation",
        "Maintenance Appointments"
      ]
    },
    {
      title: "Lash Services",
      description: "Enhance your natural lashes",
      price: "Starting at $65",
      features: [
        "Lash Extensions",
        "Lash Lift & Tint",
        "Strip Lashes Application",
        "Lash Care Consultation",
        "Maintenance & Fills"
      ]
    },
    {
      title: "Hair Styling",
      description: "Professional hair styling services",
      price: "Starting at $55",
      features: [
        "Blowouts & Styling",
        "Updos & Special Styles",
        "Hair Accessories",
        "Bridal Hair Styling",
        "Event Hair Preparation"
      ]
    }
  ]

  return (
    <div className="min-h-screen text-[hsl(var(--foreground))]">
      {/* Header Section */}
      <section className="py-20 animated-gradient pattern-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our Services
          </h1>
          <p className="text-xl text-white/85 max-w-3xl mx-auto">
            Discover our comprehensive range of beauty services designed to enhance your natural beauty and boost your confidence.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="glass-card lift rounded-xl overflow-hidden">
                <div className="p-8">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-[hsl(var(--primary))] rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                    <p className="text-white/80 mb-4">{service.description}</p>
                    <div className="text-2xl font-bold text-[hsl(var(--primary))] mb-6">{service.price}</div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <svg className="w-5 h-5 text-[hsl(var(--primary))] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-white/85">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className="w-full bg-[hsl(var(--primary))] hover:opacity-90 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-200 shine">
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Information */}
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
              Call us at (555) 123-4567 or visit our contact page to book your appointment.
            </p>
            <button className="bg-white text-[hsl(var(--primary))] hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-200 shine">
              Book Appointment
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services