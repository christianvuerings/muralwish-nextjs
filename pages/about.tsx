import config from "config";
import { request } from "graphql-request";
import Meta from "components/Meta";
import useSWR from "swr";
import Page from "components/Page";

export default function About() {
  const pageQuery = `query AboutPageQuery {
			page(where: {slug: "about"}) {
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
      <Meta title="About" />
      <Page data={data?.page?.content?.raw}></Page>
    </>
  );
}
