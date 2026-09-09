import { motion } from 'framer-motion'
import { ArrowRight, Mail } from 'lucide-react'
import { useTypewriter } from '../hooks/useTypewriter'

// EDIT ROLES HERE — these cycle in the typewriter effect
const roles = [
  'Emmanuel',
  'Software Engineering Student',
  'Python Developer',
  'Trading Automation Builder',
]

export default function Hero() {
  const { text: displayText, cursor: showCursor } = useTypewriter(roles, 100, 50, 2000)

  return (
    <section
      id="hero"
      className="relative flex items-center justify-center min-h-screen px-6 py-32 overflow-hidden bg-black sm:px-8"
    >
      <div className="relative z-10 w-full mx-auto max-w-7xl">
        <div className="space-y-12 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-sm text-white/40"
            style={{ fontFamily: 'Special Elite, monospace' }}
          >
            <span className="text-green-500">emmanuel@portfolio</span>
            <span className="text-white/40">:</span>
            <span className="text-blue-400">~</span>
            <span className="text-white/40">$ ./introduce.sh</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] text-white mb-8"
              style={{ fontFamily: 'Special Elite, monospace' }}
            >
              <span className="inline-flex items-baseline justify-center">
                {displayText}
                <span className={`ml-2 ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}>_</span>
              </span>
            </h1>

            {/* EDIT ROLE TAGS HERE */}
            <div
              className="flex items-center justify-center gap-3 mb-4 text-base sm:text-lg text-white/60"
              style={{ fontFamily: 'Special Elite, monospace' }}
            >
              <span className="text-green-500">{'>'}</span>
              <span>SOFTWARE ENGINEERING STUDENT</span>
              <span className="text-white/20">|</span>
              <span>PYTHON DEVELOPER</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="max-w-3xl mx-auto space-y-6"
          >
            <div className="pl-6 text-left border-l-2 border-white/20">
              {/* EDIT BIO LINES HERE */}
              <p
                className="mb-4 text-lg leading-relaxed sm:text-xl text-white/70"
                style={{ fontFamily: 'Special Elite, monospace' }}
              >
                <span className="text-sm text-green-500">{'// '}</span>
                Hi, I'm <span className="font-bold text-white">Emmanuel</span>, a final-year software engineering student.
              </p>
              <p
                className="mb-4 text-lg leading-relaxed sm:text-xl text-white/70"
                style={{ fontFamily: 'Special Elite, monospace' }}
              >
                <span className="text-sm text-green-500">{'// '}</span>
                I build <span className="text-white underline decoration-white/30">trading automation tools</span> with Python and MQL5.
              </p>
              <p
                className="text-lg leading-relaxed sm:text-xl text-white/70"
                style={{ fontFamily: 'Special Elite, monospace' }}
              >
                <span className="text-sm text-green-500">{'// '}</span>
                Currently leveling up my Python skills to move into backend and DevSecOps work.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a
              href="#projects"
              className="relative inline-flex items-center gap-3 px-8 py-4 overflow-hidden font-medium text-black transition-all duration-300 bg-white group"
              style={{ fontFamily: 'Special Elite, monospace' }}
            >
              <span className="relative z-10">$ view_projects</span>
              <ArrowRight className="relative z-10 w-5 h-5 transition-transform group-hover:translate-x-1" />
              <span className="absolute inset-0 transition-transform duration-300 translate-y-full bg-green-500 group-hover:translate-y-0" />
            </a>
            {/* EDIT CV LINK HERE — point this to your actual CV file once you have one */}
            <a
              href="/cv.pdf"
              download
              className="inline-flex items-center gap-3 px-8 py-4 font-medium text-white transition-all duration-300 border border-white/30 hover:bg-white hover:text-black"
              style={{ fontFamily: 'Special Elite, monospace' }}
            >
              $ download_cv
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="space-y-4"
          >
            <p className="text-sm text-white/40" style={{ fontFamily: 'Special Elite, monospace' }}>
              // Connect with me
            </p>
            {/* EDIT SOCIAL LINKS HERE */}
            <div className="flex justify-center gap-4">
              <a
                href="https://github.com/YOUR-GITHUB"
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex items-center justify-center w-12 h-12 transition-all duration-300 border group border-white/30 hover:border-white"
              >
                {/* GitHub icon — lucide-react dropped brand logos, so this is a small inline SVG instead */}
                <svg viewBox="0 0 24 24" className="relative z-10 w-5 h-5 fill-current">
                  <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.09 3.29 9.4 7.86 10.93.57.1.79-.25.79-.55 0-.27-.01-1.14-.02-2.06-3.2.7-3.88-1.35-3.88-1.35-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.75 2.7 1.25 3.36.96.1-.74.4-1.25.73-1.54-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18.91-.25 1.89-.38 2.86-.38.97 0 1.95.13 2.86.38 2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.76.11 3.05.73.81 1.18 1.84 1.18 3.1 0 4.43-2.7 5.41-5.27 5.7.41.36.78 1.07.78 2.16 0 1.56-.01 2.82-.01 3.2 0 .3.21.66.8.55A10.51 10.51 0 0 0 23.5 12c0-6.27-5.23-11.5-11.5-11.5Z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/YOUR-LINKEDIN"
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex items-center justify-center w-12 h-12 transition-all duration-300 border group border-white/30 hover:border-white"
              >
                {/* LinkedIn icon — same reason as above, inline SVG instead of a lucide import */}
                <svg viewBox="0 0 24 24" className="relative z-10 w-5 h-5 fill-current">
                  <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.15 2.07 2.07 0 0 1 0 4.15ZM7.12 20.45H3.56V9h3.56v11.45Z" />
                </svg>
              </a>
              <a
                href="mailto:youremail@example.com"
                className="relative flex items-center justify-center w-12 h-12 transition-all duration-300 border group border-white/30 hover:border-white"
              >
                <Mail className="relative z-10 w-5 h-5 transition-colors" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="inline-block px-6 py-3 text-sm border border-white/10 bg-white/5 text-white/60"
            style={{ fontFamily: 'Special Elite, monospace' }}
          >
            <span className="text-purple-400">const</span> <span className="text-blue-400">status</span> ={' '}
            <span className="text-green-400">"Open to opportunities"</span>;
          </motion.div>
        </div>
      </div>
    </section>
  )
}