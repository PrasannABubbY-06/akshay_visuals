import { useState, useEffect, useRef } from 'react'

// All portfolio images with categories
const ALL_PHOTOS = [
  { src: '/images/10.jpg', alt: 'Couple with Royal Enfield by bridge', category: 'couple' },
  { src: '/images/08.jpg', alt: 'Romantic couple by the lake at dusk', category: 'couple' },
  { src: '/images/07.jpg', alt: 'Couple strolling near clock tower market', category: 'couple' },
  { src: '/images/09.jpg', alt: 'Couple sharing a book outdoors', category: 'portrait' },
  { src: '/images/11.jpg', alt: 'Couple walking in temple corridor', category: 'wedding' },
  { src: '/images/12.jpg', alt: 'Couple walking city street', category: 'couple' },
  { src: '/images/13.jpg', alt: 'Portrait session in golden light', category: 'portrait' },
  { src: '/images/14.jpg', alt: 'Creative outdoor portrait', category: 'portrait' },
  { src: '/images/16.jpg', alt: 'Elegant couple photography', category: 'couple' },
  { src: '/images/17.jpg', alt: 'Outdoor lifestyle portrait', category: 'portrait' },
  { src: '/images/18.jpg', alt: 'Traditional wedding portrait', category: 'wedding' },
  { src: '/images/19.jpg', alt: 'Scenic couple shoot', category: 'couple' },
  { src: '/images/20.jpg', alt: 'Wedding celebration moment', category: 'wedding' },
  { src: '/images/21.jpg', alt: 'Candid couple moment', category: 'couple' },
  { src: '/images/22.jpg', alt: 'Natural light portrait', category: 'portrait' },
  { src: '/images/23.jpg', alt: 'Romantic pre-wedding shoot', category: 'wedding' },
  { src: '/images/02.jpg', alt: 'Creative editorial portrait', category: 'portrait' },
  { src: '/images/03.jpg', alt: 'Couple lifestyle session', category: 'couple' },
  { src: '/images/05.jpg', alt: 'Golden hour outdoor shoot', category: 'outdoor' },
  { src: '/images/06.jpg', alt: 'Dramatic outdoor photography', category: 'outdoor' },
  { src: '/images/0I0A3572.jpg', alt: 'Formal couple portrait', category: 'couple' },
  { src: '/images/0I0A3579.jpg', alt: 'Candid couple photograph', category: 'couple' },
  { src: '/images/0I0A3580.jpg', alt: 'Elegant portrait session', category: 'portrait' },
  { src: '/images/DSC01578.jpg', alt: 'Professional portrait shoot', category: 'portrait' },
  { src: '/images/DSC01587.jpg', alt: 'Outdoor couple photography', category: 'outdoor' },
  { src: '/images/DSC06662.jpg', alt: 'Artistic couple session', category: 'couple' },
  { src: '/images/DSC06684.jpg', alt: 'Natural outdoor portrait', category: 'outdoor' },
  { src: '/images/DSC06701.jpg', alt: 'Wedding photography moment', category: 'wedding' },
  { src: '/images/DSC06743.jpg', alt: 'Creative portrait session', category: 'portrait' },
  { src: '/images/DSC06747.jpg', alt: 'Outdoor lifestyle couple', category: 'outdoor' },
  { src: '/images/DSC06750.jpg', alt: 'Beautiful couple portrait', category: 'couple' },
]

const CATEGORIES = [
  { id: 'all', label: 'All Work' },
  { id: 'couple', label: 'Couple' },
  { id: 'wedding', label: 'Wedding' },
  { id: 'portrait', label: 'Portrait' },
  { id: 'outdoor', label: 'Outdoor' },
]

export default function Gallery({ openLightbox }) {
  const [activeFilter, setActiveFilter] = useState('all')
  const [visible, setVisible] = useState(false)
  const sectionRef = useRef(null)

  const filtered = activeFilter === 'all'
    ? ALL_PHOTOS
    : ALL_PHOTOS.filter(p => p.category === activeFilter)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setVisible(true) }),
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const handleImageClick = (index) => {
    openLightbox(filtered, index)
  }

  return (
    <section id="gallery" className="gallery" ref={sectionRef} aria-label="Portfolio gallery">
      <div className="container">
        <div className={`section-header${visible ? ' animate-in' : ''}`}>
          <span className="section-label">Portfolio</span>
          <h2 className="section-title">
            Visual <span className="text-gold">Stories</span>
          </h2>
          <div className="gold-divider" />
          <p className="section-subtitle">
            Every frame tells a story. Browse through my collection of carefully crafted images.
          </p>
        </div>

        {/* Filters */}
        <div className="gallery-filters" role="group" aria-label="Gallery filters">
          {CATEGORIES.map(cat => (
            <button
              key={cat.id}
              id={`filter-${cat.id}`}
              className={`filter-btn${activeFilter === cat.id ? ' active' : ''}`}
              onClick={() => setActiveFilter(cat.id)}
              aria-pressed={activeFilter === cat.id}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Masonry Gallery */}
        <div className="gallery-masonry" role="list">
          {filtered.map((photo, i) => (
            <div
              key={`${photo.src}-${activeFilter}`}
              className="gallery-item"
              role="listitem"
              style={{
                animationDelay: `${(i % 6) * 0.07}s`,
                opacity: visible ? 1 : 0,
                animation: visible ? `fadeInUp 0.6s ease ${(i % 8) * 0.05}s both` : 'none',
              }}
              onClick={() => handleImageClick(i)}
              tabIndex={0}
              onKeyDown={e => e.key === 'Enter' && handleImageClick(i)}
              role="button"
              aria-label={`View ${photo.alt}`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                decoding="async"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
              <div className="gallery-item-overlay">
                <div className="gallery-item-info">
                  <div className="gallery-item-category">
                    {CATEGORIES.find(c => c.id === photo.category)?.label}
                  </div>
                </div>
              </div>
              <div className="gallery-item-expand" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram CTA */}
        <div style={{ textAlign: 'center', marginTop: '60px' }}>
          <a
            id="gallery-instagram-cta"
            href="https://www.instagram.com/_akshay_visuals_/"
            className="btn-secondary"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'inline-flex' }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            See More on Instagram
          </a>
        </div>
      </div>
    </section>
  )
}
