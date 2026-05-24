import './UnitSizes.css';

const units = [
  {
    id: 1,
    size: '5 x 10',
    price: '$65',
    description: 'Great for boxes, seasonal items, and small furniture.',
    features: ['Drive-up access', 'Month-to-month rental', 'Secure facility'],
  },
  {
    id: 2,
    size: '10 x 10',
    price: '$95',
    description: 'Fits the contents of a bedroom or small apartment.',
    features: ['Popular size', 'Easy access', 'Secure facility'],
    featured: true,
  },
  {
    id: 3,
    size: '10 x 20',
    price: '$145',
    description: 'Ideal for larger furniture, equipment, or household storage.',
    features: ['Large unit', 'Vehicle-friendly', 'Month-to-month rental'],
  },
];

const UnitSizes = () => {
  return (
    <section className="unit-sizes section" id="units">
      <div className="container">
        <div className="section-header">
          <p className="eyebrow">Unit Sizes</p>
          <h2>Choose the space that fits your storage needs.</h2>
        </div>

        <div className="unit-grid">
          {units.map((unit) => {
            return (
              <article className={`unit-card ${unit.featured ? 'featured' : ''}`} key={unit.id}>
                <div className="unit-card-top">
                  <h3>{unit.size}</h3>
                  <p>{unit.description}</p>
                </div>

                <div className="unit-price">
                  <span>{unit.price}</span>
                  <small> / month</small>
                </div>

                <ul className="unit-features">
                  {unit.features.map((feature) => {
                    return <li key={feature}>{feature}</li>;
                  })}
                </ul>

                <a href="#contact" className="unit-button">
                  Reserve Unit
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default UnitSizes;
