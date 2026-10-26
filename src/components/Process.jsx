import { useEffect, useRef } from 'react'

const STEPS = [
  {
    number: '01',
    icon: '💬',
    title: 'Consultation',
    desc: 'We connect via WhatsApp or in person to understand your vision, preferences, and the story you want to tell.',
  },
  {
    number: '02',
    icon: '📍',
    title: 'Planning',
    desc: 'Together we choose locations, outfits, themes, and timing to perfectly align with your vision and the best natural light.',
  },
  {
    number: '03',
    icon: '📸',
    title: 'The Shoot',
    desc: 'I create a comfortable, fun atmosphere so you can relax and be yourself. Every candid moment and artistic shot is captured with care.',
  },
  {
    number: '04',
    icon: '✨',
    title: 'Delivery',
    desc: 'Your professionally edited images are delivered in high resolution within the agreed timeline — ready to treasure forever.',
  },
]

export default function Process() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.process-step').forEach((step, i) => {
              step.style.animationDelay = `${i * 0.15}s`
              step.classList.add('animate-in')
            })
          }
        })
      },
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="process" className="process" ref={sectionRef} aria-label="Photography process">
      <div className="container">
        <div className="section-header">
          <span className="section-label">How It Works</span>
          <h2 className="section-title">
            My Creative <span className="text-gold">Process</span>
          </h2>
          <div className="gold-divider" />
          <p className="section-subtitle">
            A seamless, enjoyable experience from our first conversation to your final gallery delivery.
          </p>
        </div>

        <div className="process-steps">
          {STEPS.map((step, i) => (
            <div key={i} className="process-step">
              <div className="process-step-num" aria-label={`Step ${step.number}`}>
                <span className="process-step-number">{step.number}</span>
              </div>
              <h3 className="process-step-title">{step.title}</h3>
              <p className="process-step-desc">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Experience Strip */}
        <div className="experience-strip">
          <div className="exp-item">
            <span className="exp-num">5+</span>
            <span className="exp-label">Years Active</span>
          </div>
          <div className="exp-divider" />
          <div className="exp-item">
            <span className="exp-num">500+</span>
            <span className="exp-label">Sessions Completed</span>
          </div>
          <div className="exp-divider" />
          <div className="exp-item">
            <span className="exp-num">30+</span>
            <span className="exp-label">Locations Covered</span>
          </div>
          <div className="exp-divider" />
          <div className="exp-item">
            <span className="exp-num">100%</span>
            <span className="exp-label">Happy Clients</span>
          </div>
        </div>
      </div>
    </section>
  )
}
