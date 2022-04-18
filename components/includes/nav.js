import classNames from "classnames";
import Link from "../link";

const links = [
  {
    path: "/about",
    name: "About"
  },
  {
    path: "/blog",
    name: "Blog"
  }
  // {
  //   path: "/projects",
  //   name: "Projects"
  // },
  // {
  //   path: "/now",
  //   name: "Now"
  // }
  // {
  //   path: "/uses",
  //   name: "Uses"
  // }
  // {
  //   path: "/contact",
  //   name: "Contact"
  // }
];

function Nav(props) {
  const { className, ...rest } = props;
  return (
    <nav className={classNames("flex space-x-4", className)}>
      {links.map(({ path, name }, index) => (
        <Link
          href={path}
          className="no-underline hover:underline uppercase"
          key={index}
        >
          {name}
        </Link>
      ))}
    </nav>
  );
}

export default Nav;
