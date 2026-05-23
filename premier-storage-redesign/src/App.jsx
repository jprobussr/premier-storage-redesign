import './App.css';
import Features from './components/Features.jsx';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import UnitSizes from './components/UnitSizes.jsx';
import Location from './components/Location.jsx';
import Footer from './components/Footer.jsx';

const App = () => {
  return (
    <>
      <Header />

      <main className="app">
        
        <Hero />

        <Features />

       <UnitSizes />

      <Location />
       
      </main>

     <Footer />
    </>
  );
};

export default App;
