import { useEffect, useRef, useState, type PointerEvent as ReactPointerEvent } from 'react'
import { gallery } from '../data/content'

const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`
const AUTOPLAY_MS = 4800

export function GalleryCarousel() {
  const photos = gallery.photos
  const count = photos.length
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const [dragPercent, setDragPercent] = useState(0)
  const [dragging, setDragging] = useState(false)
  const startX = useRef(0)
  const widthRef = useRef(1)
  const stageRef = useRef<HTMLDivElement>(null)

  const goTo = (next: number) => {
    setIndex(((next % count) + count) % count)
  }

  useEffect(() => {
    if (paused || dragging || count < 2) return
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % count)
    }, AUTOPLAY_MS)
    return () => window.clearInterval(id)
  }, [paused, dragging, count])

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') setIndex((current) => (current - 1 + count) % count)
      if (event.key === 'ArrowRight') setIndex((current) => (current + 1) % count)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [count])

  const onPointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    setDragging(true)
    setPaused(true)
    startX.current = event.clientX
    widthRef.current = Math.max(stageRef.current?.clientWidth ?? 1, 1)
    setDragPercent(0)
    event.currentTarget.setPointerCapture(event.pointerId)
  }

  const onPointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!dragging) return
    setDragPercent(((event.clientX - startX.current) / widthRef.current) * 42)
  }

  const endDrag = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!dragging) return
    const delta = event.clientX - startX.current
    setDragging(false)
    setDragPercent(0)
    setPaused(false)
    if (Math.abs(delta) > 48) {
      goTo(delta > 0 ? index - 1 : index + 1)
    }
  }

  const active = photos[index]

  return (
    <div
      className="flow"
      role="region"
      aria-roledescription="carrusel"
      aria-label="Galería fotográfica"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="flow__header">
        <p className="flow__caption" aria-live="polite">
          {active.caption}
        </p>
        <div className="flow__controls">
          <button
            type="button"
            className="flow__btn"
            aria-label="Foto anterior"
            onClick={() => goTo(index - 1)}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M15 5L8 12l7 7"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            type="button"
            className="flow__btn"
            aria-label="Foto siguiente"
            onClick={() => goTo(index + 1)}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M9 5l7 7-7 7"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      <div
        ref={stageRef}
        className={`flow__stage${dragging ? ' is-dragging' : ''}`}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
      >
        {photos.map((photo, photoIndex) => {
          let offset = photoIndex - index
          if (offset > count / 2) offset -= count
          if (offset < -count / 2) offset += count

          const abs = Math.abs(offset)
          const translate = offset * 58 + dragPercent
          const scale = abs === 0 ? 1 : abs === 1 ? 0.78 : 0.62
          const opacity = abs === 0 ? 1 : abs === 1 ? 0.55 : 0.22
          const zIndex = 20 - abs
          const blur = abs > 1 ? 0.4 : 0

          return (
            <button
              key={photo.src}
              type="button"
              className={`flow__card${abs === 0 ? ' is-active' : ''}`}
              style={{
                transform: `translateX(-50%) translateX(${translate}%) scale(${scale})`,
                opacity,
                zIndex,
                filter: blur ? `blur(${blur}px)` : undefined,
                transition: dragging
                  ? 'none'
                  : 'transform 1.05s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.9s ease, filter 0.9s ease',
              }}
              aria-label={photo.caption}
              aria-current={abs === 0 ? 'true' : undefined}
              tabIndex={abs === 0 ? 0 : -1}
              onClick={() => {
                if (abs !== 0) goTo(photoIndex)
              }}
            >
              <img src={asset(photo.src)} alt={photo.alt} draggable={false} />
            </button>
          )
        })}
      </div>

      <div className="flow__dots" role="tablist" aria-label="Elegir foto">
        {photos.map((photo, photoIndex) => (
          <button
            key={photo.src}
            type="button"
            role="tab"
            aria-selected={photoIndex === index}
            aria-label={photo.caption}
            className={`flow__dot${photoIndex === index ? ' is-active' : ''}`}
            onClick={() => goTo(photoIndex)}
          />
        ))}
      </div>
    </div>
  )
}
