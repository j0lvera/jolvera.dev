import { useState } from "react";
import { withRouter } from "next/router";
import { Flex, Box, Button } from "rebass";
import { Input, Label, Textarea, Checkbox } from "@rebass/forms";
import Layout from "../components/layouts/default";

const Share = ({ router }) => {
  const [note, setNote] = useState({
    title: "",
    url: "",
    body: "",
    via: "",
    twitter: ""
  });

  return (
    <Layout pageTitle="Home" path={router.pathname}>
      <Box as="form" onSubmit={e => e.preventDefault()} p={4}>
        <Flex>
          <Box width={1 / 2} p={2}>
            <Label htmlFor="title">Title</Label>
            <Input id="title" name="title" type="text" required />
          </Box>

          <Box width={1 / 2} p={2}>
            <Label htmlFor="url">URL</Label>
            <Input id="url" name="url" type="text" required />
          </Box>
        </Flex>

        <Box p={2}>
          <Label htmlFor="body">Note Body</Label>
          <Textarea id="body" name="body" required />
        </Box>

        <Flex justifyContent="center" alignItems="center">
          <Box width={1 / 2} px={2}>
            <Label htmlFor="via">Via</Label>
            <Input id="via" name="via" type="text" required />
          </Box>

          <Box width={1 / 2} p={2}>
            <Label>
              <Checkbox id="twitter" name="twitter" />
              Syndicate to Twitter
            </Label>
          </Box>
        </Flex>
        <Box px={2} py={3}>
          <Button>Publish Note</Button>
        </Box>
      </Box>
    </Layout>
  );
};

export default withRouter(Share);
