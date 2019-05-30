/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import hdate from "human-date";
import { Flex, Text, Link, Box } from "@rebass/emotion";
import { withTheme } from "emotion-theming";

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

export default withTheme(WebMention);
