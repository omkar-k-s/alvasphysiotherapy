import React from 'react';
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <div className="app-root">
      {/* Primary Navigation & Institutional Top Bar */}
      <Header />

      {/* Main Content Area */}
      <main id="main-content">
        <Home />
      </main>

      {/* Global Institutional Footer */}
      <Footer />
    </div>
  );
}

export default App;
