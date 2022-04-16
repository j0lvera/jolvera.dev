import { Moon, Sun } from "react-feather";
import Link from "../link";

const links = [
  {
    path: "/about",
    name: "About"
  },
  {
    path: "/blog",
    name: "Blog"
  },
  {
    path: "/projects",
    name: "Projects"
  },
  {
    path: "/contact",
    name: "Contact"
  }
];

function Nav(props) {
  return (
    <nav {...props}>
      <ul className={"list-none flex"}>
        {links.map(({ path, name }, index) => (
          <li key={index}>
            <Link href={path}>{name}</Link>
          </li>
        ))}

        <li>
          <button
            className={"bg-amber-200 text-black"}
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
}

export default Nav;
