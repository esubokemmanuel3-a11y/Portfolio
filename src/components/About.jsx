import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code2 } from 'lucide-react'
import { useEffect } from 'react'

// Parent container: staggers its children's entrance animation
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
}

// Each direct child of the container fades up individually
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
}

const skillCardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } },
}

// Animated number counter — counts up from 0 to `target` once it scrolls into view
function Counter({ target, suffix = '' }) {
  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest) => Math.round(latest))
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true })

  useEffect(() => {
    if (inView) {
      const controls = animate(count, target, { duration: 2 })
      return controls.stop
    }
  }, [inView, target, count])

  return (
    <motion.span ref={ref}>
      {useTransform(rounded, (latest) => latest + suffix)}
    </motion.span>
  )
}

// EDIT STATS HERE
const stats = [
  { number: 4, suffix: '+', label: 'Automation Projects' },
  { number: 2, suffix: '', label: 'Core Languages' },
  { number: 100, suffix: '%', label: 'Dedication' },
]

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <section id="about" className="relative flex items-center min-h-screen px-4 py-16 overflow-hidden bg-black sm:px-6 sm:py-20">
      {/* Decorative background code snippets */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <pre className="absolute hidden text-xs md:block top-20 right-8 text-white/10" style={{ fontFamily: 'monospace' }}>
{`class Developer {
  constructor() {
    this.passion = true;
    this.learning = 'always';
  }
}`}
        </pre>
        <pre className="absolute hidden text-xs md:block bottom-32 left-8 text-white/10" style={{ fontFamily: 'monospace' }}>
{`// Building the future
// One commit at a time`}
        </pre>
      </div>

      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={containerVariants}
        className="w-full max-w-6xl mx-auto"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="mb-10 sm:mb-16">
          <div className="inline-block mb-3 sm:mb-4">
            <span
              className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-green-400 bg-green-500/10 px-3 sm:px-4 py-1.5 sm:py-2 border border-green-500/30"
              style={{ fontFamily: 'monospace' }}
            >
              about.txt
            </span>
          </div>
          {/* EDIT HEADLINE HERE */}
          <h2
            className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl"
            style={{ fontFamily: 'Special Elite, monospace' }}
          >
            Building With <span className="text-green-400">Purpose</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 mb-10 lg:grid-cols-3 sm:gap-8 sm:mb-16">
          {/* Left column: bio paragraphs */}
          <motion.div variants={itemVariants} className="space-y-4 lg:col-span-2 sm:space-y-6">
            <div className="space-y-4 leading-relaxed sm:space-y-6 text-white/70" style={{ fontFamily: 'Special Elite, monospace' }}>
              {/* EDIT BIO PARAGRAPHS HERE */}
              <p className="pl-4 text-base border-l-2 border-green-500 sm:text-lg">
                <span className="text-sm text-green-500">// Introduction</span><br />
                I'm a final-year Software Engineering student who builds{' '}
                <span className="font-semibold text-white">trading automation tools</span> with Python and MQL5 — freelancing on Fiverr and MQL5.com along the way.
              </p>

              <p className="pl-4 text-base border-l-2 border-blue-400 sm:text-lg">
                <span className="text-sm text-blue-400">// Approach</span><br />
                Right now I'm ranking up my Python skills with a clear goal: land a backend/Python developer role, then move into DevSecOps once the fundamentals are solid.
              </p>

              <p className="pl-4 text-base border-l-2 border-purple-400 sm:text-lg">
                <span className="text-sm text-purple-400">// Commitment</span><br />
                I may be early in my career, but every project — from EAs to signal copiers — is a chance to sharpen how I think about code, not just how I write it.
              </p>
            </div>

            {/* Stats row */}
            <motion.div variants={itemVariants} className="grid grid-cols-3 gap-2 pt-6 sm:gap-4 sm:pt-8">
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  variants={skillCardVariants}
                  className="p-3 border sm:p-4 lg:p-6 border-white/10 bg-white/5 backdrop-blur-sm"
                >
                  <p className="mb-1 text-xl font-bold text-green-400 sm:text-2xl lg:text-3xl sm:mb-2" style={{ fontFamily: 'monospace' }}>
                    <Counter target={stat.number} suffix={stat.suffix} />
                  </p>
                  <p className="text-xs sm:text-sm text-white/60" style={{ fontFamily: 'Special Elite, monospace' }}>{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right column: highlight box */}
          <motion.div variants={itemVariants}>
            <div className="flex flex-col justify-between h-full p-8 border border-white/20 bg-white/5 backdrop-blur-sm">
              <div>
                <Code2 className="w-12 h-12 mb-4 text-green-400" />
                <h3 className="mb-4 text-2xl font-bold text-white" style={{ fontFamily: 'Special Elite, monospace' }}>Eager to Grow</h3>
                {/* EDIT HIGHLIGHT BOX TEXT HERE */}
                <p className="text-sm leading-relaxed text-white/70" style={{ fontFamily: 'Special Elite, monospace' }}>
                  I'm constantly leveling up — right now that means Python fundamentals, with backend and DevSecOps next on the roadmap.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-white/10">
                <p className="text-xs tracking-widest uppercase text-white/40" style={{ fontFamily: 'monospace' }}>// Currently mastering</p>
                <p className="mt-2 font-semibold text-green-400" style={{ fontFamily: 'monospace' }}>Python fundamentals & backend development</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div variants={itemVariants} className="pt-12 mt-16 border-t border-white/10">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <div>
              <h3 className="mb-2 text-2xl font-bold text-white" style={{ fontFamily: 'Special Elite, monospace' }}>
                <span className="text-blue-400">if</span> (readyToCollaborate) {'{'}
              </h3>
              <p className="pl-4 text-white/60" style={{ fontFamily: 'Special Elite, monospace' }}>// Let's build something together</p>
            </div>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 font-semibold text-black transition-all duration-300 bg-white cursor-pointer hover:bg-green-400 whitespace-nowrap"
              style={{ fontFamily: 'monospace' }}
            >
              $ contact_me
            </motion.a>
          </div>
          <p className="mt-2 text-white/40" style={{ fontFamily: 'Special Elite, monospace' }}>{'}'}</p>
        </motion.div>
      </motion.div>
    </section>
  )
}