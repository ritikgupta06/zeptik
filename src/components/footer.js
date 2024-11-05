import React from 'react';
import styles from '../styles/footer.module.css'; 


const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerLinks}>
          <h4>Links</h4>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/terms">Terms of Service</a></li>
          </ul>
        </div>
        
        <div className={styles.footerContact}>
          <h4>Contact Us</h4>
          <p>Email: support@example.com</p>
          <p>Phone: +1 (555) 123-4567</p>
        </div>

        <div className={styles.footerAbout}>
          <h4>About Us</h4>
          <p>We are committed to providing the best services to our customers. Our goal is to ensure your satisfaction with every purchase.</p>
        </div>
        
        <div className={styles.footerNewsletter}>
          <h4>Subscribe to Our Newsletter</h4>
          <input type="email" placeholder="Enter your email" className={styles.newsletterInput} />
          <button className={styles.subscribeButton}>Subscribe</button>
        </div>

        <div className={styles.footerSocialMedia}>
          <h4>Follow Us</h4>
          <ul className={styles.socialMediaLinks}>
            <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          </ul>
        </div>

        <div className={styles.footerCopyright}>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
