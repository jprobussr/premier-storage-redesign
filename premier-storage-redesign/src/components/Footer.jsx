import './Footer.css';

const Footer = ({ selectedUnit }) => {
  return (
    <footer className="site-footer" id="contact">
      <div className="container footer-content">
        <div>
          <h2>Need Storage space?</h2>
          <p>
            Contact Premier Storage to ask about unit availability, pricing, and
            access options.
          </p>

          {selectedUnit && (
            <p className="selected-unit">
              Interested Unit: {selectedUnit.size} - {selectedUnit.price}/month
            </p>
          )}

          <form className="contact-form">
            <input type="text" placeholder="Your Name" />
            <input type="tel" placeholder="Phone Number" />
            <textarea
              rows={4}
              placeholder="Tell us about your storage needs"
            ></textarea>

            <button type="submit" className="button button-primary">
              Request Information
            </button>
          </form>
        </div>
        <a href="tel:+12700000000" className="button button-primary">
          Call Now
        </a>
      </div>
    </footer>
  );
};

export default Footer;
