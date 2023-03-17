import React, { useContext } from 'react';
import { FaTrash } from 'react-icons/fa';
import { Context } from '../App';

const Order = ({ item }) => {
  const state = useContext(Context);
  function deleteOrder(id) {
    state.setOrders(()=>state.orders.filter(el=> el.id !== id))
  }
  return (
    <div className="item">
      <img src={'./img/' + item.image} alt="Image of item" />
      <h2>{item.title}</h2>
      <p>{item.price}$</p>
      <FaTrash className="delete-icon" onClick={() => deleteOrder(item.id)} />
    </div>
  );
};

export default Order;
