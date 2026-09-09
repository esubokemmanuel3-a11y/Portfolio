import { motion, useMotionValue, animate } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer'

// EDIT SKILLS & LEVELS HERE — level is just a 0-100 number you're estimating yourself
const skillCategories = [
  {
    title: 'Languages',
    icon: '</>',
    skills: [
      { name: 'MQL5', level: 70 },
      { name: 'Python', level: 55 },
      { name: 'JavaScript (React)', level: 30 },
    ],
  },
  {
    title: 'Tools',
    icon: '[]',
    skills: [
      { name: 'Git & GitHub', level: 75 },
      { name: 'VS Code', level: 85 },
      { name: 'Docker', level: 20 },
    ],
  },
  {
    title: 'Currently Learning',
    icon: '{}',
    skills: [
      { name: 'React & Tailwind', level: 35 },
      { name: 'Backend Fundamentals', level: 25 },
      { name: 'DevSecOps Basics', level: 15 },
    ],
  },
]

function SkillCard({ name, level, index }) {
  const count = useMotionValue(0)
  const [display, setDisplay] = useState(0)
  const ref = useRef(null)
  const { ref: inViewRef, inView } = useInView({ threshold: 0.3, triggerOnce: true })

  useEffect(() => {
    const unsubscribe = count.on('change', (latest) => setDisplay(Math.round(latest)))
    return unsubscribe
  }, [count])

  useEffect(() => {
    if (inView) {
      animate(count, level, { duration: 1.5, ease: 'easeOut' })
    }
  }, [inView, count, level])

  return (
    <motion.div
      ref={(el) => {
        ref.current = el
        inViewRef(el)
      }}
      className="relative group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
    >
      <div className="relative p-6 transition-all duration-300 bg-black border border-white/10 group-hover:border-green-400/50">
        <div className="flex items-center justify-between mb-4">
          <span className="text-lg font-semibold text-white" style={{ fontFamily: 'Special Elite, monospace' }}>
            {name}
          </span>
          <motion.span
            className="text-xl font-bold text-green-400"
            style={{ fontFamily: 'monospace' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {display}%
          </motion.span>
        </div>

        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-xs text-green-500" style={{ fontFamily: 'monospace' }}>$</span>
            <div className="relative w-full h-2 overflow-hidden border bg-white/5 border-white/10">
              <motion.div
                className="h-full bg-gradient-to-r from-green-500 to-green-400"
                initial={{ width: 0 }}
                whileInView={{ width: `${level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: 'easeOut', delay: index * 0.05 }}
              />
            </div>
          </div>
          <div className="text-white/40 text-[10px] font-mono" style={{ fontFamily: 'monospace' }}>
            // Proficiency level: {level}%
          </div>
        </div>
      </div>
    </motion.div>
  )
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
}

export default function Skills() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <section id="skills" className="relative flex items-center min-h-screen px-4 py-16 overflow-hidden bg-black sm:px-6 sm:py-20">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <pre className="hidden md:block absolute text-xs top-32 left-12 text-white/10" style={{ fontFamily: 'monospace' }}>
{`function loadSkills() {
  return [...techStack];
}`}
        </pre>
        <pre className="hidden md:block absolute text-xs bottom-24 right-12 text-white/10" style={{ fontFamily: 'monospace' }}>
{`// Mastering new tools
// Every single day`}
        </pre>
      </div>

      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={containerVariants}
        className="w-full max-w-6xl mx-auto"
      >
        <motion.div variants={itemVariants} className="mb-10 sm:mb-16">
          <div className="inline-block mb-3 sm:mb-4">
            <span
              className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-blue-400 bg-blue-500/10 px-3 sm:px-4 py-1.5 sm:py-2 border border-blue-500/30"
              style={{ fontFamily: 'monospace' }}
            >
              $ ls -la /skills
            </span>
          </div>
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl" style={{ fontFamily: 'Special Elite, monospace' }}>
            Technical <span className="text-blue-400">Proficiency</span>
          </h2>
          {/* EDIT SUBTEXT HERE */}
          <p className="max-w-2xl pl-4 mt-4 text-base border-l-2 border-blue-400 sm:text-lg text-white/60 sm:mt-6" style={{ fontFamily: 'Special Elite, monospace' }}>
            <span className="text-sm text-blue-400">// Stack Overview</span><br />
            Still early in the journey — building real automation tools while ranking up the fundamentals.
          </p>
        </motion.div>

        <div className="space-y-8 sm:space-y-12">
          {skillCategories.map((category, categoryIdx) => (
            <motion.div key={category.title} variants={itemVariants}>
              <div className="flex items-center gap-2 pb-3 mb-4 border-b sm:gap-3 sm:mb-6 border-white/10">
                <span className="text-2xl font-bold text-green-400 sm:text-3xl" style={{ fontFamily: 'monospace' }}>
                  {category.icon}
                </span>
                <h3 className="text-xl font-bold text-white sm:text-2xl" style={{ fontFamily: 'Special Elite, monospace' }}>
                  <span className="text-purple-400">const</span> {category.title} = [
                </h3>
              </div>

              <div className="grid gap-3 pl-0 sm:gap-4 md:grid-cols-2 sm:pl-8">
                {category.skills.map((skill, skillIdx) => (
                  <SkillCard key={skill.name} {...skill} index={categoryIdx * 3 + skillIdx} />
                ))}
              </div>

              <p className="mt-3 text-lg text-white/40" style={{ fontFamily: 'Special Elite, monospace' }}>];</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}