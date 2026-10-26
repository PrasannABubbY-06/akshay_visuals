import { useEffect, useRef } from 'react'

export default function Lightbox({ images, index, onClose, onNav }) {
  const imgRef = useRef(null)

  const current = images[index]

  // Swipe support
  const touchStart = useRef(null)
  const onTouchStart = (e) => { touchStart.current = e.touches[0].clientX }
  const onTouchEnd = (e) => {
    if (!touchStart.current) return
    const diff = touchStart.current - e.changedTouches[0].clientX
    if (Math.abs(diff) > 50) onNav(diff > 0 ? 1 : -1)
    touchStart.current = null
  }

  useEffect(() => {
    if (imgRef.current) {
      imgRef.current.style.animation = 'none'
      void imgRef.current.offsetHeight
      imgRef.current.style.animation = 'lightboxIn 0.35s cubic-bezier(0.34,1.56,0.64,1) both'
    }
  }, [index])

  return (
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label="Image lightbox"
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <button
        id="lightbox-close"
        className="lightbox-close"
        onClick={onClose}
        aria-label="Close lightbox"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M18 6 6 18M6 6l12 12"/>
        </svg>
      </button>

      <button
        id="lightbox-prev"
        className="lightbox-nav lightbox-prev"
        onClick={() => onNav(-1)}
        aria-label="Previous image"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M15 18l-6-6 6-6"/>
        </svg>
      </button>

      <img
        ref={imgRef}
        src={current.src}
        alt={current.alt}
        className="lightbox-img"
        draggable={false}
      />

      <button
        id="lightbox-next"
        className="lightbox-nav lightbox-next"
        onClick={() => onNav(1)}
        aria-label="Next image"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 18l6-6-6-6"/>
        </svg>
      </button>

      <div className="lightbox-counter" aria-live="polite">
        {index + 1} / {images.length}
      </div>
    </div>
  )
}
