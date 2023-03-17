import Header from './components/Header';
import Footer from './components/Footer';
import React, { useState, createContext } from 'react';
import { furniture } from './items';
import Items from './components/Items';

const App = () => {
  const [items] = useState(furniture);
  const [orders, setOrders] = useState([]);
  let [cartOpen, setCartOpen] = useState(false);
  const value = {
    items,
    orders,
    setOrders,
    cartOpen,
    setCartOpen
  };
  // function AddToOrder(item) {
  //   console.log(orders);
  //   setOrders((prevOrders)=> [...prevOrders, item]);
  // }

  return (
    <Context.Provider value={value}>
      <div className="wrapper">
        <Header />
        <Items />
        <Footer />
      </div>
    </Context.Provider>
  );
};

export const Context = createContext();

export default App;
