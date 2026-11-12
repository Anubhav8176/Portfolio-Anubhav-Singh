import { useState } from 'react'
import LiveDemo from './LiveDemo.jsx'
import {
  profile,
  facts,
  services,
  projects,
  moreProjects,
  practiceRepos,
  process,
  experience,
  skills,
  learning,
} from './data.js'

const stroke = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
}

const Icon = {
  phone: (
    <svg viewBox="0 0 24 24" width="26" height="26" {...stroke}>
      <rect x="7" y="2.5" width="10" height="19" rx="2.5" />
      <path d="M10.5 18.5h3" />
    </svg>
  ),
  server: (
    <svg viewBox="0 0 24 24" width="26" height="26" {...stroke}>
      <rect x="3" y="4" width="18" height="6.5" rx="2" />
      <rect x="3" y="13.5" width="18" height="6.5" rx="2" />
      <path d="M7 7.25h.01M7 16.75h.01" />
    </svg>
  ),
  web: (
    <svg viewBox="0 0 24 24" width="26" height="26" {...stroke}>
      <rect x="3" y="4.5" width="18" height="15" rx="2.5" />
      <path d="M3 9h18M6.5 6.75h.01M9.5 6.75h.01" />
    </svg>
  ),
  link: (
    <svg viewBox="0 0 24 24" width="26" height="26" {...stroke}>
      <circle cx="6" cy="12" r="2.6" />
      <circle cx="18" cy="12" r="2.6" />
      <path d="M8.6 12h6.8" />
    </svg>
  ),
  arrow: (
    <svg viewBox="0 0 24 24" width="18" height="18" {...stroke} strokeWidth="2">
      <path d="M7 17 17 7M9 7h8v8" />
    </svg>
  ),
}
const serviceIcons = [Icon.phone, Icon.server, Icon.web, Icon.link]

function Header() {
  return (
    <header className="nav">
      <a className="brand" href="#top" aria-label="Anubhav Singh, back to top">
        <span className="brand-mark" aria-hidden="true">A</span>
        Anubhav Singh
      </a>
      <nav aria-label="Sections">
        <a href="#services">Services</a>
        <a href="#work">Work</a>
        <a href="#experience">Experience</a>
        <a href="#skills">Skills</a>
        <a href="#contact" className="nav-cta">Hire me</a>
      </nav>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero wrap" id="top">
      <p className="status">
        <span className="dot" aria-hidden="true" />
        Open for freelance projects
      </p>
      <h1 className="name">
        <span>Anubhav</span> <span>Singh</span>
      </h1>
      <div className="hero-copy">
        <p className="role">Android, backend and web developer</p>
        <p className="lede">
          I turn ideas into working apps in Kotlin and Jetpack Compose, build the secure APIs they
          run on with Spring Boot and FastAPI, and make fast React websites. One developer for the
          whole product.
        </p>
        <div className="actions">
          <a className="btn primary" href="#contact">Start a project</a>
          <a className="btn" href="#work">See my work</a>
        </div>
      </div>
      <div className="demo-panel on-dark">
        <LiveDemo />
      </div>
    </section>
  )
}

function Facts() {
  return (
    <section className="wrap" aria-label="Highlights">
      <div className="facts on-dark">
        {facts.map((f) => (
          <div key={f.label} className="fact">
            <p className="fact-value">{f.value}</p>
            <p className="fact-label">{f.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function Services() {
  return (
    <section className="block wrap" id="services">
      <h2>What I can build for you</h2>
      <div className="services">
        {services.map((s, i) => (
          <article key={s.title} className={`service theme-${s.theme}`}>
            <span className="service-icon">{serviceIcons[i]}</span>
            <h3>{s.title}</h3>
            <p>{s.body}</p>
            <ul className="chips">
              {s.tags.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

function Work() {
  return (
    <section className="block wrap" id="work">
      <h2>Selected work</h2>
      <p className="sub">Each of these is open source, so you can read the code yourself.</p>
      <div className="projects">
        {projects.map((p) => (
          <article key={p.name} className={`project theme-${p.theme}`}>
            <div className="project-head">
              <p className="kind">{p.kind}</p>
              <h3>{p.name}</h3>
              <p>{p.summary}</p>
              <a className="link" href={p.href} target="_blank" rel="noreferrer">
                View code on GitHub {Icon.arrow}
              </a>
            </div>
            <div className="project-body">
              <ul className="points">
                {p.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
              <ul className="chips">
                {p.stack.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>

      <h3 className="subhead">More projects</h3>
      <div className="more">
        {moreProjects.map((p) => (
          <a key={p.name} className="more-card" href={profile.links.github} target="_blank" rel="noreferrer">
            <p className="kind">{p.kind}</p>
            <h4>{p.name}</h4>
            <p>{p.summary}</p>
            <ul className="chips">
              {p.stack.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </a>
        ))}
        <div className="more-card repos">
          <p className="kind">Practice and learning</p>
          <h4>Problem solving on GitHub</h4>
          <ul>
            {practiceRepos.map((r) => (
              <li key={r.name}>
                <a href={`${profile.links.github}/${r.name}`} target="_blank" rel="noreferrer">
                  {r.name}
                </a>
                <span>{r.lang}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <a className="btn all-repos" href={profile.links.github} target="_blank" rel="noreferrer">
        See all 63 repositories {Icon.arrow}
      </a>
    </section>
  )
}

function Process() {
  return (
    <section className="block wrap" id="process">
      <h2>How we would work together</h2>
      <ol className="steps">
        {process.map((s, i) => (
          <li key={s.title}>
            <span className="step-no">{i + 1}</span>
            <h3>{s.title}</h3>
            <p>{s.body}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}

function Experience() {
  return (
    <section className="block wrap" id="experience">
      <h2>Where I’ve worked</h2>
      <ol className="timeline">
        {experience.map((e) => (
          <li key={e.role + e.when}>
            <p className="when">{e.when}</p>
            <div>
              <h3>
                {e.role}, {e.org}
              </h3>
              <ul className="points">
                {e.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
        <li>
          <p className="when">2020 – 2024</p>
          <div>
            <h3>B.Tech in Computer Science and Engineering, IERT Allahabad</h3>
            <p className="plain">Graduated with a 9.1 / 10 GPA.</p>
          </div>
        </li>
      </ol>
    </section>
  )
}

function Skills() {
  return (
    <section className="block wrap" id="skills">
      <h2>Tools I work with</h2>
      <dl className="skills">
        {skills.map((s) => (
          <div key={s.group} className="skill-row">
            <dt>{s.group}</dt>
            <dd>
              <ul className="chips">
                {s.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
      <div className="side-notes">
        <p>
          <strong>Learning now:</strong> {learning.join(', ')}.
        </p>
        <p>
          I also practise problem solving on{' '}
          <a href={profile.links.leetcode} target="_blank" rel="noreferrer">LeetCode</a>,{' '}
          <a href={profile.links.codeforces} target="_blank" rel="noreferrer">Codeforces</a> and{' '}
          <a href={profile.links.codechef} target="_blank" rel="noreferrer">CodeChef</a>.
        </p>
      </div>
    </section>
  )
}

function Contact() {
  const [copied, setCopied] = useState(false)
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      window.location.href = `mailto:${profile.email}`
    }
  }
  return (
    <section className="wrap" id="contact">
      <div className="contact on-dark">
        <h2>Have an app, API or website in mind?</h2>
        <p className="lede">
          Tell me what you want to build, your timeline and your budget. I reply to every message.
        </p>
        <div className="actions">
          <a
            className="btn primary"
            href={`mailto:${profile.email}?subject=${encodeURIComponent('Project enquiry')}`}
          >
            Email me
          </a>
          <a className="btn" href={profile.whatsapp} target="_blank" rel="noreferrer">
            Message on WhatsApp
          </a>
          <button type="button" className="btn" onClick={copy}>
            {copied ? 'Email copied' : 'Copy email address'}
          </button>
        </div>
        <p className="contact-lines">
          {profile.email} &nbsp;|&nbsp; {profile.phone}
        </p>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer wrap">
      <p>© {new Date().getFullYear()} Anubhav Singh</p>
      <p className="footer-links">
        <a href={profile.links.github} target="_blank" rel="noreferrer">GitHub</a>
        <a href={profile.links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        <a href={profile.links.leetcode} target="_blank" rel="noreferrer">LeetCode</a>
      </p>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Facts />
        <Services />
        <Work />
        <Process />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
