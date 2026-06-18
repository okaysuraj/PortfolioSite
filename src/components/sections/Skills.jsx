import React, { useRef } from 'react'

const skillsData = [
  {
    title: 'FRONTEND',
    desc: 'React, Next.js, WebGL, Three.js, GSAP, Framer Motion, Tailwind, Vanilla CSS.',
    base: '68305139c5020a27624aa793_In-helm-2019-base.webp',
    hover: '6830513c652a87f862917de3_In-helm-2019-hover.webp'
  },
  {
    title: 'BACKEND',
    desc: 'Node.js, Express, Python, Go. Building scalable microservices and APIs.',
    base: '68305203f28384dcf8ef81cb_In-helm-2020-Silverstone-base.webp',
    hover: '68305223cddca8f1ea359a7a_In-helm-2020-Silverstone-hover.webp'
  },
  {
    title: 'PERFORMANCE',
    desc: 'Obsessed with 60fps. Optimization, memoization, custom shaders.',
    base: '68305038652a87f86290bf3b_ln-helm-2021-base.webp',
    hover: '68305b57817f019bc368a7b6_ln-helm-2021-hover.webp'
  },
  {
    title: 'DATABASE',
    desc: 'PostgreSQL, MongoDB, Redis. Data modeling and efficient querying.',
    base: '683052a8a475dfa06075ca17_In-helm-2022-Basketball-base.webp',
    hover: '683052ab1073a33331767d2a_In-helm-2022-Basketball-hover.webp'
  },
  {
    title: 'DEPLOYMENT',
    desc: 'Docker, AWS, Vercel, CI/CD pipelines, Github Actions.',
    base: '68305a153de4a824d397d21d_In-helm-2023-Chrome-base.webp',
    hover: '68305a175a720573cbd3000f_In-helm-2023-Chrome-hover.webp'
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

      <div style={{
        position: 'absolute',
        top: '25%', left: '8%', right: '8%', bottom: '15%',
        zIndex: 1,
        transition: 'transform 0.6s cubic-bezier(0.16,1,0.3,1)',
        transform: isHovered ? 'scale(1.12) rotate(5deg)' : 'scale(1) rotate(0deg)',
      }}>
        <img
          src={`/assets/lando/${isHovered ? skill.hover : skill.base}`}
          alt={skill.title}
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
        paddingTop: '100px', // Prevents title from hiding behind navbar
      }}>
        {/* Header */}
        <div style={{ position: 'absolute', top: '100px', left: '15vw', zIndex: 10 }}>
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
            marginTop: '100px',
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
