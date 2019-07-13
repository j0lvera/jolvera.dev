/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { withTheme } from "emotion-theming";
import { withRouter } from "next/router";
import fetch from "isomorphic-unfetch";
import { Link, Flex, Box, Text } from "@rebass/emotion";
import { siteMeta } from "../blog.config";
import Layout from "../components/layouts/default";

const Commit = ({ theme, commit }) => {
  return (
    <Box p={2} bg="rgba(0,0,0,0.1)" mb={3}>
      <Link color={theme.color} mb={0} href={commit.url}>
        commit {commit.sha}
      </Link>

      <Text as="p">
        Author:{" "}
        {commit.authorUrl ? (
          <Link color={theme.color} href={commit.authorUrl}>
            {commit.author}
          </Link>
        ) : (
          <span>{commit.author}</span>
        )}
      </Text>

      <Text as="p">{commit.message}</Text>
    </Box>
  );
};

const Home = ({ router, theme, commits }) => {
  return (
    <Layout pageTitle="Home" path={router.pathname}>
      <Flex
        className="h-card"
        flexDirection={["column", "row"]}
        alignItems="center"
        justifyContent="center"
        py={4}
        my={4}
      >
        <Box
          className="u-photo"
          as="img"
          src="/static/_jolvera.png"
          alt={siteMeta.author}
          mb={[4, 0]}
        />

        <Box ml={3}>
          <Text as="h2" mb={3} mt={0}>
            Hi, I'm{" "}
            <Text
              as="a"
              className="u-url p-name"
              href={siteMeta.siteUrl}
              rel="me"
              color={theme.color}
              css={css`
                text-decoration: none;
              `}
            >
              Juan Olvera
            </Text>
          </Text>
          <Text className="p-note" as="p" fontSize={3}>
            I'm a frontend developer &amp; web standards enthusiastic.
          </Text>

          <Text as="p" fontSize={3} fontWeight="bold" mb={0}>
            I build inclusive, fast and responsive web experiences.
          </Text>
        </Box>
      </Flex>

      <Box
        css={css`
          font-family: monospace;
        `}
      >
        {commits.map((commit, index) => (
          <Commit key={index} commit={commit} theme={theme} />
        ))}
      </Box>
    </Layout>
  );
};

Home.getInitialProps = async ctx => {
  try {
    const response = await fetch(
      "https://api.github.com/repos/j0lv3r4/jolvera.dev/commits",
      {
        widthCredentials: true,
        headers: {
          Authentication: `Bearer: ${process.env.GITHUB_TOKEN}`
        }
      }
    );

    const arr = await response.json();
    const commits = arr.map(({ commit, author, sha, html_url }) => {
      return {
        author: commit.author.name,
        authorUrl: (author && author.html_url) || null,
        url: html_url,
        sha: sha,

        message: commit.message
      };
    });

    // console.log("arr", arr);
    // console.log("commits", commits);

    return {
      commits
    };
  } catch (err) {
    console.log("err", err);
    return {};
  }
};

export default withTheme(withRouter(Home));
