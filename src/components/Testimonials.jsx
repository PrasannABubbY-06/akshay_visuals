import { useEffect, useRef } from 'react'

const TESTIMONIALS = [
  {
    initial: 'R',
    name: 'Ravi & Priya',
    occasion: 'Pre-Wedding Shoot, Jagtial',
    text: 'Akshay captured our love story in the most beautiful way. His patience, creativity, and eye for detail made our pre-wedding shoot an unforgettable experience. Every photo felt like a painting!',
  },
  {
    initial: 'S',
    name: 'Suresh & Kavya',
    occasion: 'Wedding Photography',
    text: 'We hired Akshay for our wedding and we couldn\'t be happier. He was professional, punctual, and incredibly talented. He captured moments we didn\'t even notice happening. Truly exceptional work.',
  },
  {
    initial: 'A',
    name: 'Ananya K.',
    occasion: 'Portrait Session',
    text: 'I was nervous about my portrait session but Akshay made me feel so comfortable. The photos turned out stunning — natural, elegant, and exactly what I envisioned. Highly recommend!',
  },
  {
    initial: 'M',
    name: 'Manish & Deepa',
    occasion: 'Couple Photography',
    text: 'Akshay has an incredible ability to capture genuine emotions. Our couple photos look so natural and beautiful. His editing style is cinematic and perfect. We\'ll definitely book again!',
  },
  {
    initial: 'V',
    name: 'Vijay Family',
    occasion: 'Family Portraits',
    text: 'The family portraits Akshay took for us are now proudly displayed in our home. He has a gift for making everyone feel at ease and his photos tell real stories. Simply outstanding.',
  },
  {
    initial: 'N',
    name: 'Nisha & Arun',
    occasion: 'Engagement Ceremony',
    text: 'From planning to delivery, Akshay was exceptional. He understood our vision perfectly and delivered beyond our expectations. The photos are breathtaking — pure magic!',
  },
]

export default function Testimonials() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.testimonial-card').forEach((card, i) => {
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
    <section id="testimonials" className="testimonials" ref={sectionRef} aria-label="Client testimonials">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Client Love</span>
          <h2 className="section-title">
            What Clients <span className="text-gold">Say</span>
          </h2>
          <div className="gold-divider" />
          <p className="section-subtitle">
            Real stories from real clients who trusted me to capture their most precious moments.
          </p>
        </div>

        <div className="testimonials-grid">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="testimonial-card" role="article">
              <div className="testimonial-stars" aria-label="5 stars">
                {[...Array(5)].map((_, j) => (
                  <span key={j} className="testimonial-star" aria-hidden="true">★</span>
                ))}
              </div>
              <blockquote className="testimonial-text">"{t.text}"</blockquote>
              <div className="testimonial-author">
                <div className="testimonial-avatar" aria-hidden="true">{t.initial}</div>
                <div>
                  <div className="testimonial-name">{t.name}</div>
                  <div className="testimonial-occasion">{t.occasion}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
