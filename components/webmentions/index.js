// https://mxb.dev/blog/using-webmentions-on-static-sites/#webmentions
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { withTheme } from "emotion-theming";
import React from "react";
import hdate from "human-date";
import { Box, Link, Text, Flex } from "@rebass/emotion";
import { sortWebMentions } from "./utils";
import { siteMeta } from "../../blog.config";

function WebMention({ webmention, theme }) {
  return (
    <Flex as="li" mb={4} className="h-card">
      <Link
        href={webmention.author.url}
        mr={2}
        target="blank"
        rel="noopener noreferrer"
      >
        <img
          className="u-photo"
          src={webmention.author.photo}
          alt={webmention.author.name}
          css={css`
            width: 48px;
            height: auto;
            border-radius: 50%;
          `}
        />
      </Link>
      <Box>
        <Link
          className="u-url"
          href={webmention.author.url}
          target="_blank"
          rel="noopener noreferrer"
          mr={2}
          color={theme.color}
          css={css`
            text-decoration: none;
          `}
        >
          <strong className="p-name">{webmention.author.name}</strong>
        </Link>
        <Text
          as="time"
          className="dt-published"
          dateTime={webmention.published}
          color="#aaa"
        >
          {hdate.prettyPrint(webmention.published)}
        </Text>
        {webmention.content && (
          <Box className="p-content" mt={2}>
            {webmention.content.html ? (
              <div
                dangerouslySetInnerHTML={{ __html: webmention.content.html }}
              />
            ) : (
              webmention.content.text
            )}
          </Box>
        )}
      </Box>
    </Flex>
  );
}

function WebMentions({ webmentions, url, theme }) {
  console.log("url:", url);
  console.log("webmentions:", webmentions);
  const sorted = sortWebMentions(webmentions, `${siteMeta.siteUrl}${url}`);
  console.log("sorted webmentions:", sorted);
  return (
    <>
      <Text as="h2" fontSize={4} mb={4}>
        Webmentions
      </Text>

      <ul
        css={css`
          margin-left: 0;
          padding-left: 0;
          list-style: none;
        `}
      >
        {webmentions.map(webmention => (
          <WebMention
            key={webmention["wm-id"]}
            webmention={webmention}
            theme={theme}
          />
        ))}
      </ul>
    </>
  );
}

export default withTheme(WebMentions);
