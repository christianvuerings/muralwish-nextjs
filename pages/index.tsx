import styles from "styles/Home.module.css";
import Meta from "components/Meta";

export default function Home() {
  return (
    <>
      <Meta />
      <div className={styles.container}>
        <div className={styles.heroInner}>
          <div className={styles.video}>
            <iframe
              title="Mural Wish: Funding Video"
              width="560"
              height="315"
              src="https://www.youtube-nocookie.com/embed/y3JdzYdo-TI"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <h2 className={styles.heading}>Donate to Mural Wish</h2>
        <div className={styles.givebutter} id="donate">
          <iframe
            src="https://givebutter.com/embed/c/muralwish"
            width="100%"
            height="615px"
            style={{
              maxWidth: 601,
            }}
            name="givebutter"
            frameBorder="0"
            scrolling="no"
            seamless
            title="Donate to Mural Wish"
          ></iframe>
          <script src="https://givebutter.com/js/widget.js"></script>
        </div>
      </div>
    </>
  );
}
