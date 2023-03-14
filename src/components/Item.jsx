import React from 'react';

const Item = ({ item }) => {
  return (
    <div className="item">
      <img src={'./img/' + item.img} alt="Image of item" />
      <h2>{item.title}</h2>
      <p>{item.description}</p>
      <b>{item.price}$</b>
      <div className="add-to-cart">+</div>
    </div>
  );
};

export default Item;
