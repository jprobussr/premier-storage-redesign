import { useState } from 'react';
import './App.css';
import Features from './components/Features.jsx';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import UnitSizes from './components/UnitSizes.jsx';
import Location from './components/Location.jsx';
import Footer from './components/Footer.jsx';
import Gallery from './components/Gallery.jsx';
import Stats from './components/Stats.jsx';

const App = () => {
  const [selectedUnit, setSelectedUnit] = useState(null);
  return (
    <>
      <Header />

      <main className="app">
        <Hero />

        <Stats />

        <Features />

        <UnitSizes setSelectedUnit={setSelectedUnit} />

        <Gallery />

        <Location />
      </main>

      <Footer selectedUnit={selectedUnit} />
    </>
  );
};

export default App;
