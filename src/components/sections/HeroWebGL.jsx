import React from 'react'

export default function HeroWebGL() {
  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        backgroundImage: 'linear-gradient(to bottom, rgba(16, 20, 0, 0.6), rgba(16, 20, 0, 0.8)), url(/assets/lando/pexels-elijahsad-3473569.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        color: 'var(--color--white)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 5vw',
      }}
    >
      <div className="container" style={{
        position: 'relative',
        zIndex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        marginTop: '80px', // account for navbar
        textAlign: 'center'
      }}>
        
        {/* Text Container */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'center' }}>
          <div className="text-eyebrow" style={{ color: 'var(--color--lime)', textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>
            Software Engineer
          </div>
          <h1 style={{
            margin: 0,
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
            fontWeight: 900,
            lineHeight: 1.1,
            letterSpacing: '-0.03em',
            textTransform: 'uppercase',
            textShadow: '0 4px 20px rgba(0,0,0,0.5)'
          }}>
            From Ideas<br />
            <span style={{ color: 'var(--color--lime)' }}>To Production</span>
          </h1>
        </div>

      </div>
    </section>
  )
}
