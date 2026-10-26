import { useState, useEffect } from 'react'
import './index.css'
import Cursor from './components/Cursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Gallery from './components/Gallery'
import Services from './components/Services'
import Process from './components/Process'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Lightbox from './components/Lightbox'

function App() {
  const [lightboxData, setLightboxData] = useState({ open: false, images: [], index: 0 })

  const openLightbox = (images, index) => {
    setLightboxData({ open: true, images, index })
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setLightboxData(prev => ({ ...prev, open: false }))
    document.body.style.overflow = ''
  }

  const navLightbox = (dir) => {
    setLightboxData(prev => ({
      ...prev,
      index: (prev.index + dir + prev.images.length) % prev.images.length
    }))
  }

  useEffect(() => {
    const handleKey = (e) => {
      if (!lightboxData.open) return
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowRight') navLightbox(1)
      if (e.key === 'ArrowLeft') navLightbox(-1)
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [lightboxData.open])

  return (
    <>
      <Cursor />
      <Navbar />
      <main>
        <Hero openLightbox={openLightbox} />
        <About />
        <Gallery openLightbox={openLightbox} />
        <Services />
        <Process />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      {lightboxData.open && (
        <Lightbox
          images={lightboxData.images}
          index={lightboxData.index}
          onClose={closeLightbox}
          onNav={navLightbox}
        />
      )}
    </>
  )
}

export default App
