import styles from "./Navbar.module.css";
import { FaBars } from "react-icons/fa";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.navbar}`}>
        <div className={styles.logo}>
          <div className={styles.logoIcon}></div>
          <span>LINKSCHAT</span>
        </div>

        <nav className={styles.navLinks}>
          <a href="#features">Features</a>
          <a href="#privacy">Privacy</a>
          <a href="#communities">Communities</a>
          <a href="#">Download</a>
        </nav>

        <button className={styles.downloadBtn}>Download</button>

        <button className={styles.menuBtn} onClick={() => setIsOpen(!isOpen)}>
          <FaBars />
        </button>
      </div>

      {isOpen && (
        <div className={styles.mobileMenu}>
          <a href="#">Features</a>
          <a href="#">Privacy</a>
          <a href="#">Communities</a>
          <a href="#">Download</a>
        </div>
      )}
    </header>
  );
}

export default Navbar;
