import { Mail, Send, Heart, Terminal } from 'lucide-react'
import { motion } from 'framer-motion'

// Reused from Contact.jsx — lucide-react dropped brand logos, so these are inline SVGs
const GithubIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.09 3.29 9.4 7.86 10.93.57.1.79-.25.79-.55 0-.27-.01-1.14-.02-2.06-3.2.7-3.88-1.35-3.88-1.35-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.75 2.7 1.25 3.36.96.1-.74.4-1.25.73-1.54-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18.91-.25 1.89-.38 2.86-.38.97 0 1.95.13 2.86.38 2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.76.11 3.05.73.81 1.18 1.84 1.18 3.1 0 4.43-2.7 5.41-5.27 5.7.41.36.78 1.07.78 2.16 0 1.56-.01 2.82-.01 3.2 0 .3.21.66.8.55A10.51 10.51 0 0 0 23.5 12c0-6.27-5.23-11.5-11.5-11.5Z" />
  </svg>
)
const LinkedinIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.15 2.07 2.07 0 0 1 0 4.15ZM7.12 20.45H3.56V9h3.56v11.45Z" />
  </svg>
)

// EDIT SOCIAL LINKS HERE — keep in sync with Contact.jsx; blank url hides the icon
const socialLinks = [
  { icon: Mail, href: 'mailto:youremail@example.com', label: 'Email' },
  { icon: GithubIcon, href: 'https://github.com/esubokemmanuel3-a11y', label: 'GitHub' },
  { icon: LinkedinIcon, href: '', label: 'LinkedIn' },
  { icon: Send, href: 'https://t.me/PzKBM', label: 'Telegram' },
]

// EDIT NAV LINKS HERE — keep in sync with Navbar.jsx section ids
const quickLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

// EDIT DIRECT CONTACT HERE — keep in sync with Contact.jsx's directContact
const directContact = {
  email: 'youremail@example.com',
  phone: '', // e.g. '+234 91393 XXXX' — leave blank to show placeholder
  location: 'Nigeria',
}

export default function Footer() {
  return (
    <footer className="relative bg-black border-t border-white/10">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <pre className="hidden md:block absolute top-8 left-8 text-white/10 text-xs" style={{ fontFamily: 'monospace' }}>
{`// End of file
// Thanks!`}
        </pre>
      </div>

      <div className="relative max-w-6xl px-4 py-8 mx-auto sm:px-6 sm:py-12">
        <div className="grid grid-cols-1 gap-8 mb-6 sm:grid-cols-2 md:grid-cols-3 sm:gap-10 lg:gap-12 sm:mb-8">
          {/* Brand */}
          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-center gap-2">
              <Terminal className="w-6 h-6 text-green-400" />
              {/* EDIT LOGO INITIALS HERE */}
              <h3 className="text-xl font-bold text-white sm:text-2xl" style={{ fontFamily: 'Special Elite, monospace' }}>
                <span className="text-green-400">EE</span>
              </h3>
            </div>
            {/* EDIT MISSION LINE HERE */}
            <p className="pl-3 text-sm leading-relaxed border-l-2 border-green-400 text-white/60" style={{ fontFamily: 'Special Elite, monospace' }}>
              <span className="text-xs text-green-400">// Mission</span><br />
              Building trading automation tools with precision, while leveling up as a software engineer.
            </p>
            <div className="flex gap-3">
              {socialLinks
                .filter((social) => social.href && social.href.trim() !== '')
                .map((social, idx) => {
                  const Icon = social.icon
                  return (
                    <motion.a
                      key={idx}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{ scale: 1.1, y: -3 }}
                      className="p-2 transition-all duration-300 border border-white/10 bg-white/5 hover:border-green-400/50 hover:bg-green-400/10 group"
                      aria-label={social.label}
                    >
                      <Icon className="w-5 h-5 transition-colors text-white/60 group-hover:text-green-400" />
                    </motion.a>
                  )
                })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white" style={{ fontFamily: 'Special Elite, monospace' }}>
              <span className="text-purple-400">const</span> navigation = [
            </h4>
            <ul className="pl-4 space-y-2">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors duration-300 text-white/60 hover:text-green-400"
                    style={{ fontFamily: 'monospace' }}
                  >
                    "{link.label}",
                  </a>
                </li>
              ))}
            </ul>
            <p className="text-lg text-white/40" style={{ fontFamily: 'Special Elite, monospace' }}>];</p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white" style={{ fontFamily: 'Special Elite, monospace' }}>
              <span className="text-purple-400">const</span> contact = {'{'}
            </h4>
            <div className="pl-4 space-y-2 text-sm">
              <p className="text-white/60" style={{ fontFamily: 'monospace' }}>
                email: <a href={`mailto:${directContact.email}`} className="text-green-400 hover:underline">"{directContact.email}"</a>,
              </p>
              <p className="text-white/60" style={{ fontFamily: 'monospace' }}>
                phone: <span className="text-blue-400">"{directContact.phone || '+234 XXX XXX XXXX'}"</span>,
              </p>
              <p className="text-white/60" style={{ fontFamily: 'monospace' }}>
                location: <span className="text-purple-400">"{directContact.location}"</span>
              </p>
            </div>
            <p className="text-lg text-white/40" style={{ fontFamily: 'Special Elite, monospace' }}>{'}'}</p>
          </div>
        </div>

        <div className="h-px mb-6 bg-gradient-to-r from-transparent via-white/10 to-transparent sm:mb-8" />

        <div className="flex flex-col items-center justify-between gap-3 text-center md:flex-row sm:gap-4 md:text-left">
          {/* EDIT NAME HERE */}
          <p className="text-xs sm:text-sm text-white/40" style={{ fontFamily: 'monospace' }}>
            // &copy; {new Date().getFullYear()} Emmanuel Esubok. All rights reserved.
          </p>
          <p className="flex items-center gap-2 text-xs sm:text-sm text-white/40" style={{ fontFamily: 'monospace' }}>
            <span>Built with</span>
            <Heart className="w-4 h-4 text-green-400 fill-green-400" />
            <span>&& lots of coffee</span>
          </p>
        </div>
      </div>
    </footer>
  )
}