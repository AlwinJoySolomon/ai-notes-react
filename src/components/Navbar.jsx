function Navbar({ darkMode, toggleDarkMode }) {
  return (
    <nav className="navbar">
      <h1>📝 AI Notes App</h1>

      <button onClick={toggleDarkMode}>
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>
    </nav>
  );
}

export default Navbar;