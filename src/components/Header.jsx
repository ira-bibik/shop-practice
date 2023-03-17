import React, { useContext} from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Context } from '../App';
import Order from './Order';


export default function Header() {
  const state = useContext(Context);
  
  const showOrders = (orders) => {
    let summa = 0;
    state.orders.forEach((el) => (summa += Number.parseFloat(el.price)));
    return (
      <div>
        {orders.map((el) => (
          <Order key={el.id} item={el} />
        ))}
        <p className="summa">Summa: {new Intl.NumberFormat().format(summa)}$</p>
      </div>
    );
  };

  const showNothing = () => {
    return (
      <div className="empty">
        <h2>No orders!</h2>
      </div>
    );
  };

  return (
    <header>
      <div>
        <span className="logo">House Staff</span>
        <ul className="nav">
          <li>Про нас</li>
          <li>Контакти</li>
          <li>Кабінет</li>
        </ul>
        <FaShoppingCart
          onClick={() => state.setCartOpen((state.cartOpen = !state.cartOpen))}
          className={`shop-cart-button ${state.cartOpen && 'active'}`}
        />
        {state.cartOpen && (
          <div className="shop-cart">
            {state.orders.length > 0 ?
          showOrders(state.orders) : showNothing()}
          </div>
        )}
      </div>
      <div className="presentation"></div>
    </header>
  );
}
