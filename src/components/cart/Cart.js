import React, { useContext } from 'react';
import './cart.css';
import { NavLink } from 'react-router-dom';
import { globalData } from '../../context/Context';
import axios from "axios"

const Cart = () => {
  const { cartItem } = useContext(globalData);

  // Calculate the total amount
  const totalAmount = cartItem.reduce((total, item) => {
    return total + item.price * item.qty;
  }, 0);


  //////////////////////send cart data to backend/////////////////

axios.post("http://localhost:4000/api/order",cartItem)
.then((res)=>console.log(res))
.catch((error)=>console.log(error))












  return (
    <div className="cart-container">
      <div className='cart-top-bar'>
        <h1>Your Shopping Cart</h1>
        <div className="go-back-button">
        <button><NavLink to={"/"}>Go Back</NavLink> </button>
        </div>
      </div>
      
      {cartItem.length === 0 ? (
        <h1>Cart is empty</h1>
      ) : (
        <table className="cart-items">
          <thead>
            <tr>
              <th>Pic</th>
              <th>Item</th>
              <th>Quantity</th>
              <th>Price per item</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {cartItem.map((item) => (
              <tr key={item.id}>
                <td><img src={item.pic} alt={item.title} /></td>
                <td>{item.title}</td>
                <td>
                  <div className="quantity-control">
                    <button >-</button>
                    <span>{item.qty}</span>
                    <button >+</button>
                  </div>
                </td>
                <td>${item.price}</td>
                <td>${item.price * item.qty}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <div style={{ display: "flex", alignItems: "end", marginTop: "20px" }}>
        <div style={{ width: "80%", textAlign: "center" }}>
          <button style={{ width: "60%", color: "black" }}>Pay Now</button>
        </div>
        <div style={{ width: "20%" }} className="cart-total">
          Total: ${totalAmount}
        </div>
      </div>
    </div>
  );
};

export default Cart;

