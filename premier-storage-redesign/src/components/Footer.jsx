import './Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer" id="contact">
      <div className="container footer-content">
        <div>
          <h2>Need Storage space?</h2>
          <p>
            Contact Premier Storage to ask about unit availability, pricing, and
            access options.
          </p>
        </div>
        <a href="tel:+12700000000" className="button button-primary">
          Call Now
        </a>
      </div>
    </footer>
  );
};

export default Footer;
