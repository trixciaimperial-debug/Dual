function SearchBar({ value, onChange }) {
  return (
    <div className="search-bar">
      <label htmlFor="student-search" className="search-bar__label">
        Search students
      </label>
      <input
        id="student-search"
        type="text"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search by name or email"
        className="search-bar__input"
      />
    </div>
  )
}

export default SearchBar
