import Layout from "./default";

function Page({ title, children }) {
  return (
    <Layout pageTitle={title}>
      <article>
        <header>
          <h1>{title}</h1>
        </header>
        <div>{children}</div>
      </article>
    </Layout>
  );
}

export default Page;
