import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import AuthorBadge from './components/AuthorBadge'
import Home from './pages/Home'
import Students from './pages/Students'
import AddStudent from './pages/AddStudent'
import StudentDetails from './pages/StudentDetails'

function App() {
  return (
    <>
      <Navbar />
      <main className="page-shell">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/students" element={<Students />} />
          <Route path="/students/add" element={<AddStudent />} />
          <Route path="/students/:id" element={<StudentDetails />} />
        </Routes>
      </main>
      <AuthorBadge />
    </>
  )
}

export default App
