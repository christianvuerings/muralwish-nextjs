import React from "react";
import styles from "styles/Footer.module.css";
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footer}>
        <div className={styles.block}>
          <h2 className={styles.blockTitle}>Mural Wish</h2>
          <address className={styles.address}>
            <div>1138 Arch Street</div>
            <div>94708 Berkeley, CA</div>
            <div>USA</div>
          </address>
        </div>
        <div className={styles.block}>
          <h2 className={styles.blockTitle}>Get Involved</h2>
          <ul className={styles.list}>
            <li>
              <Link href="/#donate">Donate</Link>
            </li>
            <li>
              <Link href="/get-involved">Contact</Link>
            </li>
          </ul>
        </div>
        <div className={styles.block}>
          <h2 className={styles.blockTitle}>Follow Us</h2>
          <ul className={styles.list}>
            <li>
              <Link href="https://www.instagram.com/muralwish/">Instagram</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.copyright}>
        © {year} Mural Wish. All Rights Reserved.
      </div>
    </footer>
  );
}
