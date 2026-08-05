import { appConfig, envSummary, mask } from './config'
import './App.css'

const features = [
  {
    title: 'Lightning Fast',
    description: 'Built on Vite with instant HMR and blazing build times out of the box.',
    icon: '⚡',
  },
  {
    title: 'Reactive UI',
    description: 'Powered by React 19 with hooks-driven state and reusable components.',
    icon: '⚛️',
  },
  {
    title: 'Env Ready',
    description: 'Sensitive data lives in .env and is loaded through import.meta.env.',
    icon: '🔐',
  },
  {
    title: 'Zero Config',
    description: 'One command to run, one command to build. No extra tooling needed.',
    icon: '🚀',
  },
]

const stats = [
  { label: 'Frameworks', value: '2' },
  { label: 'Env Vars', value: String(envSummary.length) },
  { label: 'Lines of CSS', value: '300+' },
  { label: 'Build Time', value: '<2s' },
]

function App() {  return (
    <div className="app">
      <nav className="navbar">
        <div className="brand">
          <span className="brand-dot" />
          {appConfig.name}
        </div>
        <div className="nav-links">
          <a href="#features">Features</a>
          <a href="#config">Configuration</a>
          <span className={`badge badge-${appConfig.env}`}>{appConfig.env}</span>
        </div>
      </nav>

      <header className="hero">
        <div className="hero-copy">
          <span className="eyebrow">Frontend Demo · React + Vite</span>
          <h1>
            Build something <span className="gradient">beautiful</span> today
          </h1>
          <p>
            A polished single-page demo with a dark glassmorphism design, environment
            configuration, and zero backend — just pure frontend magic.
          </p>
          <div className="hero-actions">
            <button className="btn btn-primary" type="button">Get Started</button>
            <button className="btn btn-ghost" type="button">
              View on GitHub
            </button>
          </div>
        </div>

        <div className="hero-card">
          <div className="card-top">
            <span className="traffic"><i /> <i /> <i /></span>
            <span className="live-pill">
              <i className="live-dot" /> live
            </span>
          </div>
          <div className="card-body">
            <p className="card-label">Environment snapshot</p>
            <div className="row">
              <span className="muted">API URL</span>
              <span className="mono">{appConfig.apiUrl || 'not set'}</span>
            </div>
            <div className="row">
              <span className="muted">API Key</span>
              <span className="mono masked">{mask(appConfig.apiKey)}</span>
            </div>
            <div className="row">
              <span className="muted">Analytics</span>
              <span className={appConfig.analytics ? 'ok' : 'off'}>
                {appConfig.analytics ? 'enabled' : 'disabled'}
              </span>
            </div>
            <div className="sparkline" aria-hidden="true">
              {[8, 14, 10, 18, 13, 22, 17, 26, 21, 30, 25, 34, 29, 38, 32].map((h, i) => (
                <i key={i} style={{ height: `${h}px` }} />
              ))}
            </div>
          </div>
        </div>
      </header>

      <section className="stats" aria-label="Project statistics">
        {stats.map((s) => (
          <div className="stat" key={s.label}>
            <span className="stat-value">{s.value}</span>
            <span className="stat-label">{s.label}</span>
          </div>
        ))}
      </section>

      <section id="features" className="section">
        <h2 className="section-title">Why you will love it</h2>
        <div className="grid">
          {features.map((f) => (
            <div className="card feature-card" key={f.title}>
              <span className="feature-icon">{f.icon}</span>
              <h3>{f.title}</h3>
              <p>{f.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="config" className="section">
        <h2 className="section-title">Environment variables</h2>
        <p className="section-sub">
          Loaded from <code>.env</code> via <code>import.meta.env</code>. Secret values are masked.
        </p>
        <div className="config-table">
          {envSummary.map((row) => (
            <div className="config-row" key={row.key}>
              <code>{row.key}</code>
              <span className={row.secret ? 'mono masked' : 'mono'}>{row.value}</span>
            </div>
          ))}
        </div>
      </section>

      <footer className="footer">
        <p>
          {appConfig.name} — crafted with <span className="heart">♥</span> for a frontend-only demo.
        </p>
      </footer>
    </div>
  )
}

export default App
