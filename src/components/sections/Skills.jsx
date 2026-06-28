import React, { useRef } from 'react'

const skillsData = [
  {
    title: 'FRONTEND',
    desc: 'React, HTML, CSS, Javascript.',
  },
  {
    title: 'BACKEND',
    desc: 'Node.js, Express, Python, Java, Spring Boot, FastAPI. Building scalable microservices and APIs.',
  },
  {
    title: 'PERFORMANCE',
    desc: 'Obsessed with 60fps.',
  },
  {
    title: 'DATABASE',
    desc: 'PostgreSQL and MongoDB.',
  },
  {
    title: 'DEPLOYMENT',
    desc: 'Docker, Kubernetes, AWS, Azure, CI/CD pipelines, Github Actions.',
  }
]

function SkillCard({ skill, index }) {
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
        <h3 style={{ fontSize: '1.3rem', fontWeight: 800, textTransform: 'uppercase', lineHeight: 1.1, color: 'var(--color--dark-green)' }}>
          {skill.title}
        </h3>
        <p style={{ color: 'rgba(0, 0, 0, 0.6)', fontSize: '0.9rem', lineHeight: 1.3, fontWeight: 500, marginTop: '0.5rem' }}>
          {skill.desc}
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

export default function Skills() {
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
      id="my-skills"
      style={{
        position: 'relative',
        height: `${skillsData.length * 35}vh`,
        width: '100%',
        background: 'var(--color--dark-green)',
        color: 'var(--color--white)'
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
            Capabilities
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
            MY SKILLS
          </h2>
        </div>

        {/* Horizontal Track */}
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
          {skillsData.map((skill, idx) => (
            <SkillCard key={idx} skill={skill} index={idx} />
          ))}
        </div>
      </div>
    </section>
  )
}
