import './Stats.css';

const stats = [
  {
    value: '24/7',
    label: 'Facility Access',
  },
  {
    value: 'Climate',
    label: 'Controlled Units',
  },
  {
    value: '4 Sizes',
    label: 'Storage Options',
  },
  {
    value: 'Secure',
    label: 'Monitored Facility',
  },
];

const Stats = () => {
  return (
    <section className="stats section">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat) => {
            return (
              <article className="stat-card" key={stat.label}>
                <h2>{stat.value}</h2>
                <p>{stat.label}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
