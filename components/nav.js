import { Moon, Sun } from "react-feather";
import { useColorMode } from "theme-ui";
import { Box, Flex, Button } from "rebass";
import Link from "./link";

const Nav = props => {
  const [colorMode, setColorMode] = useColorMode();

  return (
    <Box as="nav" {...props}>
      <Flex
        pl={0}
        ml={0}
        mb={0}
        as="ul"
        sx={{
          listStyle: "none",
          "li:not(:first-of-type) a, li:not(:first-of-type) button": {
            "margin-left": "1rem"
          },
          a: {
            textDecoration: "none",
            textTransform: "uppercase",
            fontSize: 1,
            fontWeight: "bold",
            letterSpacing: 1
          },
          "a:hover": {
            textDecoration: "underline"
          }
        }}
      >
        <li>
          <Link href="/about">About</Link>
        </li>

        <li>
          <Link href="/blog">Blog</Link>
        </li>

        <li>
          <Button
            display="flex"
            alignItems="center"
            justifyContent="center"
            backgroundColor="transparent"
            color="primary"
            fontSize={1}
            p={1}
            onClick={e => {
              setColorMode(colorMode === "light" ? "dark" : "light");
            }}
          >
            {colorMode === "light" ? <Moon /> : <Sun />}
          </Button>
        </li>
      </Flex>
    </Box>
  );
};

export default Nav;
