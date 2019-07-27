// @ts-check
import fetch from "isomorphic-unfetch";
import { NowRequest, NowResponse } from "@now/node";

const API_URL = "https://webmention.io/api/mentions.jf2";

/**
 * @param {NowRequest} req
 * @param {NowResponse} res
 */
module.exports = async (req, res) => {
  res.setHeader("Cache-Control", "max-age=86400, s-maxage=86400");
  const url = `${API_URL}?domain=jolvera.dev&token=${
    process.env.WEBMENTION_IO_TOKEN
  }`;

  try {
    const response = await fetch(url);
    if (response.ok) {
      res.json(await response.json());
    }
  } catch (err) {
    console.error(err);
    res.status(200);
  }
};
