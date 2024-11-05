import styles from '../styles/navbar.module.css';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FiHome, FiShoppingCart, FiHeart, FiUser, FiSearch, FiGrid } from 'react-icons/fi';


const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Function to detect mobile view
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Top Navbar for Desktop */}
      {!isMobile && (
        <nav className={styles.navbar}>
          <div className={styles.logo}>
            <Link href="/">Zeptik</Link>
          </div>
          <div className={styles.searchContainer}>
            <input type="text" placeholder="Search products..." className={styles.searchInput} />
          </div>
          <ul className={styles.navLinks}>
            <li>
              <Link href="/" className={styles.navItem}>
                <FiHome className={styles.icon} /> Home
              </Link>
            </li>
            <li>
              <Link href="/cart" className={styles.navItem}>
                <FiShoppingCart className={styles.icon} /> Cart
              </Link>
            </li>
            <li>
              <Link href="/favorite" className={styles.navItem}>
                <FiHeart className={styles.icon} /> Favorite
              </Link>
            </li>
            <li>
              <Link href="/account" className={styles.navItem}>
                <FiUser className={styles.icon} /> Account
              </Link>
            </li>
          </ul>
        </nav>
      )}

      {/* Bottom Tab Bar for Mobile */}
      {isMobile && (
        <div className={styles.tabBar}>
          <Link href="/" className={styles.tabItem}>
            <FiHome className={styles.tabIcon} />
            <span>Shop</span>
          </Link>
          <Link href="/explore" className={styles.tabItem}>
            <FiGrid className={styles.tabIcon} />
            <span>Explore</span>
          </Link>
          <Link href="/cart" className={styles.tabItem}>
            <FiShoppingCart className={styles.tabIcon} />
            <span>Cart</span>
          </Link>
          <Link href="/favorite" className={styles.tabItem}>
            <FiHeart className={styles.tabIcon} />
            <span>Favorite</span>
          </Link>
          <Link href="/account" className={styles.tabItem}>
            <FiUser className={styles.tabIcon} />
            <span>Account</span>
          </Link>
        </div>
      )}
    </>
  );
};

export default Navbar;
