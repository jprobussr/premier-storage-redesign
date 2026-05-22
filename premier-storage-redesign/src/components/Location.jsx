import './Location.css';

const Location = () => {
  return (
    <section className="location section" id="location">
      <div className="container location-grid">
        <div>
          <p className="eyebrow">Location</p>
          <h2>Easy access storage in Murray, Kentucky.</h2>
          <p className="location-text">
            Premier Storage offers convenient local storage with simple access
            and secure unit options for personal or business needs.
          </p>
        </div>

        <div className="location-card">
          <h3>Premier Storage</h3>
          <p>Murray, KY</p>
          <p>Climate-controlled storage units</p>
          <a href="#contact">Contact for availability</a>
        </div>
      </div>
    </section>
  );
};

export default Location;
