import { useEffect, useState } from 'react'
import SearchBar from '../components/SearchBar'
import StudentList from '../components/StudentList'
import { getStudents } from '../services/studentService'

function Students() {
  const [students, setStudents] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    const fetchStudents = async () => {
      setLoading(true)
      const { data, error: fetchError } = await getStudents()

      if (fetchError) {
        setError(fetchError)
        setStudents([])
      } else {
        setStudents(data)
        setError('')
      }

      setLoading(false)
    }

    fetchStudents()
  }, [])

  const filteredStudents = students.filter((student) => {
    const query = searchTerm.trim().toLowerCase()

    if (!query) return true

    return (
      student.name.toLowerCase().includes(query) ||
      student.email.toLowerCase().includes(query)
    )
  })

  return (
    <section className="page-section">
      <div className="container">
        <div className="section-header">
          <h1>Students</h1>
        </div>

        <SearchBar value={searchTerm} onChange={setSearchTerm} />

        {loading && <p className="status-message">Loading students...</p>}

        {error && <p className="status-message error">{error}</p>}

        {!loading && !error && filteredStudents.length === 0 && (
          <p className="status-message">No matching students found.</p>
        )}

        {!loading && !error && filteredStudents.length > 0 && (
          <StudentList students={filteredStudents} />
        )}
      </div>
    </section>
  )
}

export default Students
