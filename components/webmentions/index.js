// https://mxb.dev/blog/using-webmentions-on-static-sites/#webmentions
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { withTheme } from "emotion-theming";
import React, { useState, useEffect } from "react";
import { Button, Text, Box } from "@rebass/emotion";
import { getWebMentions, sortWebMentions } from "./utils";
import WebMention from "./webmention";
import { siteMeta } from "../../blog.config";
import Link from "next/link";

function WebMentions({ url, theme }) {
  const [webmentionsArr, setWebmentionsArr] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const { children } = await getWebMentions();
        setWebmentionsArr(children);
      } catch (error) {
        console.error("Error when trying to get webmentions:", error);
        setWebmentionsArr([]);
      }
    };
    getData();
  }, []);

  const postUrl = `${siteMeta.siteUrl}${url}`;
  const sorted = sortWebMentions(webmentionsArr, `${postUrl}`);

  console.log("webmentions:", webmentionsArr);
  console.log("sorted:", sorted);

  const Instructions = () => (
    <Box as="li" mb={sorted.length > 0 ? 4 : 0}>
      <Text as="p">
        Tweets with a link to this post appear as{" "}
        <a href="https://indieweb.org/Webmention" target="_blank">
          Webmentions.
        </a>
      </Text>

      <Button
        as="a"
        href={`https://twitter.com/intent/tweet/?text=My reply for ${
          siteMeta.siteUrl
        }${url}/`}
        target="_blank"
        bg={theme.link}
        color={theme.backgroundColor}
      >
        Leave a comment
      </Button>
    </Box>
  );

  return (
    <div
      css={css`
        padding: 1em;
        margin-top: 2em;
        background-color: #111;
        font-size: 16px;
      `}
    >
      <Text as="h2" fontSize={4} mb={3} mt={0}>
        Webmentions
      </Text>

      <ul
        css={css`
          margin-left: 0;
          padding-left: 0;
          list-style: none;
        `}
      >
        <Instructions />
        {sorted.map(webmention => (
          <WebMention key={webmention["wm-id"]} webmention={webmention} />
        ))}
      </ul>
    </div>
  );
}

export default withTheme(WebMentions);
