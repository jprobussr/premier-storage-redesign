import './UnitSizes.css';

const units = [
  {
    size: '5 x 5',
    description: 'Great for boxes, small furniture, and seasonal items.',
  },
  {
    size: '5 x 10',
    description: 'Fits the contents of a small bedroom or dorm room.',
  },
  {
    size: '10 x 10',
    description:
      'A popular option for apartment furniture and household items.',
  },
  {
    size: '10 x 30',
    description:
      'Large storage space for full-home moves or business inventory.',
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

        <div className="units-grid">
          {units.map((unit) => {
            return (
              <article className="unit-card" key={unit.size}>
                <h3>{unit.size}</h3>
                <p>{unit.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default UnitSizes;
