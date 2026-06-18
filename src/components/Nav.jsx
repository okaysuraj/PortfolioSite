import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { navigateWithTransition } from '../utils/transition'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav 
      className={`nav ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: scrolled ? '1.5rem 3rem' : '2.5rem 3rem',
        transition: 'all 0.4s ease',
        mixBlendMode: scrolled ? 'normal' : 'difference',
        background: scrolled ? 'var(--color--dark-green)' : 'transparent',
        borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid transparent',
        color: '#fff'
      }}
    >
      {/* Brand Logo - Simple Text or LN4 SVG */}
      <a href="#" style={{ fontSize: '1.5rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '-0.02em', display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', color: 'inherit' }}>
        <img src="/assets/lando/67f517cdc5bb460c3c3b8e5b_ln4-LN-logo-svg.svg" alt="Suraj Kumar Logo" width="32" height="32" style={{ objectFit: 'contain' }} />
        SURAJ KUMAR
      </a>

      {/* Desktop Links */}
      <div style={{ display: 'flex', gap: '3rem', fontWeight: 600, fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
        <button onClick={() => navigateWithTransition('#my-skills')} className="nav-link" style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', fontFamily: 'inherit', fontWeight: 'inherit', fontSize: 'inherit', textTransform: 'inherit', letterSpacing: 'inherit', padding: 0 }}>
          My Skills
        </button>
        <button onClick={() => navigateWithTransition('#contact')} className="nav-link" style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', fontFamily: 'inherit', fontWeight: 'inherit', fontSize: 'inherit', textTransform: 'inherit', letterSpacing: 'inherit', padding: 0 }}>
          Contact Me
        </button>
      </div>

      {/* Mobile Hamburger (Hidden on desktop) */}
      <button 
        className="nav-ham" 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        style={{ display: 'none' /* Will be handled by media query later */ }}
      >
        Menu
      </button>
    </motion.nav>
  )
}
