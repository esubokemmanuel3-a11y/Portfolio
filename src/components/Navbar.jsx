import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// EDIT NAV LINKS HERE
const navigation = [
  { name: 'HOME', id: 'hero' },
  { name: 'ABOUT', id: 'about' },
  { name: 'PROJECTS', id: 'projects' },
  { name: 'CONTACT', id: 'contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [dragConstraints, setDragConstraints] = useState({ top: 0, left: 0, right: 0, bottom: 0 })

  // Track scroll position so we can swap logo/heartbeat state past 50px
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Keep the draggable nav panel from being dragged off-screen
  useEffect(() => {
    const updateConstraints = () => {
      const navWidth = 200
      const navHeight = 300
      setDragConstraints({
        top: -(window.innerHeight - navHeight - 100),
        left: -(window.innerWidth - navWidth - 50),
        right: window.innerWidth - navWidth - 50,
        bottom: window.innerHeight - navHeight - 100,
      })
    }
    updateConstraints()
    window.addEventListener('resize', updateConstraints)
    return () => window.removeEventListener('resize', updateConstraints)
  }, [])

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setIsOpen(false)
  }

  return (
    <>
      {/* Top bar: logo + heartbeat lines, background fades in once scrolled */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-black/95 backdrop-blur-sm border-b border-white/10' : 'bg-black/50'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Left heartbeat — only visible once scrolled */}
            <div
              className={`hidden md:block transition-all duration-500 ${
                scrolled ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
              }`}
            >
              <svg width="450" height="40" viewBox="0 0 450 40" fill="none">
                <defs>
                  <linearGradient id="ecgColorLeft" x1="0%" x2="100%">
                    <stop offset="0%" stopColor="#ffffff" />
                    <stop offset="100%" stopColor="#9ca3af" />
                  </linearGradient>
                  <linearGradient id="ecgFadeLeft" x1="100%" x2="0%">
                    <stop offset="0%" stopColor="white" stopOpacity="0" />
                    <stop offset="30%" stopColor="white" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="white" stopOpacity="1" />
                  </linearGradient>
                  <mask id="ecgMaskLeft">
                    <motion.rect
                      width="450"
                      height="40"
                      fill="url(#ecgFadeLeft)"
                      initial={{ x: 450 }}
                      animate={{ x: -450 }}
                      transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                    />
                  </mask>
                </defs>
                <path
                  d="M0 20 L12 22 L20 18 L28 21 L38 19 L50 20 L65 23 L78 20 L95 22 L105 19 L120 21 L135 19 L150 25 L155 35 L160 -5 L165 35 L170 20 L185 23 L198 18 L212 22 L228 19 L243 21 L260 23 L275 19 L290 22 L305 19 L320 25 L325 35 L330 -5 L335 35 L340 20 L355 23 L370 18 L385 22 L400 19 L415 21 L430 23 L450 20"
                  stroke="url(#ecgColorLeft)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  mask="url(#ecgMaskLeft)"
                  style={{ filter: 'drop-shadow(0 0 3px #ffffff66)' }}
                />
              </svg>
            </div>

            {/* Logo: full name splits apart / "NS"-style initials fade in once scrolled */}
            <button
              onClick={() => scrollToSection('hero')}
              className="relative overflow-hidden hover:opacity-70 transition-opacity"
            >
              <div
                className={`flex items-center gap-0 transition-all duration-500 ${
                  scrolled ? 'opacity-0' : 'opacity-100'
                }`}
              >
                {/* EDIT FIRST NAME HERE */}
                <span
                  className={`text-4xl sm:text-5xl font-bold text-white transition-all duration-500 ${
                    scrolled ? 'translate-x-[-50%]' : 'translate-x-0'
                  }`}
                  style={{ fontFamily: 'Special Elite, monospace' }}
                >
                  Emma
                </span>
                {/* EDIT LAST NAME HERE */}
                <span
                  className={`text-4xl sm:text-5xl font-bold text-white transition-all duration-500 ${
                    scrolled ? 'translate-x-[50%]' : 'translate-x-0'
                  }`}
                  style={{ fontFamily: 'Special Elite, monospace' }}
                >
                  nuel
                </span>
              </div>

              {/* EDIT INITIALS HERE — shown once scrolled */}
              <div
                className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
                  scrolled ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <span className="text-3xl sm:text-4xl font-bold text-white" style={{ fontFamily: 'Special Elite, monospace' }}>
                  EE
                </span>
              </div>
            </button>

            {/* Right heartbeat — only visible once scrolled */}
            <div
              className={`hidden md:block transition-all duration-500 ${
                scrolled ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
              }`}
            >
              <svg width="450" height="40" viewBox="0 0 450 40" fill="none">
                <defs>
                  <linearGradient id="ecgColorRight" x1="0%" x2="100%">
                    <stop offset="0%" stopColor="#9ca3af" />
                    <stop offset="100%" stopColor="#ffffff" />
                  </linearGradient>
                  <linearGradient id="ecgFadeRight" x1="0%" x2="100%">
                    <stop offset="0%" stopColor="white" stopOpacity="1" />
                    <stop offset="70%" stopColor="white" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="white" stopOpacity="0" />
                  </linearGradient>
                  <mask id="ecgMaskRight">
                    <motion.rect
                      width="450"
                      height="40"
                      fill="url(#ecgFadeRight)"
                      initial={{ x: -450 }}
                      animate={{ x: 450 }}
                      transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                    />
                  </mask>
                </defs>
                <path
                  d="M0 20 L12 22 L20 18 L28 21 L38 19 L50 20 L65 23 L78 20 L95 22 L105 19 L120 21 L135 19 L150 25 L155 35 L160 -5 L165 35 L170 20 L185 23 L198 18 L212 22 L228 19 L243 21 L260 23 L275 19 L290 22 L305 19 L320 25 L325 35 L330 -5 L335 35 L340 20 L355 23 L370 18 L385 22 L400 19 L415 21 L430 23 L450 20"
                  stroke="url(#ecgColorRight)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  mask="url(#ecgMaskRight)"
                  style={{ filter: 'drop-shadow(0 0 3px #ffffff66)' }}
                />
              </svg>
            </div>
          </div>
        </nav>
      </header>

      {/* Floating draggable nav panel — desktop only */}
      <motion.div
        drag
        dragConstraints={dragConstraints}
        dragElastic={0}
        dragMomentum={false}
        className="hidden md:block fixed bottom-8 right-8 z-50 cursor-move"
      >
        <div className="flex flex-col gap-2 bg-white/5 backdrop-blur-sm border border-white/10 p-2">
          <div
            className="text-white/40 text-[10px] text-center select-none mb-1"
            style={{ fontFamily: 'Special Elite, monospace' }}
          >
            // drag me
          </div>
          {navigation.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="px-4 py-2 text-xs font-medium text-white/60 hover:text-white hover:bg-white/5 transition-all cursor-pointer"
              style={{ fontFamily: 'Special Elite, monospace' }}
            >
              {item.name}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Mobile hamburger — animates into an X */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-6 right-6 z-50 p-2 text-white hover:bg-white/10 transition-colors"
      >
        <div className="relative w-6 h-6 flex flex-col justify-center items-center">
          <motion.span
            animate={isOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -8 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="absolute w-6 h-0.5 bg-white origin-center"
          />
          <motion.span
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="absolute w-6 h-0.5 bg-white"
          />
          <motion.span
            animate={isOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 8 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="absolute w-6 h-0.5 bg-white origin-center"
          />
        </div>
      </button>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/80 z-40 md:hidden"
            />
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="fixed top-20 left-0 right-0 bg-black border-b border-white/10 z-50 md:hidden"
            >
              <div className="px-6 py-4 space-y-2">
                {navigation.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left px-4 py-3 text-sm font-medium text-white hover:bg-white/5 transition-colors"
                    style={{ fontFamily: 'Special Elite, monospace' }}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}