import { useEffect, useRef } from 'react'

const SERVICES = [
  {
    icon: '💍',
    name: 'Wedding Photography',
    desc: 'Comprehensive wedding day coverage capturing every precious moment — from the first look to the final dance.',
    features: ['Full-day coverage', 'Candid & posed portraits', 'Bridal preparations', 'Ceremony & reception', 'Edited high-res gallery'],
  },
  {
    icon: '💑',
    name: 'Pre-Wedding Shoots',
    desc: 'Romantic, cinematic couple sessions at beautiful locations crafted to tell your unique love story.',
    features: ['Outdoor & indoor options', 'Multiple outfit changes', 'Creative concepts', 'Drone shots available', 'Same-day preview'],
  },
  {
    icon: '👤',
    name: 'Portrait Photography',
    desc: 'Expressive portraits that reveal your authentic self — ideal for professional headshots, personal branding, or art.',
    features: ['Studio & natural light', 'Individual & group', 'Expression coaching', 'Quick turnaround', 'Retouched edits'],
  },
  {
    icon: '🎨',
    name: 'Photo Editing & Retouching',
    desc: 'Professional post-processing with cinematic color grading, skin retouching, and creative edits for your existing photos.',
    features: ['Color grading & LUTs', 'Skin retouching', 'Background enhancement', 'Batch editing', 'RAW file processing'],
  },
  {
    icon: '🌅',
    name: 'Outdoor & Travel Shoots',
    desc: 'Adventure sessions at scenic locations — mountains, lakes, heritage sites, and golden-hour fields.',
    features: ['On-location scouting', 'Golden hour sessions', 'Heritage site shoots', 'Nature & landscape', 'Travel photography'],
  },
  {
    icon: '🎉',
    name: 'Events & Celebrations',
    desc: "Professional coverage for birthdays, engagements, naming ceremonies, and all life's milestone celebrations.",
    features: ['Birthday parties', 'Engagement ceremonies', 'Baby & maternity', 'Family portraits', 'Candid documentation'],
  },
]

export default function Services() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.service-card').forEach((card, i) => {
              card.style.animationDelay = `${i * 0.1}s`
              card.classList.add('animate-in')
            })
          }
        })
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" className="services" ref={sectionRef} aria-label="Photography services">
      <div className="container">
        <div className="section-header">
          <span className="section-label">What I Offer</span>
          <h2 className="section-title">
            Photography <span className="text-gold">Services</span>
          </h2>
          <div className="gold-divider" />
          <p className="section-subtitle">
            From intimate portraits to grand wedding celebrations — every service crafted with passion, precision, and artistry.
          </p>
        </div>

        <div className="services-grid">
          {SERVICES.map((service, i) => (
            <div key={i} className="service-card" role="article">
              <div className="service-card-accent" aria-hidden="true" />
              <span className="service-icon" aria-hidden="true">{service.icon}</span>
              <h3 className="service-name">{service.name}</h3>
              <p className="service-desc">{service.desc}</p>
              <ul className="service-features">
                {service.features.map((f, j) => (
                  <li key={j}>{f}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Booking CTA */}
        <div style={{ textAlign: 'center', marginTop: '60px' }}>
          <a
            id="services-book-cta"
            href="https://wa.me/919032002153?text=Hi%20Akshay!%20I'm%20interested%20in%20booking%20a%20photography%20session."
            className="btn-primary"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'inline-flex' }}
          >
            <span>Book a Session</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
