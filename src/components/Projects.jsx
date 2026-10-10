import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, Terminal, Bot, LineChart, Radio, BookOpen, Maximize2, X } from 'lucide-react'

// EDIT PROJECTS HERE — add/remove/edit as your work evolves
const projects = [
  {
    title: 'Daily Devotional Journal',
    // EDIT DESCRIPTION HERE — trim anything you didn't actually build in v2
    description: "A daily devotional app built around Spurgeon's Morning and Evening. It shows the right entry for the time of day, lets you write and tag your own reflection for each one, and keeps a searchable timeline of everything you've written.",
    // EDIT STACK HERE
    tags: ['React', 'Supabase', 'Tailwind'],
    icon: BookOpen,
    // EDIT SCREENSHOTS HERE — drop images in the public/ folder and list their paths, e.g. ['/devotional-1.png', '/devotional-2.png'].
    // One image = plain image. Two or more = slider with arrows. Empty = icon.
    images: ['/devotion 1.jpeg', '/devotion 2.jpeg', '/devotion 3.jpeg'],
    status: 'Live',
    // EDIT LINKS HERE
    link: 'https://devotion-journal.vercel.app/',
    github: '',
  },
  {
    title: 'MT5 Signal Backtester',
    description: 'A desktop app that backtests Telegram trading signals against real MT5 price history — balance-tier lot sizing, breakeven/trailing stops, and a full equity-curve dashboard.',
    tags: ['Python', 'Telethon', 'CustomTkinter', 'SQLite', 'Matplotlib'],
    icon: LineChart,
    status: 'In Development',
    // EDIT LINKS HERE once you have them — leave blank to hide that button
    link: '',
    github: '',
  },
  {
    title: 'Telegram-to-MT5 Signal Copier',
    description: 'A live signal copier that reads trading signals from a Telegram channel and executes them automatically on MT5, deployed and running on a Windows VPS.',
    tags: ['Python', 'Telethon', 'MetaTrader5', 'PyInstaller'],
    icon: Radio,
    status: 'Live',
    link: '',
    github: '',
  },
  {
    title: 'TrendContinuationBot',
    description: 'An MQL5 Expert Advisor iterated across 7 versions on EURUSD M15, reaching a 1.95 profit factor before hitting a structural frequency ceiling — used as the base for Fiverr EA client work.',
    tags: ['MQL5', 'Backtesting', 'Expert Advisor'],
    icon: Bot,
    status: 'Completed',
    link: '',
    github: '',
  },
]

// Hover/press feel for the buttons inside the fullscreen viewer. (Card buttons scale with the card via group-hover:scale-125 in ProjectMedia.)
const buttonMotion = {
  whileHover: { scale: 1.3 },
  whileTap: { scale: 0.9 },
  transition: { type: 'spring', stiffness: 400, damping: 20 },
}

// Fullscreen viewer: click backdrop / X / press Esc to close, arrow keys or swipe to move between images.
function Lightbox({ title, images, index, setIndex, onClose }) {
  const total = images.length
  const many = total > 1
  const go = (dir) => setIndex((i) => (i + dir + total) % total)

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (many && e.key === 'ArrowRight') go(1)
      if (many && e.key === 'ArrowLeft') go(-1)
    }
    window.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden' // stop the page scrolling behind the viewer
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [many, total])

  // Rendered into <body> so it covers the whole screen, not just the project card
  return createPortal(
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm sm:p-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${title} screenshots`}
    >
      <motion.button
        type="button"
        onClick={onClose}
        aria-label="Close"
        {...buttonMotion}
        className="absolute z-10 flex items-center justify-center w-11 h-11 text-white transition-colors border top-4 right-4 bg-black/70 border-white/30 hover:bg-green-500 hover:border-green-500 hover:text-black"
      >
        <X className="w-5 h-5" />
      </motion.button>

      <AnimatePresence mode="wait" initial={false}>
        <motion.img
          key={index}
          src={images[index]}
          alt={`${title} screenshot ${index + 1}`}
          draggable={false}
          onClick={(e) => e.stopPropagation()}
          className="object-contain max-w-[95vw] max-h-[85vh] border border-white/20"
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          drag={many ? 'x' : false}
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragEnd={(_, info) => {
            if (info.offset.x < -50) go(1)
            else if (info.offset.x > 50) go(-1)
          }}
        />
      </AnimatePresence>

      {many && (
        <>
          <motion.button
            type="button"
            onClick={(e) => { e.stopPropagation(); go(-1) }}
            aria-label="Previous image"
            {...buttonMotion}
            className="absolute z-10 flex items-center justify-center w-10 h-10 -mt-5 text-lg text-white transition-colors border left-3 sm:left-6 top-1/2 bg-black/70 border-white/30 hover:bg-green-500 hover:border-green-500 hover:text-black"
            style={{ fontFamily: 'monospace' }}
          >
            {'<'}
          </motion.button>
          <motion.button
            type="button"
            onClick={(e) => { e.stopPropagation(); go(1) }}
            aria-label="Next image"
            {...buttonMotion}
            className="absolute z-10 flex items-center justify-center w-10 h-10 -mt-5 text-lg text-white transition-colors border right-3 sm:right-6 top-1/2 bg-black/70 border-white/30 hover:bg-green-500 hover:border-green-500 hover:text-black"
            style={{ fontFamily: 'monospace' }}
          >
            {'>'}
          </motion.button>
          <span
            className="absolute z-10 px-3 py-1 text-xs -translate-x-1/2 border bottom-4 left-1/2 bg-black/70 border-white/20 text-white/70"
            style={{ fontFamily: 'monospace' }}
            onClick={(e) => e.stopPropagation()}
          >
            {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
          </span>
        </>
      )}
    </motion.div>,
    document.body
  )
}

// Image slider for a project card: arrows, swipe, counter, click-to-fullscreen. Falls back to the icon when there are no images.
function ProjectMedia({ title, images = [], Icon }) {
  const [index, setIndex] = useState(0)
  const [open, setOpen] = useState(false)
  const total = images.length

  if (total === 0) {
    return (
      <>
        <Icon className="relative z-10 w-20 h-20 text-white" strokeWidth={1.5} />
        <div className="absolute inset-0 transition-transform duration-500 translate-y-full bg-green-500 group-hover:translate-y-0" />
        <Icon className="absolute inset-0 z-20 w-20 h-20 m-auto text-black transition-opacity duration-500 opacity-0 group-hover:opacity-100" strokeWidth={1.5} />
      </>
    )
  }

  const go = (dir) => setIndex((i) => (i + dir + total) % total)
  const many = total > 1

  return (
    <div className="relative w-full h-full">
      {/* Hover effect: dim + desaturated at rest, full colour + slow zoom on hover. EDIT the classes below to tune it. */}
      <div
        className="relative w-full h-full transition-all duration-700 cursor-zoom-in grayscale-50 brightness-75 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105"
        onClick={(e) => { if (e.target === e.currentTarget) setOpen(true) }}
      >
        {/* Blurred copy of the screenshot fills the empty sides, so tall phone screenshots don't sit in a bare box */}
        <img
          src={images[index]}
          alt=""
          aria-hidden="true"
          draggable={false}
          className="absolute inset-0 object-cover w-full h-full opacity-40 pointer-events-none scale-125 blur-2xl"
        />
        <AnimatePresence mode="wait" initial={false}>
          <motion.img
            key={index}
            src={images[index]}
            alt={`${title} screenshot ${index + 1}`}
            draggable={false}
            // EDIT FIT HERE: object-contain shows the whole screenshot. Change to object-cover to fill the frame (crops the edges).
            className={`relative object-contain w-full h-full ${many ? 'cursor-grab active:cursor-grabbing' : 'cursor-zoom-in'}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onTap={() => setOpen(true)}
            drag={many ? 'x' : false}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={(_, info) => {
              if (info.offset.x < -50) go(1)
              else if (info.offset.x > 50) go(-1)
            }}
          />
        </AnimatePresence>
      </div>

      {/* CRT scanlines: visible at rest, fade out on hover */}
      <div
        className="absolute inset-0 z-10 transition-opacity duration-500 pointer-events-none group-hover:opacity-0"
        style={{ backgroundImage: 'repeating-linear-gradient(0deg, rgba(0,0,0,0.3) 0px, rgba(0,0,0,0.3) 1px, transparent 1px, transparent 3px)' }}
      />

      {/* Green scan line: sweeps up the image on hover */}
      <div className="absolute inset-x-0 z-10 h-0.5 bg-green-400 opacity-0 pointer-events-none -bottom-1 shadow-[0_0_20px_4px_rgba(74,222,128,0.8)] transition-all duration-700 ease-out group-hover:bottom-full group-hover:opacity-100" />

      {/* Fullscreen button (clicking the image does the same) */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="View fullscreen"
        className="absolute z-30 flex items-center justify-center w-8 h-8 text-white transition-all duration-300 group-hover:scale-125 border top-2 right-2 bg-black/70 border-white/30 hover:bg-green-500 hover:border-green-500 hover:text-black"
      >
        <Maximize2 className="w-4 h-4" />
      </button>

      {many && (
        <>
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous image"
            className="absolute z-30 flex items-center justify-center w-8 h-8 -mt-4 text-white transition-all duration-300 group-hover:scale-125 border left-2 top-1/2 bg-black/70 border-white/30 hover:bg-green-500 hover:border-green-500 hover:text-black"
            style={{ fontFamily: 'monospace' }}
          >
            {'<'}
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next image"
            className="absolute z-30 flex items-center justify-center w-8 h-8 -mt-4 text-white transition-all duration-300 group-hover:scale-125 border right-2 top-1/2 bg-black/70 border-white/30 hover:bg-green-500 hover:border-green-500 hover:text-black"
            style={{ fontFamily: 'monospace' }}
          >
            {'>'}
          </button>

          <div className="absolute z-30 flex gap-1.5 bottom-3 left-3">
            {images.map((_, i) => (
              <button
                type="button"
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Go to image ${i + 1}`}
                className={`w-2 h-2 border transition-colors ${i === index ? 'bg-green-400 border-green-400' : 'bg-black/70 border-white/40 hover:border-white'}`}
              />
            ))}
          </div>

          <span
            className="absolute z-30 px-2 py-1 text-xs border bottom-2 right-2 bg-black/70 border-white/20 text-white/70"
            style={{ fontFamily: 'monospace' }}
          >
            {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
          </span>
        </>
      )}

      <AnimatePresence>
        {open && (
          <Lightbox
            key="lightbox"
            title={title}
            images={images}
            index={index}
            setIndex={setIndex}
            onClose={() => setOpen(false)}
          />
        )}
      </AnimatePresence>
    </div>
  )
}

const statusColor = {
  Live: 'text-green-400 border-green-500/30 bg-green-500/10',
  'In Development': 'text-blue-400 border-blue-500/30 bg-blue-500/10',
  Completed: 'text-purple-400 border-purple-500/30 bg-purple-500/10',
}

export default function Projects() {
  return (
    <section id="projects" className="relative px-6 py-24 scroll-mt-24 bg-black sm:py-32 sm:px-8">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <pre className="hidden md:block absolute text-xs top-24 right-12 text-white/10" style={{ fontFamily: 'monospace' }}>
{`const projects = [
  ...portfolio,
  ...experiments
];`}
        </pre>
        <pre className="hidden md:block absolute text-xs bottom-32 left-12 text-white/10" style={{ fontFamily: 'monospace' }}>
{`// Building with purpose
// Shipping with pride`}
        </pre>
      </div>

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 sm:mb-20"
        >
          <div className="inline-block mb-4">
            <span className="px-4 py-2 text-xs font-semibold tracking-widest text-green-400 uppercase border sm:text-sm bg-green-500/10 border-green-500/30" style={{ fontFamily: 'monospace' }}>
              $ cd ~/projects
            </span>
          </div>
          <h2 className="mb-3 text-4xl font-bold text-white sm:text-5xl lg:text-6xl" style={{ fontFamily: 'Special Elite, monospace' }}>
            Selected <span className="text-green-400">Work</span>
          </h2>
          {/* EDIT ROLE LINE HERE */}
          <p className="mb-4 text-sm tracking-widest uppercase text-white/40" style={{ fontFamily: 'monospace' }}>
            Software Engineering Student · Python & MQL5 Developer
          </p>
          {/* EDIT SUBTEXT HERE */}
          <p className="max-w-3xl pl-4 text-lg border-l-2 border-green-400 text-white/60" style={{ fontFamily: 'Special Elite, monospace' }}>
            <span className="text-sm text-green-400">// Portfolio Overview</span><br />
            Trading automation tools built with real users and real constraints in mind — not tutorials.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
          {projects.map((project, index) => {
            const Icon = project.icon
            const hasGithub = project.github && project.github.trim() !== ''
            const hasLink = project.link && project.link.trim() !== ''
            return (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="p-6 transition-all duration-300 bg-black border border-white/10 hover:border-green-400/50">
                  <div className="mb-6 w-full aspect-[4/3] border border-white/20 bg-white/5 flex items-center justify-center relative overflow-hidden">
                    <ProjectMedia title={project.title} images={project.images} Icon={Icon} />
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-2xl font-bold text-white sm:text-3xl" style={{ fontFamily: 'Special Elite, monospace' }}>
                        {project.title}
                      </h3>
                      <span
                        className={`shrink-0 px-3 py-1 text-xs font-semibold border ${statusColor[project.status]}`}
                        style={{ fontFamily: 'monospace' }}
                      >
                        {project.status}
                      </span>
                    </div>

                    <p className="text-base leading-relaxed text-white/70" style={{ fontFamily: 'Special Elite, monospace' }}>
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs font-medium text-green-400 border bg-green-500/10 border-green-500/30"
                          style={{ fontFamily: 'monospace' }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {(hasLink || hasGithub) && (
                      <div className="flex gap-4 pt-4 border-t border-white/10">
                        {hasLink && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm transition-colors text-white/60 hover:text-green-400"
                            style={{ fontFamily: 'monospace' }}
                          >
                            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                              <path strokeLinecap="round" strokeLinejoin="round" d="M15 3h6v6" />
                              <path strokeLinecap="round" strokeLinejoin="round" d="M10 14L21 3" />
                            </svg>
                            <span>view_live</span>
                          </a>
                        )}
                        {hasGithub && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm transition-colors text-white/60 hover:text-green-400"
                            style={{ fontFamily: 'monospace' }}
                          >
                            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                              <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.09 3.29 9.4 7.86 10.93.57.1.79-.25.79-.55 0-.27-.01-1.14-.02-2.06-3.2.7-3.88-1.35-3.88-1.35-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.75 2.7 1.25 3.36.96.1-.74.4-1.25.73-1.54-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18.91-.25 1.89-.38 2.86-.38.97 0 1.95.13 2.86.38 2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.76.11 3.05.73.81 1.18 1.84 1.18 3.1 0 4.43-2.7 5.41-5.27 5.7.41.36.78 1.07.78 2.16 0 1.56-.01 2.82-.01 3.2 0 .3.21.66.8.55A10.51 10.51 0 0 0 23.5 12c0-6.27-5.23-11.5-11.5-11.5Z" />
                            </svg>
                            <span>source_code</span>
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-12 mt-16 border-t border-white/10"
        >
          <div className="mb-4">
            <h3 className="text-xl sm:text-2xl font-bold text-white" style={{ fontFamily: 'Special Elite, monospace' }}>
              <span className="text-purple-400">if</span> (interestedInMore) {'{'}
            </h3>
          </div>
          <p className="pl-4 sm:pl-8 mb-6 text-white/60 text-sm sm:text-base" style={{ fontFamily: 'Special Elite, monospace' }}>
            Check out my GitHub for additional projects and experiments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pl-4 sm:pl-8">
            {/* EDIT GITHUB PROFILE LINK HERE */}
            <a
              href="https://github.com/esubokemmanuel3-a11y"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-6 py-3 font-medium text-black transition-all duration-300 bg-white border border-white hover:bg-green-400"
              style={{ fontFamily: 'monospace' }}
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.09 3.29 9.4 7.86 10.93.57.1.79-.25.79-.55 0-.27-.01-1.14-.02-2.06-3.2.7-3.88-1.35-3.88-1.35-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.75 2.7 1.25 3.36.96.1-.74.4-1.25.73-1.54-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18.91-.25 1.89-.38 2.86-.38.97 0 1.95.13 2.86.38 2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.76.11 3.05.73.81 1.18 1.84 1.18 3.1 0 4.43-2.7 5.41-5.27 5.7.41.36.78 1.07.78 2.16 0 1.56-.01 2.82-.01 3.2 0 .3.21.66.8.55A10.51 10.51 0 0 0 23.5 12c0-6.27-5.23-11.5-11.5-11.5Z" />
              </svg>
              $ view_github
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-3 px-6 py-3 font-medium text-white transition-all duration-300 bg-black border hover:bg-white/5 border-white/30 hover:border-white"
              style={{ fontFamily: 'monospace' }}
            >
              $ contact_me
              <ArrowUpRight className="w-5 h-5" />
            </a>
          </div>
          <p className="mt-4 text-lg text-white/40" style={{ fontFamily: 'Special Elite, monospace' }}>{'}'}</p>
        </motion.div>
      </div>
    </section>
  )
}