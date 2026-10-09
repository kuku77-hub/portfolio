import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { profile, stats, skills, projects } from "@/lib/content";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <section id="home" className="hero">
          <div className="container hero-grid">
            <Reveal className="hero-copy">
              <p className="eyebrow">FINAL-YEAR UNIVERSITY STUDENT • DEVELOPER</p>
              <h1>
                Building useful digital solutions with <span>code &amp; creativity.</span>
              </h1>
              <p className="hero-text">
                I’m a final-year Computer Science student focused on web development, Python,
                databases, and practical software projects. I enjoy turning ideas into clean,
                functional digital experiences.
              </p>
              <div className="hero-actions">
                <a className="btn primary" href="#projects">
                  View My Projects →
                </a>
                <a className="btn secondary" href="#contact">
                  Contact Me
                </a>
              </div>
              <div className="quick-links">
                <a href={profile.github} target="_blank" rel="noreferrer">
                  GitHub ↗
                </a>
              </div>
            </Reveal>

            <Reveal className="hero-card">
              <div className="profile-placeholder">
                <Image
                  className="profile-photo"
                  src="/profile.jpg"
                  alt={profile.name}
                  width={340}
                  height={340}
                  priority
                />
                <p>BIRUK DALECHA</p>
                <small>Final-Year University Student &amp; Developer</small>
              </div>
              <div className="code-card">
                <div className="dots">
                  <i></i>
                  <i></i>
                  <i></i>
                </div>
                <pre>
                  <code>
                    <span className="purple">const</span> developer = {"{"}
                    {"\n"}  name: <span className="green">&quot;Biruk Dalecha&quot;</span>,
                    {"\n"}  role: <span className="green">&quot;Junior Developer&quot;</span>,
                    {"\n"}  focus: [<span className="green">&quot;Web&quot;</span>,{" "}
                    <span className="green">&quot;Python&quot;</span>],
                    {"\n"}  passion: <span className="green">&quot;Building&quot;</span>
                    {"\n"}
                    {"};"}
                  </code>
                </pre>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="about" className="section">
          <div className="container">
            <Reveal className="section-heading">
              <p className="eyebrow">01 — ABOUT ME</p>
              <h2>
                A developer who likes <span>building things.</span>
              </h2>
            </Reveal>
            <div className="about-grid">
              <Reveal className="about-text">
                <p>
                  I’m a final-year Computer Science student with a growing portfolio of software
                  and web development projects. My goal is to combine technical skills with
                  practical problem-solving to create applications that are useful, simple, and
                  easy to use.
                </p>
                <p>
                  I’ve worked on projects involving databases, role-based systems, web
                  interfaces, Python applications, and APIs. I’m continuously improving my
                  skills through university projects and independent development.
                </p>
              </Reveal>
              <Reveal className="stats">
                {stats.map((s) => (
                  <div className="stat" key={s.label}>
                    <strong>{s.value}</strong>
                    <span>{s.label}</span>
                  </div>
                ))}
              </Reveal>
            </div>
          </div>
        </section>

        <section id="skills" className="section muted">
          <div className="container">
            <Reveal className="section-heading">
              <p className="eyebrow">02 — SKILLS</p>
              <h2>
                Tools I use to <span>build.</span>
              </h2>
            </Reveal>
            <div className="skills-grid">
              {skills.map((skill, i) => (
                <Reveal as="article" className="skill-card" key={skill.title}>
                  <b>{String(i + 1).padStart(2, "0")}</b>
                  <h3>{skill.title}</h3>
                  <p>{skill.text}</p>
                  <div className="tags">
                    {skill.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="container">
            <Reveal className="section-heading">
              <p className="eyebrow">03 — PROJECTS</p>
              <h2>
                Selected work &amp; <span>projects.</span>
              </h2>
            </Reveal>

            <div className="projects">
              {projects.map((project, i) => (
                <Reveal
                  as="article"
                  className={`project${project.featured ? " featured" : ""}`}
                  key={project.title}
                >
                  <div className="project-number">{String(i + 1).padStart(2, "0")}</div>
                  <div className="project-content">
                    <p className="project-type">{project.type}</p>
                    <h3>{project.title}</h3>
                    <p>{project.text}</p>
                    <div className="tags">
                      {project.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                    <div className="project-links">
                      {project.links.map((label) => (
                        <a key={label} href="#" className="disabled" aria-disabled="true" tabIndex={-1}>
                          {label}
                        </a>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}

              <Reveal as="article" className="project">
                <div className="project-number">{String(projects.length + 1).padStart(2, "0")}</div>
                <div className="project-content">
                  <p className="project-type">COMING SOON</p>
                  <h3>Many more are coming</h3>
                  <p>New projects are on the way. Check back soon.</p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section id="education" className="section muted">
          <div className="container">
            <Reveal className="section-heading">
              <p className="eyebrow">04 — EDUCATION</p>
              <h2>
                Learning through <span>Computer Science.</span>
              </h2>
            </Reveal>
            <Reveal className="education-card">
              <div>
                <p className="project-type">FINAL-YEAR STUDENT</p>
                <h3>BSc in Computer Science</h3>
                <p>Ambo University • Ethiopia</p>
              </div>
              <div className="edu-badge">CS</div>
            </Reveal>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="container contact-grid">
            <Reveal>
              <p className="eyebrow">05 — CONTACT</p>
              <h2>
                Let’s build something <span>useful.</span>
              </h2>
              <p className="contact-text">
                I’m open to opportunities, collaborations, freelance projects, and conversations
                about software development.
              </p>
            </Reveal>
            <Reveal className="contact-card">
              <a href={`mailto:${profile.email}`}>
                <small>EMAIL</small>
                <strong>{profile.email} ↗</strong>
              </a>
              <a href={profile.github} target="_blank" rel="noreferrer">
                <small>GITHUB</small>
                <strong>{profile.githubLabel} ↗</strong>
              </a>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
