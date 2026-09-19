import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getStudentById } from '../services/studentService'

function StudentDetails() {
  const { id } = useParams()
  const [student, setStudent] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchStudent = async () => {
      setLoading(true)
      const { data, error: fetchError } = await getStudentById(id)

      if (fetchError || !data) {
        setError('Student not found.')
        setStudent(null)
      } else {
        setStudent(data)
        setError('')
      }

      setLoading(false)
    }

    fetchStudent()
  }, [id])

  if (loading) {
    return (
      <section className="page-section">
        <div className="container narrow">
          <p className="status-message">Loading student details...</p>
        </div>
      </section>
    )
  }

  if (error || !student) {
    return (
      <section className="page-section">
        <div className="container narrow">
          <h1>Student not found</h1>
          <p className="lead">The student you are looking for does not exist.</p>
          <Link to="/students" className="back-link">
            ← Back to students
          </Link>
        </div>
      </section>
    )
  }

  return (
    <section className="page-section">
      <div className="container narrow details-card">
        <div className="details-header">
          <div>
            <p className="eyebrow">Student profile</p>
            <h1>{student.name}</h1>
          </div>
          <Link to="/students" className="back-link">
            ← Back to students
          </Link>
        </div>

        <dl className="details-grid">
          <div>
            <dt>Username</dt>
            <dd>{student.username}</dd>
          </div>
          <div>
            <dt>Email</dt>
            <dd>{student.email}</dd>
          </div>
          <div>
            <dt>Phone</dt>
            <dd>{student.phone}</dd>
          </div>
          <div>
            <dt>Website</dt>
            <dd>{student.website}</dd>
          </div>
          <div>
            <dt>Address</dt>
            <dd>
              {student.address?.street}, {student.address?.suite}<br />
              {student.address?.city}, {student.address?.zipcode}
            </dd>
          </div>
          <div>
            <dt>Company</dt>
            <dd>{student.company?.name}</dd>
          </div>
        </dl>
      </div>
    </section>
  )
}

export default StudentDetails
