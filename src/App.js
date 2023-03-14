import Header from './components/Header';
import Footer from './components/Footer';
import React, { useState } from 'react';
import { furniture } from './items';
import Items from './components/Items';

const App = () => {
  const [items] = useState(furniture);
  return (
    <div className="wrapper">
      <Header />
      <Items items={items} />
      <Footer />
    </div>
  );
};

export default App;
