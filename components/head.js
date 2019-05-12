import React from "react";
import NextHead from "next/head";
import { string } from "prop-types";
import { siteMeta } from "../blog.config";

const defaultDescription = siteMeta.description;
const defaultOGURL = siteMeta.siteUrl;
const defaultOGImage = siteMeta.image;

const Head = props => (
  <NextHead>
    <meta charSet="UTF-8" />
    <title>
      {props.title ? `${props.title} - ${siteMeta.title}` : siteMeta.title}
    </title>
    <meta
      name="description"
      content={props.description || defaultDescription}
    />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" sizes="192x192" href="/static/touch-icon.png" />
    <link rel="apple-touch-icon" href="/static/touch-icon.png" />
    <link rel="mask-icon" href="/static/favicon-mask.svg" color="#49B882" />
    <link rel="icon" href="/static/favicon.ico" />

    <link
      rel="alternate"
      title="RSS Feed"
      type="application/json"
      href={`${siteMeta.siteUrl}/feed.json`}
    />

    <link
      href="https://fonts.googleapis.com/css?family=Montserrat:400,400i,500,500i,600,600i,700,700i,800,800i,900,900i"
      rel="stylesheet"
    />

    <meta property="og:url" content={props.url || defaultOGURL} />
    <meta property="og:title" content={props.title || ""} />
    <meta
      property="og:description"
      content={props.description || defaultDescription}
    />
    <meta name="twitter:site" content={props.url || defaultOGURL} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta
      name="twitter:image"
      content={`${siteMeta.siteUrl}${props.ogImage || defaultOGImage}`}
    />
    <meta
      property="og:image"
      content={`${siteMeta.siteUrl}${props.ogImage || defaultOGImage}`}
    />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
  </NextHead>
);

Head.propTypes = {
  title: string,
  description: string,
  url: string,
  ogImage: string
};

export default Head;
