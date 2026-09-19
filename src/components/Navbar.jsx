import { NavLink } from 'react-router-dom'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/students', label: 'Students' },
  { to: '/students/add', label: 'Add Student' },
]

function Navbar() {
  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <NavLink to="/" className="brand">
          Student Portal
        </NavLink>

        <nav className="main-nav" aria-label="Main navigation">
          {navItems.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Navbar
