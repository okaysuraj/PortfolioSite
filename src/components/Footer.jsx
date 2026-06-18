import React from 'react'

export default function Footer() {
  return (
    <footer style={{ 
      background: 'var(--color--dark-green)', 
      color: 'var(--color--white)',
      paddingTop: '6rem',
      position: 'relative',
      marginTop: '-50px', // Pull it up to overlap the section above
      zIndex: 10
    }}>
      {/* SVG Mask Top Edge */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0,
        height: '100px',
        background: 'var(--color--white)',
        clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 100%)' // Reverse slanted edge to reveal dark green below
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1, paddingBottom: '4rem' }}>
        <h2 className="text-impact" style={{ fontSize: 'clamp(3rem, 10vw, 8rem)', color: 'var(--color--lime)', marginBottom: '4rem', textAlign: 'center' }}>
          SURAJ<br/>KUMAR
        </h2>

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '3rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h4 className="text-eyebrow" style={{ color: 'var(--color--grey-2)', marginBottom: '1.5rem' }}>Social</h4>
            <ul style={{ display: 'flex', gap: '2rem', fontWeight: 600, listStyle: 'none', padding: 0, margin: 0 }}>
              <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>LinkedIn</a></li>
              <li><a href="https://github.com" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>GitHub</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
