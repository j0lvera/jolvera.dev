import { Box } from "rebass";

const Container = ({ children }) => (
  <Box maxWidth="40em" mx="auto" px={4}>
    {children}
  </Box>
);

export default Container;
