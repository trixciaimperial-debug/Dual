export const AUTHOR_PROFILE = {
  name: 'Trixcia, Allysa Caire',
  title: 'Project Developer',
  role: 'IT Student',
  signature: 'Authored and maintained by Trixcia, Allysa Caire',
}

export function getAuthorProfile() {
  return {
    ...AUTHOR_PROFILE,
    updatedAt: formatLastUpdated(new Date()),
  }
}

export function formatLastUpdated(date) {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(date)
}

function AuthorBadge() {
  const author = getAuthorProfile()

  return (
    <footer className="author-badge" aria-label="Project author information">
      <div className="author-badge__glow author-badge__glow--one" aria-hidden="true" />
      <div className="author-badge__glow author-badge__glow--two" aria-hidden="true" />
      <div className="author-badge__shine" aria-hidden="true" />

      <div className="author-badge__content">
        <div className="author-badge__avatar" aria-hidden="true">
          {author.name.charAt(0)}
        </div>

        <div className="author-badge__meta">
          <span className="author-badge__label">Developed by</span>
          <div className="author-badge__identity">
            <strong>{author.name}</strong>
            <span className="author-badge__role">{author.role}</span>
          </div>
          <span className="author-badge__signature">{author.signature}</span>
        </div>
      </div>

      <div className="author-badge__stamp">
        <span className="author-badge__stamp-dot" aria-hidden="true" />
        <small>Updated {author.updatedAt}</small>
      </div>
    </footer>
  )
}

export default AuthorBadge
