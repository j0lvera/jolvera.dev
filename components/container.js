import { Box } from "rebass";

const Container = ({ children }) => (
  <Box maxWidth="42em" mx="auto" px={4}>
    {children}
  </Box>
);

export default Container;
