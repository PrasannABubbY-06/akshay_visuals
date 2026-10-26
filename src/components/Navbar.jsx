import { useState, useEffect } from 'react'

const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Portfolio', href: '#gallery' },
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`} role="navigation" aria-label="Main navigation">
        <a className="nav-logo" onClick={(e) => handleNavClick(e, '#home')} href="#home">
          <div className="nav-logo-icon">
            <img src="/images/akshay-profile.jpg" alt="Akshay Visuals" style={{ objectFit: 'cover', objectPosition: 'center top' }} />
          </div>
          <div className="nav-logo-text">
            <span className="nav-logo-brand">Akshay Visuals</span>
            <span className="nav-logo-tagline">Photographer &amp; Editor</span>
          </div>
        </a>

        <ul className="nav-links" role="list">
          {NAV_ITEMS.map(item => (
            <li key={item.href}>
              <a href={item.href} onClick={(e) => handleNavClick(e, item.href)}>
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="https://wa.me/919032002153?text=Hi%20Akshay!%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20book%20a%20session."
              className="nav-cta"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book Now
            </a>
          </li>
        </ul>

        <button
          id="nav-hamburger"
          className={`nav-hamburger${mobileOpen ? ' open' : ''}`}
          onClick={() => setMobileOpen(p => !p)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <div className={`nav-mobile${mobileOpen ? ' open' : ''}`} role="dialog" aria-modal="true">
        {NAV_ITEMS.map(item => (
          <a key={item.href} href={item.href} onClick={(e) => handleNavClick(e, item.href)}>
            {item.label}
          </a>
        ))}
        <a
          href="https://wa.me/919032002153?text=Hi%20Akshay!%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20book%20a%20session."
          target="_blank"
          rel="noopener noreferrer"
          style={{ background: 'var(--gold-gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
        >
          Book Now
        </a>
      </div>
    </>
  )
}
