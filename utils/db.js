// @ts-check
import { promisify } from "util";
import redis from "redis";

const redisClient = redis.createClient(`redis://${process.env.REDIS_URL}`);
redisClient.auth(process.env.REDIS_PASS);

redisClient.on("error", err => {
  console.log("Something went wrong with Redis", err);
});

const hmsetAsync = promisify(redisClient.hmset).bind(redisClient);
const hexistsAsync = promisify(redisClient.hexists).bind(redisClient);
const hincrbyAsync = promisify(redisClient.hincrby).bind(redisClient);

export { redisClient, hmsetAsync, hexistsAsync, hincrbyAsync };
