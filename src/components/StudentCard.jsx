import { Link } from 'react-router-dom'

function StudentCard({ student }) {
  const { id, name, email, phone, website, address, company } = student

  return (
    <article className="student-card">
      <div className="student-card__top">
        <div>
          <h2>{name}</h2>
          <p className="student-card__email">{email}</p>
        </div>
        <Link to={`/students/${id}`} className="student-card__link">
          View details
        </Link>
      </div>

      <dl className="student-card__details">
        <div>
          <dt>Phone</dt>
          <dd>{phone}</dd>
        </div>
        <div>
          <dt>Website</dt>
          <dd>{website}</dd>
        </div>
        <div>
          <dt>City</dt>
          <dd>{address?.city}</dd>
        </div>
        <div>
          <dt>Company</dt>
          <dd>{company?.name}</dd>
        </div>
      </dl>
    </article>
  )
}

export default StudentCard
