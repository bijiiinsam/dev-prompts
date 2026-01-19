import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h1>DevPrompts 🚀</h1>
        <p>AI Prompts for Developers</p>
      </div>
      <div className="navbar-links">
        <a href="https://github.com/MrMadHatt/dev-prompts" target="_blank" rel="noopener noreferrer">
          ⭐ GitHub
        </a>
      </div>
    </nav>
  );
}

export default Navbar;