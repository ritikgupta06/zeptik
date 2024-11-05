import React from 'react';
import styles from '@/styles/cart.module.css';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';


const Cart = () => {
  const cartItems = [
    {
      id: 1,
      name: 'Sandwitch',
      price: 10.00,
      image: 'https://media.istockphoto.com/id/1221237754/photo/two-halves-of-club-sandwich-on-white.jpg?s=1024x1024&w=is&k=20&c=uvZLtUuVJaohKuNwQB-K2vzYnU3kbpQo4NH4ahFmhW8=', 
    },
    {
      id: 2,
      name: 'egg',
      price: 15.00,
      image: 'https://media.istockphoto.com/id/924323032/photo/wooden-basket-with-eggs.webp?b=1&s=612x612&w=0&k=20&c=YvEJM-cE0GPJRtKYOqBdC2C5kWirWPrJTjhfD2i8lUU=',
    },
    {
      id: 3,
      name: 'burger',
      price: 20.00,
      image: 'https://cdn.pixabay.com/photo/2024/04/13/16/32/bagel-8694162_1280.jpg',
    },
    {
        id: 4,
        name: 'pitzza',
        price: 20.00,
        image: 'https://cdn.pixabay.com/photo/2022/05/15/20/42/sandwich-7198982_1280.jpg',
      },
      {
        id: 5,
        name: 'chees burger',
        price: 20.00,
        image: 'https://cdn.pixabay.com/photo/2014/10/19/20/59/hamburger-494706_1280.jpg',
      },
  ];

  const handleBuy = (itemName) => {
    alert(`You bought ${itemName}!`);
  };

  const handleRemove = (itemId) => {
    alert(`Removed item with ID: ${itemId}`);
  };

  return (
    <>
    <Navbar/>
    <div className={styles.cartContainer}>
      <h2 className={styles.cartTitle}>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className={styles.emptyCartMessage}>Your cart is empty!</p>
      ) : (
        <ul className={styles.cartItemList}>
          {cartItems.map(item => (
            <li key={item.id} className={styles.cartItem}>
              <img src={item.image} alt={item.name} className={styles.cartItemImage} />
              <div className={styles.cartItemDetails}>
                <h3 className={styles.cartItemName}>{item.name}</h3>
                <p className={styles.cartItemPrice}>${item.price.toFixed(2)}</p>
              </div>
              <div className={styles.buttonContainer}>
                <button 
                  className={styles.buyButton} 
                  onClick={() => handleBuy(item.name)}>
                  Buy
                </button>
                <button 
                  className={styles.removeButton} 
                  onClick={() => handleRemove(item.id)}>
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
    <Footer/>
    </>
  );
};

export default Cart;
