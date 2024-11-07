'use client';  // Ensure client-side rendering

import { useState } from 'react';
import styles from '@/app/styles/Navbar.module.css';  // Import styles

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle side menu visibility
  const toggleSideMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  return (
    <div>
      {/* Main Navbar */}
      <nav className={styles.navbar}>
        {/* Hamburger Icon */}
        <div className={styles.hamburger} onClick={toggleSideMenu}>
          &#9776; {/* This is the hamburger icon */}
        </div>

        {/* Side Menu */}
        <div className={`${styles.sideMenu} ${isMenuOpen ? styles.active : ''}`}>
          <div className={styles.cut} onClick={toggleSideMenu}>
            &times; {/* Close button for the side menu */}
          </div>
          <ul>
            <li><a onClick={toggleSideMenu} href="/">Home</a></li>
            <li><a onClick={toggleSideMenu} href="/services">Services</a></li>
            <li><a onClick={toggleSideMenu} href="/about">About</a></li>
          </ul>
        </div>

        {/* Branding */}
        <div className={styles.name}>
          Data <span>Quest</span>
        </div>

        {/* Desktop Navigation */}
        <ul className={styles.navigation}>
          <li><a href="/">Home</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/about">About</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
