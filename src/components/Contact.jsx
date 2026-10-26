import { useState, useRef, useEffect } from 'react'

export default function Contact() {
  const sectionRef = useRef(null)
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    date: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('[data-animate]').forEach((el, i) => {
              el.style.animationDelay = `${i * 0.1}s`
              el.classList.add('animate-in')
            })
          }
        })
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Compose WhatsApp message
    const msg = encodeURIComponent(
      `Hi Akshay! I'd like to book a session.\n\n` +
      `Name: ${form.name}\n` +
      `Phone: ${form.phone}\n` +
      `Email: ${form.email}\n` +
      `Service: ${form.service}\n` +
      `Preferred Date: ${form.date}\n` +
      `Message: ${form.message}`
    )
    window.open(`https://wa.me/919032002153?text=${msg}`, '_blank')
    setSubmitted(true)
  }

  return (
    <section id="contact" className="contact" ref={sectionRef} aria-label="Contact section">
      <div className="container">
        <div className="contact-grid">
          {/* Contact Info */}
          <div className="contact-info">
            <div className="section-header" data-animate>
              <span className="section-label">Get In Touch</span>
              <h2 className="section-title">
                Let's Create<br />
                <span className="text-gold">Together</span>
              </h2>
              <div className="gold-divider" />
            </div>

            <p className="about-description" data-animate>
              Ready to book a session or have a question? I'd love to hear from you. Reach out via WhatsApp for the quickest response.
            </p>

            <div className="contact-details" data-animate>
              <div className="contact-detail">
                <div className="contact-detail-icon" aria-hidden="true">📍</div>
                <div>
                  <div className="contact-detail-label">Location</div>
                  <div className="contact-detail-value">
                    Jagtial, Telangana, India — 505327
                  </div>
                </div>
              </div>
              <div className="contact-detail">
                <div className="contact-detail-icon" aria-hidden="true">📱</div>
                <div>
                  <div className="contact-detail-label">WhatsApp / Phone</div>
                  <div className="contact-detail-value">
                    <a href="tel:+919032002153">+91 90320 02153</a>
                  </div>
                </div>
              </div>
              <div className="contact-detail">
                <div className="contact-detail-icon" aria-hidden="true">📸</div>
                <div>
                  <div className="contact-detail-label">Instagram</div>
                  <div className="contact-detail-value">
                    <a
                      href="https://www.instagram.com/_akshay_visuals_/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      @_akshay_visuals_
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <a
              id="contact-whatsapp-direct"
              href="https://wa.me/919032002153?text=Hi%20Akshay!%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20photography%20session."
              className="contact-whatsapp-btn"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              data-animate
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Chat on WhatsApp
            </a>
          </div>

          {/* Contact Form */}
          <div className="contact-form-wrapper" data-animate>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                <div style={{ fontSize: '56px', marginBottom: '20px' }}>✅</div>
                <h3 className="font-display" style={{ fontSize: '24px', color: 'var(--text-primary)', marginBottom: '12px' }}>
                  Message Sent!
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontFamily: 'Outfit, sans-serif', marginBottom: '28px' }}>
                  Redirecting you to WhatsApp to continue the conversation.
                </p>
                <button
                  className="btn-secondary"
                  onClick={() => setSubmitted(false)}
                  style={{ margin: '0 auto', display: 'inline-flex' }}
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form id="booking-form" onSubmit={handleSubmit} noValidate>
                <h3
                  className="font-display"
                  style={{ fontSize: '22px', color: 'var(--text-primary)', marginBottom: '28px', fontFamily: 'Playfair Display, serif' }}
                >
                  Book a Session
                </h3>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="contact-name">Full Name *</label>
                    <input
                      type="text"
                      id="contact-name"
                      name="name"
                      placeholder="Your name"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="contact-phone">Phone / WhatsApp *</label>
                    <input
                      type="tel"
                      id="contact-phone"
                      name="phone"
                      placeholder="+91 XXXXX XXXXX"
                      value={form.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="contact-email">Email Address</label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="contact-service">Service *</label>
                    <select
                      id="contact-service"
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a service</option>
                      <option value="Wedding Photography">Wedding Photography</option>
                      <option value="Pre-Wedding Shoot">Pre-Wedding Shoot</option>
                      <option value="Portrait Session">Portrait Session</option>
                      <option value="Couple Photography">Couple Photography</option>
                      <option value="Event Coverage">Event Coverage</option>
                      <option value="Photo Editing">Photo Editing</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="contact-date">Preferred Date</label>
                    <input
                      type="date"
                      id="contact-date"
                      name="date"
                      value={form.date}
                      onChange={handleChange}
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="contact-message">Message / Vision</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    placeholder="Tell me about your vision, location preferences, or any special requests..."
                    value={form.message}
                    onChange={handleChange}
                  />
                </div>

                <button type="submit" id="contact-submit" className="form-submit">
                  Send via WhatsApp
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
