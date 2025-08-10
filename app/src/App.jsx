import { useState,useEffect } from 'react'
import Nav from './component/nav-bar';
import {Outlet} from 'react-router-dom';

export default function App() {
  const [cart, setCart] = useState(()=>{
    return JSON.parse(localStorage.getItem("cart")) || [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product, quantity) => {
    setCart(prevCart => {
      const existingProduct = prevCart.find(item => item.id === product.id);
      if (existingProduct) {
        return prevCart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [...prevCart, { ...product, quantity }];
    });
  };

  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  const totalCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return(
    <>
    <Nav cartCount={totalCount} />
    <Outlet 
      context={{ cart, addToCart, removeFromCart }}
    />
  </>
  )
}