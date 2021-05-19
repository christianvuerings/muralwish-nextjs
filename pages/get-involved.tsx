import styles from "styles/Page.module.css";
import config from "config";
import { request } from "graphql-request";
import Meta from "components/Meta";
import useSWR from "swr";

export default function About() {
  const pageQuery = `query GetInvolvedQuery {
			page(where: {slug: "get-involved"}) {
				id
				content {
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
      <Meta title="Get Involved" />
      <div
        className={styles.page}
        dangerouslySetInnerHTML={{ __html: data?.page?.content?.html }}
      ></div>
    </>
  );
}
