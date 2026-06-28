import React from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" style={{
      padding: '12rem 0',
      background: 'var(--color--white)',
      color: 'var(--color--dark-green)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          textAlign: 'center' 
        }}>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-eyebrow" style={{ 
              color: 'var(--color--dark-green)', 
              opacity: 0.6, 
              marginBottom: '1rem' 
            }}>
              Ready to collaborate on something?
            </p>
            
            <h2 style={{
              fontSize: 'clamp(4rem, 12vw, 10rem)',
              fontWeight: 900,
              textTransform: 'uppercase',
              lineHeight: 0.85,
              letterSpacing: '-0.05em',
              color: 'var(--color--dark-green)',
              marginBottom: '3rem'
            }}>
              LET'S<br />BUILD.
            </h2>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'var(--color--lime)',
              color: 'var(--color--dark-green)',
              padding: '1.5rem 3rem',
              fontSize: '1.2rem',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              clipPath: 'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)',
              textDecoration: 'none',
            }}
          >
            SAY HELLO
          </motion.div>

          {/* Social Links */}
          <div style={{ 
            marginTop: '5rem', 
            display: 'flex', 
            gap: '2rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.05em'
          }}>
            {[
              { name: 'GitHub', url: 'https://github.com/okaysuraj' },
              { name: 'LinkedIn', url: 'https://linkedin.com/in/okaysuraj' }
            ].map((social, i) => (
              <a 
                key={social.name} 
                href={social.url} 
                target="_blank"
                rel="noopener noreferrer"
                style={{ 
                  color: 'var(--color--dark-green)', 
                  textDecoration: 'none',
                  opacity: 0.6,
                  transition: 'opacity 0.3s'
                }}
                onMouseEnter={(e) => e.target.style.opacity = 1}
                onMouseLeave={(e) => e.target.style.opacity = 0.6}
              >
                {social.name}
              </a>
            ))}
          </div>

        </div>
      </div>

      {/* Background Graphic */}
      <div style={{
        position: 'absolute',
        bottom: '-10%',
        right: '-5%',
        width: '50vw',
        height: '50vw',
        background: 'radial-gradient(circle, rgba(210,255,0,0.1) 0%, transparent 70%)',
        zIndex: 1,
        pointerEvents: 'none'
      }} />
    </section>
  )
}
