// @ts-check
// import crypto from "crypto";
// import requestIp from "request-ip";
import { NowRequest, NowResponse } from "@now/node";
import { hexistsAsync, hincrbyAsync, hmsetAsync } from "../../utils/db";

// /**
//  * @param {object} obj
//  * @returns {string}
//  */
// function getHash(obj) {
//   const hash = crypto.scryptSync(JSON.stringify(obj), "salt", 64);
//   return hash.toString("hex");
// }
// const user = getHash({
//   salt: "salt",
//   ip: requestIp.getClientIp(req)
// });

/**
 * @param {NowRequest} req
 * @param {NowResponse} res
 * @returns {Promise}
 */
module.exports = async (req, res) => {
  try {
    const { pathname, referrer } = req.body;
    const id = `page:${pathname}`;
    const refId = "referrer";

    const visited = await hexistsAsync(id, "views");

    if (referrer) {
      const refExists = await hexistsAsync(refId, referrer);
      if (refExists) {
        await hincrbyAsync(refId, referrer, 1);
      } else {
        await hmsetAsync(refId, referrer, 1);
      }
    }

    if (visited) {
      const views = await hincrbyAsync(id, "views", 1);
      return res.json({ message: "OK", views, page: pathname, referrer });
    } else {
      await hmsetAsync(id, "views", 1);
      return res.json({ message: "OK", views: 1 });
    }
  } catch (err) {
    console.log("Error trying to save a page view", err);
    return res
      .status(500)
      .json({ message: "Something went wrong trying to save a page view." });
  }
};
