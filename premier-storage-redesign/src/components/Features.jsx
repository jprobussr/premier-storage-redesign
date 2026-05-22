import './Features.css';

const features = [
  '24-hour access',
  'Climate-controlled units',
  'Video camera monitoring',
  'Pest controlled',
  'Multiple unit sizes',
  'Online account access',
];

const Features = () => {
  return (
    <section className="features section" id="features">
      <div className="container">
        <div className="section-header">
          <p className="eyebrow">Storage Features</p>
          <h2>Convenient, secure storage for your belongings.</h2>
        </div>

        <div className="features-grid">
          {features.map((feature) => {
            return (
              <article className="feature-card" key={feature}>
                <h3>{feature}</h3>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
