import Container from "./container";

function Footer() {
  return (
    <>
      <footer>
        <Container>
          <p className="copy">
            &copy; {new Date().getFullYear()}, Proudly built with{" "}
            <a href="https://nextjs.org">Next.js</a> -{" "}
            <a href="https://github.com/j0lv3r4/nextjs-blog-starter">
              Source code
            </a>
          </p>
        </Container>
      </footer>
      <style jsx>{`
        footer {
          padding-top: 3rem;
          padding-bottom: 3rem;
        }
      `}</style>
    </>
  );
}

export default Footer;
