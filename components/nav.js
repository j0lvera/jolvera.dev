import { Moon, Sun } from "react-feather";
import Link from "./link";

const Nav = props => {
  return (
    <nav {...props}>
      <ul
        style={{
          listStyle: "none"
          // "li:not(:first-of-type) a, li:not(:first-of-type) button": {
          //   "margin-left": "1rem"
          // },
          // a: {
          //   textDecoration: "none",
          //   textTransform: "uppercase",
          //   fontSize: 1,
          //   fontWeight: "bold",
          //   letterSpacing: 1
          // },
          // "a:hover": {
          //   textDecoration: "underline"
          // }
        }}
      >
        <li>
          <Link href="/about">About</Link>
        </li>

        <li>
          <Link href="/blog">Blog</Link>
        </li>

        <li>
          <button
            onClick={
              () => console.log("theme")
              // setColorMode(colorMode === "light" ? "dark" : "light")
            }
          >
            light
            {/*{colorMode === "light" ? <Moon /> : <Sun />}*/}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
