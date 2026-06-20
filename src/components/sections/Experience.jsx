import React, { useRef } from 'react'

const experiences = [
  { id: 1, year: '2023 - Present', role: 'Software Engineer', company: 'Tech Innovators', desc: 'Leading frontend development, improving performance, and architecting scalable web applications.' },
  { id: 2, year: '2021 - 2023', role: 'Frontend Developer', company: 'Creative Solutions', desc: 'Developed responsive UIs, integrated REST APIs, and worked closely with designers.' },
  { id: 3, year: '2019 - 2021', role: 'Web Developer', company: 'Digital Agency', desc: 'Built and maintained client websites, optimized SEO, and managed deployment pipelines.' },
  { id: 4, year: '2018 - 2019', role: 'Developer Intern', company: 'StartUp Inc', desc: 'Assisted in building internal tools, writing unit tests, and fixing bugs.' },
]

function ExperienceCard({ exp, index }) {
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
        marginTop: index % 2 === 0 ? '0' : '5rem',
        transition: 'transform 0.4s ease, box-shadow 0.4s ease',
        transform: isHovered ? 'translateY(-10px)' : 'translateY(0)',
        boxShadow: isHovered ? '0 15px 30px rgba(0,0,0,0.1)' : 'none',
      }}
    >
      <div style={{ zIndex: 2, position: 'relative' }}>
        <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'blue' }}>{exp.year}</span>
        <h3 style={{ fontSize: '1.3rem', fontWeight: 800, textTransform: 'uppercase', lineHeight: 1.1, color: 'var(--color--dark-green)', marginTop: '0.2rem' }}>
          {exp.role}
        </h3>
        <p style={{ color: 'var(--color--lime)', fontWeight: 800, fontSize: '0.9rem', marginTop: '0.25rem', background: 'var(--color--dark-green)', display: 'inline-block', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>
          {exp.company}
        </p>
        <p style={{ color: 'rgba(0, 0, 0, 0.6)', fontSize: '0.9rem', lineHeight: 1.4, fontWeight: 500, marginTop: '1rem' }}>
          {exp.desc}
        </p>
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

export default function Experience() {
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
      id="experience"
      style={{
        position: 'relative',
        height: `${experiences.length * 35}vh`,
        width: '100%',
        background: 'var(--color--dark-green)',
        color: 'var(--color--white)',
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
      }}>
        {/* Header */}
        <div style={{ position: 'absolute', top: '120px', left: '15vw', zIndex: 10 }}>
          <p className="text-eyebrow" style={{ color: 'var(--color--lime)', marginBottom: '0.25rem', fontWeight: 800, fontSize: '0.6rem' }}>
            Career
          </p>
          <h2 style={{
            fontSize: 'clamp(1rem, 2.5vw, 2rem)',
            fontWeight: 900,
            textTransform: 'uppercase',
            lineHeight: 0.9,
            letterSpacing: '-0.04em',
            color: 'var(--color--white)',
            margin: 0
          }}>
            MY EXPERIENCE
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
            marginTop: '110px',
          }}
        >
          {experiences.map((exp, idx) => (
            <ExperienceCard key={exp.id} exp={exp} index={idx} />
          ))}
        </div>
      </div>
    </section>
  )
}
