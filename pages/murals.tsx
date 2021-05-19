import styles from "styles/Home.module.css";
import Meta from "components/Meta";

export default function Murals() {
  return (
    <>
      <Meta title="Murals" />
      <div className={styles.container}>
        <div className={styles.heroInner}>
          <div className={styles.video}>
            <iframe
              title="Jazz's Mural Wish"
              width="560"
              height="315"
              src="https://www.youtube-nocookie.com/embed/jQs3C6AsS2A"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}
