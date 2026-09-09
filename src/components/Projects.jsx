import { motion } from 'framer-motion'
import { ArrowUpRight, Terminal, Bot, LineChart, Radio } from 'lucide-react'

// EDIT PROJECTS HERE — add/remove/edit as your work evolves
const projects = [
  {
    title: 'MT5 Signal Backtester',
    description: 'A desktop app that backtests Telegram trading signals against real MT5 price history — balance-tier lot sizing, breakeven/trailing stops, and a full equity-curve dashboard.',
    tags: ['Python', 'Telethon', 'CustomTkinter', 'SQLite', 'Matplotlib'],
    icon: LineChart,
    status: 'In Development',
    // EDIT LINKS HERE once you have them — leave blank to hide that button
    link: 'ss',
    github: 'ss',
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

const statusColor = {
  Live: 'text-green-400 border-green-500/30 bg-green-500/10',
  'In Development': 'text-blue-400 border-blue-500/30 bg-blue-500/10',
  Completed: 'text-purple-400 border-purple-500/30 bg-purple-500/10',
}

export default function Projects() {
  return (
    <section id="projects" className="relative px-6 py-24 bg-black sm:py-32 sm:px-8">
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
          <h2 className="mb-6 text-4xl font-bold text-white sm:text-5xl lg:text-6xl" style={{ fontFamily: 'Special Elite, monospace' }}>
            Selected <span className="text-green-400">Work</span>
          </h2>
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
                    <Icon className="relative z-10 w-20 h-20 text-white" strokeWidth={1.5} />
                    <div className="absolute inset-0 transition-transform duration-500 translate-y-full bg-green-500 group-hover:translate-y-0" />
                    <Icon className="absolute inset-0 z-20 w-20 h-20 m-auto text-black transition-opacity duration-500 opacity-0 group-hover:opacity-100" strokeWidth={1.5} />
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