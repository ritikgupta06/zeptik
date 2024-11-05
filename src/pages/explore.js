import React, { useState } from 'react';
import { useRouter } from 'next/router'; // Import useRouter from next/router
import styles from '../styles/explore.module.css';
import Navbar from '@/components/navbar';

const Explore = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter(); // Initialize useRouter

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Function to handle category clicks
  const handleCategoryClick = () => {
    router.push('/'); // Redirect to home page
  };

  return (
    <>
      <Navbar />
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
          <div className={styles.categoryBox} onClick={handleCategoryClick}>Food</div>
          <div className={styles.categoryBox} onClick={handleCategoryClick}>Grocery</div>
          <div className={styles.categoryBox} onClick={handleCategoryClick}>Sweets</div>
          <div className={styles.categoryBox} onClick={handleCategoryClick}>Namkeens</div>
        </div>
      </div>
    </>
  );
};

export default Explore;
