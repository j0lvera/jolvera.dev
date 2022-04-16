import { withRouter } from "next/router";
import Layout from "../components/layouts/default";

function Share({ router }) {
  return (
    <Layout pageTitle="Home" path={router.pathname}>
      <form onSubmit={e => e.preventDefault()}>
        <div style={{ display: "flex" }}>
          <div>
            <label htmlFor="title">Title</label>
            <input id="title" name="title" type="text" required />
          </div>

          <div>
            <label htmlFor="url">URL</label>
            <input id="url" name="url" type="text" required />
          </div>
        </div>

        <div>
          <label htmlFor="body">Note Body</label>
          <textarea id="body" name="body" required />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <div>
            <label htmlFor="via">Via</label>
            <input id="via" name="via" type="text" required />
          </div>

          <div>
            <label>
              <checkbox id="twitter" name="twitter" />
              Syndicate to Twitter
            </label>
          </div>
        </div>
        <div>
          <button>Publish Note</button>
        </div>
      </form>
    </Layout>
  );
}

export default withRouter(Share);
