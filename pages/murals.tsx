import styles from "styles/Page.module.css";
import config from "config";
import { request } from "graphql-request";
import Meta from "components/Meta";
import Page from "components/Page";
import useSWR from "swr";

export default function Murals() {
  const pageQuery = `query AboutPageQuery {
		page(where: {slug: "murals"}) {
			id
			content {
				raw
				html
			}
			slug
			stage
			subtitle
			title
		}
		pages {
			id
		}
	}
	`;

  const { data, error } = useSWR(pageQuery, (query) =>
    request(config.graphcmsGraphQL, query)
  );

  return (
    <>
      <Meta title="Murals" />

      <Page data={data?.page?.content?.raw}></Page>
    </>
  );
}
