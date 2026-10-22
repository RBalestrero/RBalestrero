import { useEffect, useMemo, useState } from 'react'
import { GalleryCarousel } from './components/GalleryCarousel'
import {
  education,
  experience,
  gallery,
  profile,
  projectCategories,
  projects,
  skills,
  type ProjectCategory,
} from './data/content'
import './App.css'

const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`
const photoSrc = asset(profile.photo)
const bannerSrc = asset(profile.banner)

function statusClass(status: (typeof projects)[number]['status']) {
  if (status === 'Producción') return 'badge badge--prod'
  if (status === 'En desarrollo') return 'badge badge--dev'
  return 'badge badge--demo'
}

const navItems = [
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#galeria', label: 'Galería' },
  { href: '#experiencia', label: 'Experiencia' },
  { href: '#contacto', label: 'Contacto' },
] as const

export default function App() {
  const [navSolid, setNavSolid] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [filter, setFilter] = useState<(typeof projectCategories)[number]>('Todos')

  useEffect(() => {
    const onScroll = () => setNavSolid(window.scrollY > window.innerHeight * 0.72)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const visibleProjects = useMemo(() => {
    if (filter === 'Todos') return projects
    return projects.filter((project) => project.category === (filter as ProjectCategory))
  }, [filter])

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site">
      <a className="skip-link" href="#top">
        Saltar al contenido
      </a>

      <header
        className={`nav ${navSolid || menuOpen ? 'nav--solid' : 'nav--hero'}${menuOpen ? ' is-open' : ''}`}
      >
        <div className="wrap nav__inner">
          <a className="nav__brand" href="#top" onClick={closeMenu}>
            <img
              className="nav__avatar"
              src={photoSrc}
              alt=""
              width={32}
              height={32}
            />
            <span className="nav__brand-text">{profile.name}</span>
          </a>

          <button
            type="button"
            className="nav__toggle"
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menuOpen}
            aria-controls="nav-menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="nav__toggle-bar" />
            <span className="nav__toggle-bar" />
            <span className="nav__toggle-bar" />
          </button>

          <nav id="nav-menu" className="nav__menu" aria-label="Principal">
            <ul className="nav__links">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a href={item.href} onClick={closeMenu}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        {menuOpen ? (
          <button
            type="button"
            className="nav__backdrop"
            aria-label="Cerrar menú"
            onClick={closeMenu}
          />
        ) : null}
      </header>

      <main id="top" tabIndex={-1}>
        <section className="hero" aria-label="Presentación">
          <div className="hero__media" aria-hidden="true">
            <img
              className="hero__banner"
              src={bannerSrc}
              alt=""
              width={1200}
              height={1600}
            />
            <div className="hero__shade" />
            <div className="hero__scan" />
          </div>
          <div className="hero__content">
            <h1 className="hero__brand">
              Renzo
              <br />
              <em>Balestrero</em>
            </h1>
            <p className="hero__lead">{profile.headline}</p>
            <div className="hero__actions">
              <a className="btn btn--solid" href="#proyectos">
                Ver proyectos
              </a>
              <a className="btn btn--ghost" href="#galeria">
                Ver galería
              </a>
            </div>
          </div>
        </section>

        <section className="section section--tint" id="sobre" aria-labelledby="sobre-title">
          <div className="wrap">
            <header className="section__head">
              <p className="section__index">01 — Perfil</p>
              <h2 className="section__title" id="sobre-title">
                Backend, RFID y operaciones
              </h2>
            </header>
            <div className="about">
              <div className="about__text">
                {profile.about.map((paragraph, index) => (
                  <p key={`about-${index}`}>{paragraph}</p>
                ))}
              </div>
              <div className="about__meta" aria-label="Enlaces">
                <span className="chip">{profile.location}</span>
                <a
                  className="chip chip--link"
                  href={profile.companyUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="TANGOID (se abre en una pestaña nueva)"
                >
                  {profile.company}
                </a>
                <a
                  className="chip chip--link"
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub (se abre en una pestaña nueva)"
                >
                  GitHub
                </a>
                <a
                  className="chip chip--link"
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn (se abre en una pestaña nueva)"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="proyectos" aria-labelledby="proyectos-title">
          <div className="wrap">
            <header className="section__head">
              <p className="section__index">02 — Trabajo</p>
              <h2 className="section__title" id="proyectos-title">
                Proyectos
              </h2>
              <p className="section__lead">
                Plataformas, RFID de campo, desktop y móvil. Código en repos privados;
                acá el alcance técnico.
              </p>
            </header>

            <div className="filters" role="group" aria-label="Filtrar proyectos">
              {projectCategories.map((category) => (
                <button
                  key={category}
                  type="button"
                  className={`filter${filter === category ? ' is-active' : ''}`}
                  aria-pressed={filter === category}
                  onClick={() => setFilter(category)}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="projects">
              {visibleProjects.map((project) => (
                <article className="project" key={project.id}>
                  <div className="project__top">
                    <h3 className="project__title">{project.title}</h3>
                    <div className="project__badges">
                      <span className="badge badge--demo">{project.category}</span>
                      <span className={statusClass(project.status)}>{project.status}</span>
                    </div>
                  </div>
                  <p className="project__summary">{project.summary}</p>
                  <p className="project__role">
                    <strong>Rol:</strong> {project.role}
                  </p>
                  <ul className="project__tags">
                    {project.stack.map((tech) => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>
                  <ul className="project__list">
                    {project.highlights.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--tint" id="galeria" aria-labelledby="galeria-title">
          <div className="wrap">
            <header className="section__head">
              <p className="section__index">03 — Campo</p>
              <h2 className="section__title" id="galeria-title">
                Galería
              </h2>
              <p className="section__lead">
                Expo y equipo en acción.
              </p>
            </header>

            <GalleryCarousel />

            <div className="videos">
              {gallery.videos.map((video) => (
                <figure className="video-card" key={video.src}>
                  <video
                    controls
                    preload="metadata"
                    playsInline
                    poster={video.poster ? asset(video.poster) : undefined}
                    src={asset(video.src)}
                  >
                    Tu navegador no reproduce este video.
                  </video>
                  <figcaption>{video.caption}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="stack" aria-labelledby="stack-title">
          <div className="wrap">
            <header className="section__head">
              <p className="section__index">04 — Capacidades</p>
              <h2 className="section__title" id="stack-title">
                Stack
              </h2>
            </header>
            <div className="skills">
              <div className="skill-block">
                <h3>Desarrollo</h3>
                <ul>
                  {skills.software.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="skill-block">
                <h3>RFID e identificación</h3>
                <ul>
                  {skills.rfid.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="skill-block">
                <h3>Operaciones</h3>
                <ul>
                  {skills.ops.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--tint" id="experiencia" aria-labelledby="experiencia-title">
          <div className="wrap">
            <header className="section__head">
              <p className="section__index">05 — Trayectoria</p>
              <h2 className="section__title" id="experiencia-title">
                Experiencia
              </h2>
            </header>
            <div className="timeline">
              {experience.map((job) => (
                <article className="job" key={`${job.title}-${job.period}`}>
                  <div className="job__meta">
                    <div>
                      <p className="job__company">{job.company}</p>
                      <h3 className="job__title">{job.title}</h3>
                    </div>
                    <p className="job__period">{job.period}</p>
                  </div>
                  <ul>
                    {job.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
            <div className="edu" aria-labelledby="educacion-title">
              <h2 className="section__title" id="educacion-title">
                Formación
              </h2>
              {education.map((item) => (
                <article key={item.title}>
                  <h3>
                    {item.title}{' '}
                    <span className="job__period">· {item.period}</span>
                  </h3>
                  <p>{item.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section contact" id="contacto" aria-labelledby="contacto-title">
          <div className="wrap">
            <div className="contact__panel">
              <header className="section__head">
                <p className="section__index">06 — Contacto</p>
                <h2 className="section__title" id="contacto-title">
                  ¿Hablamos?
                </h2>
                <p className="section__lead">
                  Backend, RFID e integración de sistemas. Respondo por mail o LinkedIn.
                </p>
              </header>
              <div className="contact__actions">
                <a className="btn btn--solid" href={`mailto:${profile.email}`}>
                  {profile.email}
                </a>
                <a
                  className="btn btn--line"
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn (se abre en una pestaña nueva)"
                >
                  LinkedIn
                </a>
                <a
                  className="btn btn--line"
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub (se abre en una pestaña nueva)"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap footer__inner">
          <span>
            © 2026 {profile.name}
          </span>
          <span>{profile.role}</span>
        </div>
      </footer>
    </div>
  )
}
