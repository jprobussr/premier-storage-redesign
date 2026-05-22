import './App.css';
import Header from './components/Header.jsx';

const App = () => {
  return (
    <>
      <Header />

      <main className="app">
        <section className="hero section" id="top">
          <div className="container">Hero</div>
        </section>

        <section className="features section" id="features">
          <div className="container">Features</div>
        </section>

        <section className="unit-sizes section" id="units">
          <div className="container">Unit Sizes</div>
        </section>

        <section className="location section" id="location">
          <div className="container">Location</div>
        </section>
      </main>

      <footer className="site-footer" id="contact">
        Contact
      </footer>
    </>
  );
};

export default App;
