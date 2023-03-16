import React, { useContext } from 'react';
import { Context } from '../App';

const Order = ({item}) => {
  const state = useContext(Context);
    return (
      <div className="item">
        <img src={'./img/' + item.image} alt="Image of item" />
        <h2>{item.title}</h2>
        <b>{item.price}$</b>
      </div>
    );
};

export default Order;
