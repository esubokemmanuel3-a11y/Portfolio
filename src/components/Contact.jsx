import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, Phone, Send, Briefcase } from 'lucide-react'
import { useState } from 'react'

// Small inline SVGs for GitHub/LinkedIn — lucide-react dropped brand logos in newer versions
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

// EDIT DIRECT CONTACT HERE — leave phone blank to hide that card until you're ready
const directContact = {
  email: 'youremail@example.com',
  phone: '+23481376664962', // e.g. '+234 91393 XXXX'
}

// EDIT CONTACT LINKS HERE — leave url blank to hide that card until you're ready
const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/esubokemmanuel3-a11y', icon: GithubIcon, external: true },
  { name: 'LinkedIn', url: 'w', icon: LinkedinIcon, external: true },
  { name: 'Telegram', url: 'https://t.me/PzKBM', icon: Send, external: true },
  { name: 'Fiverr', url: 'sfs', icon: Briefcase, external: true },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
}

export default function Contact() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // EDIT FORMSPREE ENDPOINT HERE — sign up free at formspree.io, create a form, paste its endpoint below
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState),
      })

      if (response.ok) {
        setSubmitted(true)
        setFormState({ name: '', email: '', message: '' })
        setTimeout(() => setSubmitted(false), 3000)
      }
    } catch (error) {
      console.error('Form submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="relative flex items-center min-h-screen px-4 py-16 overflow-hidden bg-black sm:px-6 sm:py-20">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <pre className="hidden md:block absolute text-xs top-20 left-12 text-white/10" style={{ fontFamily: 'monospace' }}>
{`const contact = {
  status: "available"
};`}
        </pre>
        <pre className="hidden md:block absolute text-xs bottom-20 right-12 text-white/10" style={{ fontFamily: 'monospace' }}>
{`// Open to opportunities
// Let's build together`}
        </pre>
      </div>

      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={containerVariants}
        className="relative w-full max-w-6xl mx-auto"
      >
        <motion.div variants={itemVariants} className="max-w-3xl mx-auto mb-10 text-center sm:mb-16">
          <div className="inline-block mb-3 sm:mb-4">
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-blue-400 bg-blue-500/10 px-3 sm:px-4 py-1.5 sm:py-2 border border-blue-500/30" style={{ fontFamily: 'monospace' }}>
              contact.txt
            </span>
          </div>
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl" style={{ fontFamily: 'Special Elite, monospace' }}>
            Let's Build <span className="text-green-400">Together</span>
          </h2>
          {/* EDIT SUBTEXT HERE */}
          <p className="max-w-2xl pl-4 mx-auto mt-4 text-base text-left border-l-2 border-blue-400 sm:mt-6 sm:text-lg lg:text-xl text-white/60" style={{ fontFamily: 'Special Elite, monospace' }}>
            <span className="text-sm text-blue-400">// Get In Touch</span><br />
            Whether it's a project idea or just a question about what I've built, I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 sm:gap-8">
          {/* Left: Direct Contact + Social Links */}
          <motion.div variants={itemVariants} className="space-y-6 lg:col-span-1">
            {/* Email + Phone cards */}
            <div>
              <h3 className="mb-4 text-xl font-bold text-white sm:text-2xl sm:mb-6" style={{ fontFamily: 'Special Elite, monospace' }}>
                <span className="text-purple-400">const</span> directContact = {'{'}
              </h3>
              <div className="pl-4 space-y-4">
                <motion.a
                  href={`mailto:${directContact.email}`}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 p-4 transition-all duration-300 border border-white/10 bg-white/5 hover:border-green-400/50 group"
                >
                  <div className="p-3 transition-all border bg-green-500/10 border-green-500/30 group-hover:bg-green-500/20">
                    <Mail className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <p className="text-xs text-white/40" style={{ fontFamily: 'monospace' }}>// email</p>
                    <p className="font-semibold text-white" style={{ fontFamily: 'monospace' }}>"{directContact.email}"</p>
                  </div>
                </motion.a>

                {/* Phone card — hidden until directContact.phone above is filled in */}
                {directContact.phone && directContact.phone.trim() !== '' && (
                  <motion.a
                    href={`tel:${directContact.phone.replace(/\s/g, '')}`}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 p-4 transition-all duration-300 border border-white/10 bg-white/5 hover:border-blue-400/50 group"
                  >
                    <div className="p-3 transition-all border bg-blue-500/10 border-blue-500/30 group-hover:bg-blue-500/20">
                      <Phone className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-xs text-white/40" style={{ fontFamily: 'monospace' }}>// phone</p>
                      <p className="font-semibold text-white" style={{ fontFamily: 'monospace' }}>"{directContact.phone}"</p>
                    </div>
                  </motion.a>
                )}
              </div>
              <p className="mt-4 text-lg text-white/40" style={{ fontFamily: 'Special Elite, monospace' }}>{'}'}</p>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="mb-4 text-lg font-bold text-white" style={{ fontFamily: 'Special Elite, monospace' }}>
                <span className="text-purple-400">const</span> socials = [
              </h3>
              <div className="grid grid-cols-2 gap-3 pl-4">
                {socialLinks
                  .filter((social) => social.url && social.url.trim() !== '')
                  .map((social, idx) => {
                    const Icon = social.icon
                    return (
                      <motion.a
                        key={idx}
                        href={social.url}
                        target={social.external ? '_blank' : '_self'}
                        rel={social.external ? 'noreferrer' : ''}
                        whileHover={{ scale: 1.05, y: -5 }}
                        className="flex flex-col items-center gap-2 p-4 transition-all duration-300 border border-white/10 bg-white/5 hover:border-green-400/50 group"
                      >
                        <Icon className="w-5 h-5 transition-colors text-white/60 group-hover:text-green-400" />
                        <p className="text-xs font-semibold transition-colors text-white/60 group-hover:text-white" style={{ fontFamily: 'monospace' }}>
                          "{social.name}"
                        </p>
                      </motion.a>
                    )
                  })}
              </div>
              <p className="mt-4 text-lg text-white/40" style={{ fontFamily: 'Special Elite, monospace' }}>];</p>
              {/* EDIT LINK VISIBILITY: cards above only show once you've filled a real url in socialLinks */}
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <div className="mb-4">
              <h3 className="text-xl font-bold text-white" style={{ fontFamily: 'Special Elite, monospace' }}>
                <span className="text-purple-400">function</span> <span className="text-blue-400">sendMessage</span>() {'{'}
              </h3>
            </div>
            <form onSubmit={handleSubmit} className="pl-4 space-y-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label className="block mb-2 text-sm font-semibold text-white/60" style={{ fontFamily: 'monospace' }}>
                    <span className="text-purple-400">let</span> name = <span className="text-green-400">"</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={handleInputChange}
                    placeholder="Your name"
                    className="w-full px-4 py-3 text-white transition-all duration-300 bg-black border border-white/10 placeholder-white/40 focus:outline-none focus:border-green-400/50 focus:ring-1 focus:ring-green-400/20"
                    style={{ fontFamily: 'monospace' }}
                    required
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm font-semibold text-white/60" style={{ fontFamily: 'monospace' }}>
                    <span className="text-purple-400">let</span> email = <span className="text-green-400">"</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formState.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 text-white transition-all duration-300 bg-black border border-white/10 placeholder-white/40 focus:outline-none focus:border-green-400/50 focus:ring-1 focus:ring-green-400/20"
                    style={{ fontFamily: 'monospace' }}
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block mb-2 text-sm font-semibold text-white/60" style={{ fontFamily: 'monospace' }}>
                  <span className="text-purple-400">let</span> message = <span className="text-green-400">"</span>
                </label>
                <textarea
                  name="message"
                  value={formState.message}
                  onChange={handleInputChange}
                  placeholder="Tell me about your project..."
                  rows="6"
                  className="w-full px-4 py-3 text-white transition-all duration-300 bg-black border resize-none border-white/10 placeholder-white/40 focus:outline-none focus:border-green-400/50 focus:ring-1 focus:ring-green-400/20"
                  style={{ fontFamily: 'monospace' }}
                  required
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-8 py-4 font-semibold text-black transition-all duration-300 bg-white border border-white hover:bg-green-400 disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ fontFamily: 'monospace' }}
              >
                {isSubmitting ? '// Sending...' : submitted ? '// Message sent successfully!' : '$ send_message'}
              </motion.button>

              <p className="text-xs text-white/40" style={{ fontFamily: 'monospace' }}>
                // I'll respond within 24-48 hours
              </p>
            </form>
            <p className="mt-4 text-lg text-white/40" style={{ fontFamily: 'Special Elite, monospace' }}>{'}'}</p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}