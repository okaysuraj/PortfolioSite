import React, { Suspense, lazy } from 'react'
import { ReactLenis } from '@studio-freight/react-lenis'
import Nav from './components/Nav'

// Lazy load sections
const HeroWebGL = lazy(() => import('./components/sections/HeroWebGL'))
const Experience = lazy(() => import('./components/sections/Experience'))
const HelmetGrid = lazy(() => import('./components/sections/HelmetGrid'))
const Skills = lazy(() => import('./components/sections/Skills'))
const Contact = lazy(() => import('./components/sections/Contact'))
const Footer = lazy(() => import('./components/Footer'))
import Curtain from './components/Curtain'

function LoadingFallback() {
  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--color--dark-green)',
      color: 'var(--color--lime)',
      fontSize: '0.9rem',
      fontWeight: 600,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
    }}>
      Loading...
    </div>
  )
}

function TransitionText() {
  return (
    <section style={{ 
      background: 'var(--color--dark-green)', 
      color: 'var(--color--white)', 
      padding: 'var(--section-padding) 0',
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      minHeight: '50vh'
    }}>
      <h2 className="text-huge" style={{ textAlign: 'center', color: '#fff' }}>
        FROM IDEAS<br />TO PRODUCTION
      </h2>
    </section>
  )
}

function App() {
  return (
    <ReactLenis root options={{
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      smoothTouch: false,
    }}>
      <div className="app-root">
        <Curtain />
        <div className="noise-overlay" />
        <Nav />

        <main className="page-content">
          <Suspense fallback={<LoadingFallback />}>
            <HeroWebGL />
            <Experience />
            <HelmetGrid />
            <Skills />
            <Contact />
          </Suspense>
        </main>

        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </div>
    </ReactLenis>
  )
}

export default App
