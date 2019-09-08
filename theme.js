export default {
  useCustomProperties: true,
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body:
      '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
    heading: "inherit",
    monospace: "Menlo, monospace"
  },
  fontSizes: [14, 16, 18, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125
  },
  colors: {
    text: "#dddddd",
    background: "#16191f",
    primary: "#ffdc00",
    link: "primay",
    secondary: "#30c",
    muted: "#f6f6f6",
    gray: "rgb(170, 170, 170)",
    black: "#111",
    lightDark: "rgb(43, 43, 43)",
    twitter: "#1da1f2",
    bookmark: "#8e44ad",
    like: "rgb(224, 36, 94)",
    retweet: "rgb(23, 191, 99)",
    reply: "rgb(27, 149, 224)",
    modes: {
      light: {
        text: "#000",
        background: "#fff",
        primary: "#07c",
        secondary: "#30c",
        muted: "#f6f6f9",
        gray: "#555",
        highlight: "hsla(205, 100%, 40%, 0.125)",
        black: "#111",
        lightDark: "#ccc",
        twitter: "#1da1f2",
        bookmark: "#8e44ad",
        like: "rgb(224, 36, 94)",
        retweet: "rgb(23, 191, 99)",
        reply: "rgb(27, 149, 224)"
      }
    }
  },
  variants: {
    link: {
      color: "primary"
    },
    webmentionsDark: {
      background: "black"
    },
    webmentionsLight: {
      background: "background"
    }
  },
  buttons: {
    primary: {
      fontSize: 2,
      fontWeight: "bold",
      color: "background",
      bg: "primary",
      borderRadius: "default"
    },
    outline: {
      variant: "buttons.primary",
      color: "primary",
      bg: "transparent",
      boxShadow: "inset 0 0 2px"
    },
    secondary: {
      variant: "buttons.primary",
      color: "background",
      bg: "secondary"
    }
  },
  styles: {
    root: {
      fontSize: 2,
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body"
    },
    h1: {
      fontFamily: "heading",
      lineHeight: "1.2",
      fontWeight: "heading",
      fontSize: 5
    },
    h2: {
      fontFamily: "heading",
      lineHeight: "1.2",
      fontWeight: "heading",
      fontSize: 4
    },
    h3: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "1.2",
      fontWeight: "heading",
      fontSize: 3
    },
    h4: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "1.2",
      fontWeight: "heading",
      fontSize: 2
    },
    h5: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "1.2",
      fontWeight: "heading",
      fontSize: 1
    },
    h6: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "1.2",
      fontWeight: "heading",
      fontSize: 0
    },
    p: {
      color: "text",
      fontFamily: "body",
      fontWeight: "body",
      lineHeight: "body",
      code: {
        bg: "lightDark"
      }
    },
    li: {
      a: {
        color: "primary"
      }
    },
    a: {
      color: "primary"
    },
    pre: {
      fontFamily: "monospace",
      overflowX: "auto",
      code: {
        color: "inherit"
      },
      background: "background"
    },
    code: {
      fontFamily: "monospace",
      fontSize: "inherit"
    },
    table: {
      width: "100%",
      borderCollapse: "separate",
      borderSpacing: 0
    },
    th: {
      textAlign: "left",
      borderBottomStyle: "solid"
    },
    td: {
      textAlign: "left",
      borderBottomStyle: "solid"
    },
    img: {
      maxWidth: "100%"
    }
  }
};
