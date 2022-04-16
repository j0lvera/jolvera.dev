import { FaTwitter } from "react-icons/fa";
import dashify from "dashify";
import hdate from "human-date";
import Link from "../link";

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
    <li
      className="h-card"
      style={{
        display: "grid",
        gridTemplateColumns: "3em auto"
      }}
    >
      <Link href={author.url} mr={2} target="blank" rel="noopener noreferrer">
        <img
          className={author.photo ? "u-photo" : ""}
          src={authorPhoto}
          alt={author.name}
          height="auto"
          style={{
            maxWidth: "45px",
            borderRadius: "50%"
          }}
        />
      </Link>
      <div>
        <div style={{ display: "flex", alignItems: "center" }}>
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
            <time className="dt-published" dateTime={published}>
              {hdate.prettyPrint(published)}
            </time>
          </Link>
        </div>
        {content && (
          <div className="p-content">
            {content.html ? (
              <div dangerouslySetInnerHTML={{ __html: content.html }} />
            ) : (
              content.text
            )}
          </div>
        )}
      </div>
    </li>
  );
}

export default WebMention;
