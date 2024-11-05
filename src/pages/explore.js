import React, { useState } from 'react';
import styles from '../styles/explore.module.css';
import Navbar from '@/components/navbar';

const Explore = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
   < Navbar/>
    <div className={styles.container}>
      <h1 className={styles.title}>Explore</h1>
      
      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearchChange}
        className={styles.searchBar}
      />

      {/* Categories */}
      <div className={styles.categories}>
        <div className={styles.categoryBox}>Food</div>
        <div className={styles.categoryBox}>Grocery</div>
        <div className={styles.categoryBox}>Sweets</div>
        <div className={styles.categoryBox}>Namkeens</div>
      </div>
    </div>
    </>
  );
};

export default Explore;
