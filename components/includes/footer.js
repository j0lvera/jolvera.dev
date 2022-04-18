import classNames from "classnames";
import Link from "../link";
import Container from "../container";

function Footer(props) {
  const { className, ...rest } = props;
  return (
    <footer className={classNames("py-8 dark:bg-slate-900", className)}>
      <Container>
        <div>
          <p>
            <Link href="#top">Back to top</Link> ·{" "}
            <Link href="https://github.com/j0lv3r4/jolvera.dev">
              Website source code
            </Link>{" "}
            ·{" "}
            <Link href="https://app.usefathom.com/share/wyuxfmym/jolvera.dev">
              Analytics
            </Link>{" "}
            ·{" "}
            <Link href="/feed.xml" sx={{ color: "primary" }}>
              RSS feed
            </Link>
          </p>
        </div>

        <p>
          <Link href="https://creativecommons.org/licenses/by-sa/4.0/">
            CC BY-SA
          </Link>{" "}
          {new Date().getFullYear()}, Juan Olvera. Website built with{" "}
          <Link href="https://nextjs.org" sx={{ color: "primary" }}>
            Next.js
          </Link>
        </p>

        <div style={{ display: "flex" }}>
          <small>
            <Link
              href="https://xn--sr8hvo.ws/%F0%9F%8D%B5%F0%9F%90%94%F0%9F%95%96/previous"
              mr={2}
            >
              ←
            </Link>
            IndieWeb 🕸💍
            <Link
              href="https://xn--sr8hvo.ws/%F0%9F%8D%B5%F0%9F%90%94%F0%9F%95%96/next"
              ml={2}
            >
              →
            </Link>
          </small>
        </div>
      </Container>
    </footer>
  );
}

export { Footer };
