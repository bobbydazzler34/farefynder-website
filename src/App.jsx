function App() {
  const year = new Date().getFullYear();

  return (
    <div className="page">
      <header className="hero">
        <div className="hero__content">
          <p className="hero__badge">FareFynder</p>
          <h1>Find Better Fares, Faster.</h1>
          <p className="hero__subtitle">
            FareFynder helps drivers discover and plan fare opportunities in
            seconds.
          </p>
        </div>
      </header>

      <footer id="contact" className="footer">
        <nav className="footer__links" aria-label="Footer">
          <a href="mailto:support@farefynder.com">Contact</a>
          <a href="https://github.com" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </nav>
        <p className="footer__copy">© {year} FareFynder. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
