import React, { useRef } from 'react'

const helmets = [
  { id: 1, year: '2019', name: 'DEBUT', base: '68305139c5020a27624aa793_In-helm-2019-base.webp', hover: '6830513c652a87f862917de3_In-helm-2019-hover.webp' },
  { id: 2, year: '2020', name: 'SILVERSTONE', base: '68305203f28384dcf8ef81cb_In-helm-2020-Silverstone-base.webp', hover: '68305223cddca8f1ea359a7a_In-helm-2020-Silverstone-hover.webp' },
  { id: 3, year: '2021', name: 'SEASON', base: '68305038652a87f86290bf3b_ln-helm-2021-base.webp', hover: '68305b57817f019bc368a7b6_ln-helm-2021-hover.webp' },
  { id: 4, year: '2022', name: 'BASKETBALL', base: '683052a8a475dfa06075ca17_In-helm-2022-Basketball-base.webp', hover: '683052ab1073a33331767d2a_In-helm-2022-Basketball-hover.webp' },
  { id: 5, year: '2023', name: 'CHROME', base: '68305a153de4a824d397d21d_In-helm-2023-Chrome-base.webp', hover: '68305a175a720573cbd3000f_In-helm-2023-Chrome-hover.webp' },
  { id: 6, year: '2023', name: 'LAS VEGAS', base: '68305a2e3fccf71c6d71e5a8_In-helm-2023-Las%20Vegas-base.webp', hover: '68305a3053985f797745cdfc_In-helm-2023-Las%20Vegas-hover.webp' },
  { id: 7, year: '2024', name: 'DARK MODE', base: '68305a59417d51c0a58c32c6_In-helm-2024-DarkMode-base.webp', hover: '68305a5cdaa389d0c080afc7_In-helm-2024-DarkMode-hover.webp' },
  { id: 8, year: '2024', name: 'JAPAN', base: '68305a980c399022066600a6_In-helm-2024-Japan-base.webp', hover: '68305a9b1716264ea006064b_In-helm-2024-Japan-hover.webp' },
  { id: 9, year: '2024', name: 'PORCELAIN', base: '68305acf3fccf71c6d72607b_In-helm-2024-Porcelain-base.webp', hover: '68305ad3a594ec37bd1d32cb_In-helm-2024-Porcelain-hover.webp' },
  { id: 10, year: '2025', name: 'SEASON', base: '68305b3e6c7ab86033cf172c_In-helm-2025-Season-base.webp', hover: '68305b411c575b2f777125f6_In-helm-2025-Season-hover.webp' },
  { id: 11, year: '2025', name: 'DARK GLITTER', base: '68305aff4692de3e7ea12251_In-helm-2025-DarkGlitter-base.webp', hover: '68305b03644c91f0a8de407b_In-helm-2025-DarkGlitter-hover.webp' },
  { id: 12, year: '2025', name: 'DISCOBALL', base: '68305b2259159e5170d2b923_In-helm-2025-Discoball-base.webp', hover: '68305b24037a1e7681195c20_In-helm-2025-Discoball-hover.webp' },
]

function HelmetCard({ helmet, index }) {
  const [isHovered, setIsHovered] = React.useState(false)

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        flex: '0 0 260px',
        height: '360px',
        position: 'relative',
        background: '#e8e8e8',
        clipPath: 'polygon(6% 0, 100% 0, 94% 100%, 0 100%)',
        cursor: 'pointer',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '1.5rem',
        // Zig-zag stagger instead of continuous step down
        marginTop: index % 2 === 0 ? '0' : '5rem',
      }}
    >
      <div style={{ zIndex: 2, position: 'relative' }}>
        <span style={{ fontSize: '0.8rem', fontWeight: 700, opacity: 0.4 }}>{helmet.year}</span>
        <h3 style={{ fontSize: '1.3rem', fontWeight: 800, textTransform: 'uppercase', lineHeight: 1.1, color: 'var(--color--dark-green)' }}>
          {helmet.name}
        </h3>
      </div>

      <div style={{
        position: 'absolute',
        top: '12%', left: '8%', right: '8%', bottom: '12%',
        zIndex: 1,
        transition: 'transform 0.6s cubic-bezier(0.16,1,0.3,1)',
        transform: isHovered ? 'scale(1.12) rotate(5deg)' : 'scale(1) rotate(0deg)',
      }}>
        <img
          src={`/assets/lando/${isHovered ? helmet.hover : helmet.base}`}
          alt={helmet.name}
          style={{ width: '100%', height: '100%', objectFit: 'contain' }}
          loading="lazy"
        />
      </div>

      <div style={{ zIndex: 2, alignSelf: 'flex-end' }}>
        <span style={{
          display: 'flex', width: '32px', height: '32px',
          borderRadius: '50%', background: 'var(--color--lime)',
          alignItems: 'center', justifyContent: 'center',
          fontWeight: 800, fontSize: '1.1rem', color: 'var(--color--dark-green)',
          transition: 'transform 0.3s ease',
          transform: isHovered ? 'scale(1.2) rotate(45deg)' : 'scale(1)',
        }}>+</span>
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────────
   HelmetGrid: Scroll-driven horizontal slider.

   - Section is tall enough so all cards can
     slide through before the page moves on
   - Sticky viewport holds the track
   - translateX driven purely by scroll
   - Page ONLY scrolls past once all cards
     have finished sliding right-to-left
   ───────────────────────────────────────────── */
export default function HelmetGrid() {
  const sectionRef = useRef(null)
  const trackRef = useRef(null)

  React.useEffect(() => {
    let raf
    const animate = () => {
      if (!sectionRef.current || !trackRef.current) {
        raf = requestAnimationFrame(animate)
        return
      }
      const rect = sectionRef.current.getBoundingClientRect()
      const sectionH = sectionRef.current.offsetHeight
      const viewH = window.innerHeight
      const raw = -rect.top / (sectionH - viewH)
      const progress = Math.max(0, Math.min(1, isNaN(raw) ? 0 : raw))

      const trackW = trackRef.current.scrollWidth
      const viewW = window.innerWidth
      const maxTranslate = Math.max(0, trackW - viewW + 80)

      trackRef.current.style.transform = `translateX(${-progress * maxTranslate}px)`
      raf = requestAnimationFrame(animate)
    }
    raf = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <section
      ref={sectionRef}
      id="helmet"
      style={{
        position: 'relative',
        height: `${helmets.length * 35}vh`,
        width: '100%',
        background: 'var(--color--white)',
      }}
    >
      <div style={{
        position: 'sticky',
        top: 0,
        height: '100vh',
        width: '100%',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: '100px',
      }}>
        {/* Header */}
        <div style={{ position: 'absolute', top: '100px', left: '15vw', zIndex: 10 }}>
          <p className="text-eyebrow" style={{ color: 'var(--color--lime)', marginBottom: '0.25rem', fontWeight: 800, fontSize: '0.6rem' }}>
            Showcase
          </p>
          <h2 style={{
            fontSize: 'clamp(1rem, 2.5vw, 2rem)',
            fontWeight: 900,
            textTransform: 'uppercase',
            lineHeight: 0.9,
            letterSpacing: '-0.04em',
            color: 'var(--color--dark-green)',
            margin: 0
          }}>
            MY PROJECTS
          </h2>
        </div>

        <div
          ref={trackRef}
          style={{
            display: 'flex',
            gap: '2rem',
            paddingLeft: '15vw',
            paddingRight: '15vw',
            willChange: 'transform',
            marginTop: '100px',
          }}
        >
          {helmets.map((helmet, idx) => (
            <HelmetCard key={helmet.id} helmet={helmet} index={idx} />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scrollPulse {
          0%, 100% { opacity: 0.3; transform: scaleY(0.8); }
          50% { opacity: 1; transform: scaleY(1); }
        }
      `}</style>
    </section>
  )
}
