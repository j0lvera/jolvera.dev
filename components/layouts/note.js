import Link from "../link";
import { Box, Flex, Image } from "rebass";
import { siteMeta } from "../../blog.config";
import Layout from "./default";
import PublishedAt from "../utils/published-at";

function Note({ path, meta, children }) {
  return (
    <Layout pageTitle={meta.title} ogImage={meta.image}>
      <Flex
        as="article"
        className="h-entry"
        bg="primary"
        color="background"
        flexDirection="column"
        sx={{
          borderRadius: 2
        }}
      >
        <Flex p={3}>
          <Image
            src="/static/avatar.png"
            alt="Juan Olvera's Avatar"
            width="3em"
            height="3em"
            sx={{
              borderRadius: 1
            }}
          />
          <Box ml={3}>
            <Flex>
              <Link
                href="/about"
                rel="author"
                className="p-author h-card"
                mr={3}
              >
                {siteMeta.author}
              </Link>

              <PublishedAt date={meta.publishedAt} link={path} mr={3} />
            </Flex>

            <Box className="p-name p-content">{children}</Box>
          </Box>
        </Flex>

        <Box
          as="footer"
          bg="secondary"
          p={3}
          sx={{ borderBottomLeftRadius: 2, borderBottomRightRadius: 2 }}
        >
          Like, RT, Comment
        </Box>
      </Flex>
    </Layout>
  );
}

export default Note;
