import React, { useContext } from 'react';
import { Context } from '../App';

const Item = ({item}) => {
  const state = useContext(Context);
  // function AddToOrder(item) {
  //   console.log(state.orders);
  //   state.setOrders((prevOrders)=> [...prevOrders, item]);
  // }
  return (
    <div className="item">
      <img src={'./img/' + item.image} alt="Image of item" />
      <h2>{item.title}</h2>
      <p>{item.description}</p>
      <b>{item.price}$</b>
      <div className="add-to-cart" onClick={() => state.setOrders(prevOrders=> [...prevOrders, item])}>
        +
      </div>
    </div>
  );
};

export default Item;
