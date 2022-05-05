import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/theme.min.css';
import Header from './pages/Header';
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Skills from './pages/Skills';
import Portfolio from './pages/Portfolio';
import Footer from './pages/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <div id="wrapper" className="bg-white p-0">
      <div id="main" className="py-0">
        <Home />
        <About />
        <Experience />
        <Skills />
        <Portfolio />
        <Footer />
      </div>
    </div>
  </React.StrictMode>
);