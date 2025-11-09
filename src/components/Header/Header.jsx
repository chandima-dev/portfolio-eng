import { useState, useRef, useEffect } from 'react';
import styles from './Header.module.css';
import { FaFacebook, FaLinkedin, FaPhone, FaEnvelope, FaClock, FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navbarRef = useRef(null); // Create a ref for the navbar

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    // Close the menu if the click is outside the navbar
    if (navbarRef.current && !navbarRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    // Add event listener for clicks outside the navbar
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Clean up the event listener on component unmount
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Function to handle link click and close the menu
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <div className={styles.topBar}>
        <div className={styles.contactInfo}>
          <span>
            <a href="tel:+94728130647">
              <FaPhone /> (+94) 72 813 0647
            </a>
          </span>
          <span>
            <a href="mailto:info@falcondesigns.com.lk">
              <FaEnvelope /> info@falcondesigns.com.lk
            </a>
          </span>
          <span>
            <FaClock /> Monday to Saturday 7.00 a.m - 00.00 a.m GMT +05:30
          </span>
        </div>
      </div>
      <header className={styles.header}>
      <div className={styles.logo}>
        <span className={styles.falconengineering}>Falcon Engineering &</span>
        <span className={styles.architects}>Architects</span>
      </div>
        <div className={styles.menuToggle} onClick={toggleMenu}>
          {isOpen ? (
            <div className={styles.closeButton}>
              <FaTimes />
            </div>
          ) : (
            <div className={styles.openButton}>
              <FaBars />
            </div>
          )}
        </div>
        <div className={`${styles.navbar} ${isOpen ? styles.navOpen : ''}`} ref={navbarRef}>
          <ul>
            <li><Link to="/" onClick={handleLinkClick}>Home</Link></li>
            <li><Link to="/aboutus" onClick={handleLinkClick}>About Us</Link></li>
            <li><Link to="/services" onClick={handleLinkClick}>Services</Link></li>
            <li><Link to="/projects" onClick={handleLinkClick}>Projects</Link></li>
            <li><Link to="/contactus" onClick={handleLinkClick}>Contact Us</Link></li>
          </ul>
        </div>
        <div className={styles.socialMedia}>
          <a href="https://web.facebook.com/falcondesignstudio" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          <a href="https://lk.linkedin.com/company/falcon-engineering-and-architects" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        </div>
      </header>
    </div>
  );
};

export default Header;
