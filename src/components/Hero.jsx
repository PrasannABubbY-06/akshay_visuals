import { useEffect, useRef } from 'react'

export default function Hero({ openLightbox }) {
  const heroRef = useRef(null)

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  // Parallax on scroll
  useEffect(() => {
    const img = heroRef.current?.querySelector('.hero-bg-img')
    if (!img) return
    const onScroll = () => {
      const scrolled = window.scrollY
      img.style.transform = `scale(1.1) translateY(${scrolled * 0.25}px)`
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const heroImages = [
    '/images/10.jpg', '/images/08.jpg', '/images/11.jpg', '/images/12.jpg',
    '/images/13.jpg', '/images/19.jpg', '/images/20.jpg'
  ]

  return (
    <section id="home" className="hero" ref={heroRef} aria-label="Hero section">
      <div className="hero-bg">
        <video
          src="/videos/akshay-hero.mp4"
          autoPlay
          muted
          loop
          playsInline
          poster="/images/akshay-profile.jpg"
          className="hero-bg-video"
          style={{ objectFit: 'cover', objectPosition: 'center top' }}
        />
        <div className="hero-overlay" />
        <div className="hero-overlay-bottom" />
      </div>

      <div className="hero-content">
        <div className="hero-badge">
          <span className="hero-badge-dot" />
          Available for Bookings · Jagtial, Telangana
        </div>

        <h1 className="hero-title text-gold">Akshay</h1>
        <p className="hero-title-sub">Visuals</p>

        <p className="hero-tagline">
          Capturing Moments. Creating Memories.
        </p>

        <div className="hero-cta-group">
          <button
            id="hero-view-portfolio"
            className="btn-primary"
            onClick={() => scrollToSection('gallery')}
          >
            <span>View Portfolio</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
          <a
            id="hero-book-whatsapp"
            href="https://wa.me/919032002153?text=Hi%20Akshay!%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20book%20a%20photography%20session."
            className="btn-secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            WhatsApp Me
          </a>
        </div>
      </div>

      {/* Stats */}
      <div className="hero-stats" aria-label="Experience statistics">
        <div className="hero-stat">
          <div className="hero-stat-num">5+</div>
          <div className="hero-stat-label">Years Experience</div>
        </div>
        <div className="hero-stat">
          <div className="hero-stat-num">500+</div>
          <div className="hero-stat-label">Sessions Done</div>
        </div>
        <div className="hero-stat">
          <div className="hero-stat-num">100%</div>
          <div className="hero-stat-label">Client Satisfaction</div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        id="hero-scroll-down"
        className="hero-scroll"
        onClick={() => scrollToSection('about')}
        aria-label="Scroll to about section"
        style={{ background: 'none', border: 'none' }}
      >
        <span className="hero-scroll-text">Scroll</span>
        <div className="hero-scroll-line" />
      </button>
    </section>
  )
}
