import Head from "next/head";

export default function Meta({ title = "" } = {}) {
  return (
    <Head>
      <title>{title ? `${title} | Mural Wish` : "Mural Wish"}</title>
      <meta
        name="description"
        content="Mural Wish provides spirit lifting support through mural artwork that empowers critically-ill children to continue to fight."
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
