import { useState } from 'react'

const initialForm = {
  name: '',
  username: '',
  email: '',
  phone: '',
  website: '',
  city: '',
  company: '',
}

function AddStudent() {
  const [formData, setFormData] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const validate = () => {
    const nextErrors = {}

    if (!formData.name.trim()) nextErrors.name = 'Name is required.'
    if (!formData.username.trim()) nextErrors.username = 'Username is required.'
    if (!formData.email.trim()) nextErrors.email = 'Email is required.'
    if (!formData.phone.trim()) nextErrors.phone = 'Phone is required.'
    if (!formData.website.trim()) nextErrors.website = 'Website is required.'
    if (!formData.city.trim()) nextErrors.city = 'City is required.'
    if (!formData.company.trim()) nextErrors.company = 'Company is required.'

    return nextErrors
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const nextErrors = validate()

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors)
      setSubmitted(false)
      return
    }

    setErrors({})
    setSubmitted(true)
    setFormData(initialForm)
  }

  return (
    <section className="page-section">
      <div className="container narrow">
        <h1>Add Student</h1>
        <p className="lead">
          This form simulates a JSONPlaceholder request. The submitted record is not
          permanently stored.
        </p>

        <form className="student-form" onSubmit={handleSubmit} noValidate>
          <div className="form-grid">
            <label>
              <span>Name</span>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <small>{errors.name}</small>}
            </label>

            <label>
              <span>Username</span>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
              />
              {errors.username && <small>{errors.username}</small>}
            </label>

            <label>
              <span>Email</span>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <small>{errors.email}</small>}
            </label>

            <label>
              <span>Phone</span>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
              {errors.phone && <small>{errors.phone}</small>}
            </label>

            <label>
              <span>Website</span>
              <input
                type="url"
                name="website"
                value={formData.website}
                onChange={handleChange}
              />
              {errors.website && <small>{errors.website}</small>}
            </label>

            <label>
              <span>City</span>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
              />
              {errors.city && <small>{errors.city}</small>}
            </label>

            <label className="full-width">
              <span>Company</span>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
              />
              {errors.company && <small>{errors.company}</small>}
            </label>
          </div>

          <button type="submit" className="submit-button">
            Add Student
          </button>
        </form>

        {submitted && (
          <p className="success-message">
            Student submitted successfully. This is a mock JSONPlaceholder request and
            is not permanently stored.
          </p>
        )}
      </div>
    </section>
  )
}

export default AddStudent
