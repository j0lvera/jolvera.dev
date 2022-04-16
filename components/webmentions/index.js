// https://mxb.dev/blog/using-webmentions-on-static-sites/#webmentions
import React, { useState, useEffect } from "react";
import { getWebMentions, sortWebMentions } from "./utils";
import WebMention from "./webmention";
import Link from "../link";
import { siteMeta } from "../../blog.config";

function WebMentions({ url }) {
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

  const Instructions = props => (
    <div {...props}>
      <p>
        Tweets with a link to this post appear as{" "}
        <Link href="https://indieweb.org/Webmention" target="_blank">
          Webmentions.
        </Link>
      </p>

      <a
        href={`https://twitter.com/intent/tweet/?text=My reply for ${siteMeta.siteUrl}${url}/`}
        target="_blank"
      >
        Leave a comment
      </a>
    </div>
  );

  return (
    <div>
      <h2>Webmentions</h2>

      <Instructions mt={4} mb={1} />

      <ul>
        {sorted.map(webmention => (
          <WebMention key={webmention["wm-id"]} webmention={webmention} />
        ))}
      </ul>
    </div>
  );
}

export default WebMentions;
