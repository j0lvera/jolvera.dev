import { withRouter } from "next/router";
import { siteMeta } from "../blog.config";
import Layout from "../components/layouts/home";

function Home({ router }) {
  return (
    <Layout pageTitle="Home" path={router.pathname}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center"
        }}
        className="h-card"
      >
        <img
          className="u-photo visuallyhidden"
          src="/static/_jolvera.png"
          alt={siteMeta.author}
        />

        <div>
          <h1 className="p-note">
            I build inclusive, fast and responsive web experiences
          </h1>
          <p>
            I'm{" "}
            <a className="u-url p-name" href={siteMeta.siteUrl} rel="me">
              Juan Olvera
            </a>
            , a frontend developer &amp; web standards enthusiastic.
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default withRouter(Home);
