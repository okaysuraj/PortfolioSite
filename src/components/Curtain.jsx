import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLenis } from '@studio-freight/react-lenis'

export default function Curtain() {
  const [isActive, setIsActive] = useState(false)
  const lenis = useLenis()

  useEffect(() => {
    const handleTrigger = (e) => {
      const targetSelector = e.detail
      
      // Step 1: Show curtain
      setIsActive(true)

      // Step 2: Wait for curtain to cover screen, then jump, then hide curtain
      setTimeout(() => {
        if (lenis && targetSelector) {
          lenis.scrollTo(targetSelector, { immediate: true, force: true })
        }
        
        // Let the jump render, then lift curtain
        setTimeout(() => {
          setIsActive(false)
        }, 100)
        
      }, 700) // Duration of the curtain slide-in
    }

    window.addEventListener('trigger-curtain', handleTrigger)
    return () => window.removeEventListener('trigger-curtain', handleTrigger)
  }, [lenis])

  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
          initial={{ y: '-100%' }}
          animate={{ y: '0%' }}
          exit={{ y: '100%' }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          style={{
            position: 'fixed',
            inset: 0,
            background: '#d2ff00', // Lime green wipe
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column'
          }}
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ delay: 0.3 }}
            style={{ 
              color: 'var(--color--dark-green)', 
              fontSize: 'clamp(2rem, 5vw, 4rem)', 
              fontWeight: 900, 
              textTransform: 'uppercase',
              letterSpacing: '-0.02em'
            }}
          >
            Loading...
          </motion.h2>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
