import config from "config";
import { request } from "graphql-request";
import Meta from "components/Meta";
import useSWR from "swr";
import Page from "../components/Page";

export default function About() {
  const pageQuery = `query GetInvolvedQuery {
			page(where: {slug: "get-involved"}) {
				id
				content {
					html
					raw
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
      <Page data={data?.page?.content?.raw}></Page>
    </>
  );
}
