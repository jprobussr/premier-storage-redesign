import './Header.css';

const Header = () => {
  return (
    <header className="site-header">
      <div className="container header-content">
        <a href="#top" className="logo" aria-label="Premier Storage home">
          Premier Storage
        </a>

        <nav className="site-nav" aria-label="Main navigation">
          <a href="#features">Features</a>
          <a href="#units">Unit Sizes</a>
          <a href="#location">Location</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
