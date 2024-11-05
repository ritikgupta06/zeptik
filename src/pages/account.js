import React from "react";
import styles from "../styles/account.module.css";
import Navbar from "@/components/navbar";

const Account = () => {
  return (
    <>
      <Navbar />
      <div className={styles.accountContainer}>
        <h1 className={styles.title}>My Account</h1>
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Basic Details</h2>
          <div className={styles.card}>
            <p>
              <strong>Name:</strong> Ritik{" "}
            </p>
            <p>
              <strong>Email:</strong> myselfritik@example.com
            </p>
            <p>
              <strong>Phone:</strong> +1 123 456 7890
            </p>
          </div>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Address</h2>
          <div className={styles.card}>
            <p>1234 Elm Street, Springfield</p>
            <button className={styles.editButton}>Edit Address</button>
          </div>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Orders</h2>
          <div className={styles.card}>
            <p>You have 3 orders.</p>
            <button className={styles.viewOrdersButton}>View Orders</button>
          </div>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Edit Profile</h2>
          <button className={styles.editButton}>Edit Profile</button>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Select Language</h2>
          <select className={styles.selectLanguage}>
            <option>English</option>
            <option>Spanish</option>
            <option>French</option>
            <option>German</option>
          </select>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Notification Settings</h2>
          <div className={styles.card}>
            <label>
              <input type="checkbox" /> Receive Email Notifications
            </label>
            <label>
              <input type="checkbox" /> Receive SMS Notifications
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Account;
