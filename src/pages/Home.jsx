function Home() {
  return (
    <section className="page-section hero-section">
      <div className="container narrow hero-shell">
        <div className="hero-copy">
          <p className="eyebrow">Student Management Portal</p>
          <h1>Welcome to the student dashboard</h1>
          <p className="lead">
            A refined system for managing student records, viewing profiles, and
            adding new students from a single premium workspace.
          </p>

          <div className="hero-actions">
            <a href="/students" className="primary-action">
              View Students
            </a>
            <a href="/students/add" className="secondary-action">
              Add Student
            </a>
          </div>
        </div>

        <div className="hero-panel" aria-label="Portal summary">
          <div className="hero-panel__item">
            <span>Active records</span>
            <strong>12+</strong>
          </div>
          <div className="hero-panel__item">
            <span>Profiles</span>
            <strong>Verified</strong>
          </div>
          <div className="hero-panel__item">
            <span>Signature</span>
            <strong>Trixcia</strong>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
