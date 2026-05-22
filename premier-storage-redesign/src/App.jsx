import './App.css';
import Features from './components/Features.jsx';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';

const App = () => {
  return (
    <>
      <Header />

      <main className="app">
        
        <Hero />

        <Features />

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
