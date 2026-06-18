import React from 'react'

export default function HeroWebGL() {
  return (
    <section
      id="hero"
      style={{
        width: '100%',
        minHeight: '100vh',
        background: 'var(--color--dark-green)',
        color: 'var(--color--white)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 5vw',
      }}
    >
      <div className="container" style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        marginTop: '80px', // account for navbar
        textAlign: 'center'
      }}>
        
        {/* Centered Text */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
          <div className="text-eyebrow" style={{ color: 'var(--color--lime)' }}>
            Software Engineer
          </div>
          <h1 style={{
            margin: 0,
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
            fontWeight: 900,
            lineHeight: 1.1,
            letterSpacing: '-0.03em',
            textTransform: 'uppercase',
          }}>
            From Ideas<br />
            <span style={{ color: 'var(--color--lime)' }}>To Production</span>
          </h1>
        </div>

      </div>
    </section>
  )
}
