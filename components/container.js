import { Box } from "@rebass/emotion";

const Container = ({ children }) => (
  <Box width={2 / 5} mx="auto">
    {children}
  </Box>
);

export default Container;
