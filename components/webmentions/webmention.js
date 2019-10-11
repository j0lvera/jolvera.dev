import { FaTwitter } from "react-icons/fa";
import dashify from "dashify";
import hdate from "human-date";
import Link from "../link";
import { Flex, Text, Box, Image } from "rebass";

const Twitter = props => (
  <Link {...props} href={props.url} color="twitter">
    <FaTwitter />
  </Link>
);

function WebMention({ webmention }) {
  const { author, content, published, url } = webmention;

  // If a picture is not present, use http://avatars.adorable.io/ as fallback.
  // Also, don't use `u-photo` if we use the placeholder
  const authorPhoto = author.photo
    ? author.photo
    : `https://api.adorable.io/avatars/285/${dashify(author.name)}`;

  return (
    <Box
      as="li"
      my={4}
      className="h-card"
      sx={{
        display: "grid",
        gridTemplateColumns: "3em auto"
      }}
    >
      <Link href={author.url} mr={2} target="blank" rel="noopener noreferrer">
        <Image
          className={author.photo ? "u-photo" : ""}
          src={authorPhoto}
          alt={author.name}
          height="auto"
          sx={{
            maxWidth: "45px",
            borderRadius: "50%"
          }}
        />
      </Link>
      <Box>
        <Flex alignItems="center">
          <Link
            className="u-url"
            href={author.url}
            rel="noopener noreferrer"
            mr={2}
            color="text"
            sx={{
              textDecoration: "none"
            }}
          >
            <strong className="p-name">{author.name}</strong>
          </Link>

          <Link
            href={url}
            rel="noopener noreferrer"
            color="text"
            sx={{
              textDecoration: "none"
            }}
          >
            <Text
              as="time"
              className="dt-published"
              dateTime={published}
              fontSize={0}
            >
              {hdate.prettyPrint(published)}
            </Text>
          </Link>
        </Flex>
        {content && (
          <Box className="p-content" mt={0} sx={{ a: { color: "primary" } }}>
            {content.html ? (
              <div dangerouslySetInnerHTML={{ __html: content.html }} />
            ) : (
              content.text
            )}
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default WebMention;
