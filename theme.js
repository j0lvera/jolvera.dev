import merge from "deepmerge";
import { toTheme } from "@theme-ui/typography";
import wp2016 from "typography-theme-wordpress-2016";
import githubTheme from "typography-theme-github";
import { deep } from "@theme-ui/presets";
import nightOwl from "@theme-ui/prism/presets/vs-dark.json";

const theme = merge(toTheme(wp2016), {
  ...deep,
  styles: {
    ...deep.styles,
    root: {
      pre: {
        padding: 2,
        fontSize: 0,
        overflowX: "auto",
        borderLeft: "4px solid #333",
        ...nightOwl,
        ".mdx-marker": {
          backgroundColor: "rgba(255,255,255,0.1)",
          display: "block",
          marginLeft: "-1em",
          marginRight: "-.9em",
          paddingRight: "1em",
          paddingLeft: "1em",
          borderLeft: `.25em solid ${nightOwl[".punctuation"].color}`
        }
      },
      code: {
        fontFamily: "monospace"
      }
    }
  }
});

export default theme;
