/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import {
  FaBookmark,
  FaHeart,
  FaRetweet,
  FaTwitter,
  FaReply
} from "react-icons/fa";
import styled from "@emotion/styled";
import dashify from "dashify";
import hdate from "human-date";
import { Flex, Text, Link, Box } from "@rebass/emotion";
import { withTheme } from "emotion-theming";

const LinkPlain = styled(Link)`
  display: flex;
  text-decoration: none;
`;

const Twitter = ({ url }) => (
  <LinkPlain href={url}>
    <FaTwitter
      css={css`
        color: #1da1f2;
        margin-right: 0.3em;
        font-size: 1.3em;
      `}
    />
  </LinkPlain>
);

const Bookmark = ({ url }) => (
  <LinkPlain href={url}>
    <FaBookmark
      css={css`
        font-size: 1.3em;
        color: #8e44ad;
      `}
    />
  </LinkPlain>
);

const Like = ({ url }) => (
  <LinkPlain href={url}>
    <FaHeart
      css={css`
        margin-right: 0.3em;
        font-size: 1.3em;
        color: rgb(224, 36, 94);
      `}
    />
  </LinkPlain>
);

const Retweet = ({ url }) => (
  <LinkPlain href={url}>
    <FaRetweet
      css={css`
        color: rgb(23, 191, 99);
        font-size: 1.5em;
      `}
    />
  </LinkPlain>
);

const Reply = ({ url }) => (
  <LinkPlain href={url}>
    <FaReply
      css={css`
        color: rgb(27, 149, 224);
        font-size: 1.3em;
      `}
    />
  </LinkPlain>
);

function WebMention({ webmention, theme }) {
  const { author, content, published, url } = webmention;

  const { hostname, protocol } = new URL(url);
  const authorWebsite = `${protocol}//${hostname}`;

  // If a picture is not present, use http://avatars.adorable.io/ as fallback.
  // Also, don't use `u-photo` if we use the placeholder
  const authorPhoto = author.photo
    ? author.photo
    : `https://api.adorable.io/avatars/285/${dashify(author.name)}`;

  const fromTwitter = author.url.includes("twitter");
  const isTwitterReply = fromTwitter && webmention["in-reply-to"];
  const isTwitterLike = fromTwitter && webmention["like-of"];
  const isReply = webmention["in-reply-to"];
  const isRetweet = webmention["repost-of"];
  const isBookmark = webmention["bookmark-of"];

  return (
    <Flex as="li" mb={4} className="h-card">
      <Link
        href={author.url}
        mr={2}
        target="blank"
        rel="noopener noreferrer"
        color={theme.link}
      >
        <img
          className={author.photo ? "u-photo" : ""}
          src={authorPhoto}
          alt={author.name}
          css={css`
            width: 48px;
            height: auto;
            border-radius: 50%;
          `}
        />
      </Link>
      <Box>
        <Flex alignItems="center">
          <LinkPlain
            className="u-url"
            href={author.url}
            rel="noopener noreferrer"
            mr={2}
            color={theme.color}
          >
            <strong className="p-name">{author.name}</strong>
          </LinkPlain>

          {!isRetweet && !authorWebsite.includes("twitter") ? (
            <LinkPlain href={authorWebsite} mr={2} color="#aaa">
              {hostname}
            </LinkPlain>
          ) : (
            <Twitter url={author.url} />
          )}

          {isTwitterLike && <Like url={url} />}
          {isRetweet && <Retweet url={url} />}
          {isTwitterReply && <Reply url={url} />}
          {isBookmark && <Bookmark url={url} />}
        </Flex>
        <LinkPlain href={url} rel="noopener noreferrer" color="#aaa">
          <Text as="time" className="dt-published" dateTime={published}>
            {hdate.prettyPrint(published)}
          </Text>
        </LinkPlain>
        {content && (
          <Box className="p-content" mt={3}>
            {content.html ? (
              <div dangerouslySetInnerHTML={{ __html: content.html }} />
            ) : (
              content.text
            )}
          </Box>
        )}
      </Box>
    </Flex>
  );
}

export default withTheme(WebMention);
