import { useState } from 'react';
import './Footer.css';

const Footer = ({ selectedUnit }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setIsSubmitted(false);
    setErrorMessage('');
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      formData.name.trim() === '' ||
      formData.phone.trim() === '' ||
      formData.message.trim() === ''
    ) {
      setErrorMessage('Please fill out the fields before submitting.');
      setIsSubmitted(false);
      return;
    }

    setErrorMessage('')
    setIsSubmitted(true);

    setFormData({
      name: '',
      phone: '',
      message: '',
    });
  };

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

          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="tel"
              placeholder="Phone Number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
            <textarea
              name="message"
              value={formData.message}
              rows={4}
              placeholder="Tell us about your storage needs"
              onChange={handleChange}
            ></textarea>

            <button type="submit" className="button button-primary">
              Request Information
            </button>
          </form>

          {isSubmitted && (
            <p className="form-success">
              Thanks! Premier Storage will follow up about your request.
            </p>
          )}

          {errorMessage && <p className='form-error'>{errorMessage}</p>}
        </div>
        <a href="tel:+12700000000" className="button button-primary">
          Call Now
        </a>
      </div>
    </footer>
  );
};

export default Footer;
