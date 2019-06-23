import React from 'react';
import './App.css';
import './stylesheet/style.css';

import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Middle from './components/Middle/Middle';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="container-fluid reset">
      <Header />
      <Banner />
      <Middle />
      <Footer />
    </div>
  );
}

export default App;
