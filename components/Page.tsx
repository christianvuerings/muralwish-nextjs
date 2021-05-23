import styles from "styles/Page.module.css";

function Children({ data }) {
  return data.map((child) => {
    if (child.type === "link") {
      return (
        <a href={child.href}>
          <Children data={child.children}></Children>
        </a>
      );
    } else {
      return child.text;
    }
  });
}

export default function Page({ data }) {
  const output = data?.children?.map((element) => {
    if (element.type === "heading-two") {
      return (
        <h2 className={styles.pageHeading2}>
          {element.children.map((element) => element.text)}
        </h2>
      );
    } else if (element.type === "paragraph") {
      return (
        <p className={styles.paragraph}>
          <Children data={element.children}></Children>
        </p>
      );
    } else if (element.type === "iframe") {
      return (
        <div className={styles.heroInner}>
          <div className={styles.video}>
            <iframe
              className={styles.iframe}
              src={element.url}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      );
    } else if (element.type === "image") {
      return (
        <img
          className={styles.image}
          src={element.src}
          alt={element.title}
          title={element.title}
          width={element.width}
          height={element.height}
        />
      );
    }
  });

  return <div className={styles.page}>{output}</div>;
}
