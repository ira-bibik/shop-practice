import React, { useContext } from 'react';
import { Context } from '../App';

const Item = ({item}) => {
  const state = useContext(Context);
  function AddToOrder(item) {
    let isInArray = false;
    state.orders.forEach(el => {
      if (el.id === item.id)
        isInArray = true;
    })
    if (!isInArray)
      state.setOrders((prevOrders)=> [...prevOrders, item]);
  }
  return (
    <div className="item">
      <img src={'./img/' + item.image} alt="Image of item" />
      <h2>{item.title}</h2>
      <p>{item.description}</p>
      <b>{item.price}$</b>
      <div className="add-to-cart" onClick={() => AddToOrder(item)}>
        +
      </div>
    </div>
  );
};

export default Item;
