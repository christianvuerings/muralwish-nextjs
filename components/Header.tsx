import styles from "styles/Header.module.css";
import Image from "next/image";
import Navigation from "components/Navigation";

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.logoContainer}>
        <img
          src="/images/logo.png"
          className={styles.logo}
          alt="Mural Wish Logo"
        />
      </div>
      <Navigation />
    </div>
  );
}
