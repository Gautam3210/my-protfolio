import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaInstagram, FaExternalLinkAlt, FaDownload } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { profile, socials, skills, projects } from '../data'
import ContactForm from './ContactForm'

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } },
}
const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 120, damping: 14 } },
}

const iconFor = (name) => {
  switch (name.toLowerCase()) {
    case 'github':
      return <FaGithub />
    case 'linkedin':
      return <FaLinkedin />
    case 'instagram':
      return <FaInstagram />
    default:
      return <FaExternalLinkAlt />
  }
}

const SkillLevelIndicator = ({ level }) => {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((dot) => (
        <div
          key={dot}
          className={`w-2 h-2 rounded-full ${
            dot <= level 
              ? 'bg-brand-500' 
              : 'bg-zinc-700'
          }`}
        />
      ))}
    </div>
  )
}

const handleResumeDownload = () => {
  const link = document.createElement('a')
  link.href = profile.resumeUrl
  link.download = `${profile.name}_Resume.docx`
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

const Portfolio = () => {
  const [showAllProjects, setShowAllProjects] = useState(false)
  const displayedProjects = showAllProjects ? projects : projects.slice(0, 3)

  return (
    <div className="container-page">
      <header className="py-8 flex items-center justify-between">
        
        <nav className="flex items-center gap-3">
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noreferrer"
              className="btn-primary h-10 px-3"
            >
              {iconFor(s.name)}
              <span className="hidden sm:inline">{s.name}</span>
            </a>
          ))}
        </nav>
      </header>

      <main className="space-y-16 pb-16">
        <section className="grid md:grid-cols-[1fr,2fr] gap-6 md:gap-8 items-center">
          <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ type: 'spring', stiffness: 120 }} className="card p-6 flex flex-col md:flex-row items-start text-left gap-6 md:gap-8 justify-between">
            <div className="flex-1 order-2 md:order-1">
              <h1 className="mt-0 text-2xl font-semibold">{profile.name}</h1>
              <p className="text-brand-300">{profile.title} · {profile.location}</p>
              <p className="mt-3 text-sm text-zinc-300 leading-relaxed max-w-prose">{profile.bio}</p>
              <div className="mt-4 flex gap-3 justify-start">
                {profile.resumeUrl && (
                  <button onClick={handleResumeDownload} className="btn-primary flex items-center gap-2">
                    <FaDownload />
                    Download Resume
                  </button>
                )}
              </div>
            </div>
            <div className="shrink-0 self-center md:self-auto order-1 md:order-2">
              <img src={profile.avatarUrl} alt={profile.name} className="h-40 w-40 md:h-56 md:w-56 lg:h-64 lg:w-64 xl:h-72 xl:w-72 rounded-full ring-2 ring-brand-500/40 object-cover" />
            </div>
          </motion.div>
          
          <div className="mb-8">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-1 w-12 bg-gradient-to-r from-brand-500 to-brand-600 rounded-full"></div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-zinc-300 bg-clip-text text-transparent">
                Skills
              </h2>
              <div className="h-1 w-12 bg-gradient-to-r from-brand-600 to-brand-500 rounded-full"></div>
            </div>
            <motion.div variants={container} initial="hidden" animate="show" className="grid sm:grid-cols-2 gap-4">
            {skills.map((s) => (
              <motion.div key={s.name} variants={item} className="card p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg overflow-hidden bg-zinc-800">
                    <img src={s.image} alt={s.name} className="h-full w-full object-contain p-1" />
                  </div>
                  <div>
                    <p className="font-medium">{s.name}</p>
                  </div>
                </div>
                <SkillLevelIndicator level={s.level} />
              </motion.div>
            ))}
            </motion.div>
          </div>
        </section>

        <section>
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center gap-4">
              <div className="h-1 w-12 bg-gradient-to-r from-brand-500 to-brand-600 rounded-full"></div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-zinc-300 bg-clip-text text-transparent">
                Projects
              </h2>
              <div className="h-1 w-12 bg-gradient-to-r from-brand-600 to-brand-500 rounded-full"></div>
            </div>
          </div>
          <motion.div variants={container} initial="hidden" animate="show" className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {displayedProjects.map((p) => (
              <motion.article key={p.id} variants={item} className="card overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img src={p.image} alt={p.title} className="h-full w-full object-cover hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-lg">{p.title}</h3>
                  <p className="text-sm text-zinc-400 mt-1">{p.description}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.tags?.map((t) => (
                      <span key={t} className="text-xs bg-zinc-800 text-zinc-300 px-2 py-1 rounded-md">{t}</span>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center gap-3">
                    <Link to={`/project/${p.id}`} className="btn-primary">
                      View Details
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
          {!showAllProjects && projects.length > 3 && (
            <div className="flex justify-center mt-8">
              <button 
                onClick={() => setShowAllProjects(true)}
                className="text-brand-300 hover:text-brand-200 transition-colors font-medium"
              >
                See all →
              </button>
            </div>
          )}
        </section>

        <ContactForm />
      </main>

      <footer className="py-10 text-center text-sm text-zinc-500">
        © {new Date().getFullYear()} {profile.name}. All rights reserved.
      </footer>
    </div>
  )
}

export default Portfolio
