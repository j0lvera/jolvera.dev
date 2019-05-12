/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { Box } from "@rebass/emotion";

const Container = ({ children }) => (
  <Box
    css={css`
      max-width: 45rem;
    `}
    mx="auto"
    px={4}
  >
    {children}
  </Box>
);

export default Container;
