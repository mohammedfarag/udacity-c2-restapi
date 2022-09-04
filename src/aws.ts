import AWS = require("aws-sdk");
import { config } from "./config/config";

const c = config.dev;

//Configure AWS
if (c.aws_profile !== "DEPLOYED") {
  var credentials = new AWS.SharedIniFileCredentials({
    profile: c.aws_profile,
  });
  AWS.config.credentials = credentials;
}

export const s3 = new AWS.S3({
  signatureVersion: "v4",
  region: c.aws_region,
  params: { Bucket: c.aws_media_bucket },
});

/*
AWS S3 handler
*/
function s3Handler(key: string, operation: "getObject" | "putObject"): string {
  const signedUrlExpireSeconds = 60 * 5;

  const url = s3.getSignedUrl(operation, {
    Bucket: c.aws_media_bucket,
    Key: key,
    Expires: signedUrlExpireSeconds,
  });

  return url;
}

/* getGetSignedUrl generates an aws signed url to retreive an item
 * @Params
 *    key: string - the filename to be put into the s3 bucket
 * @Returns:
 *    a url as a string
 */
export function getGetSignedUrl(key: string): string {
  return s3Handler(key, "getObject");
}

/* getPutSignedUrl generates an aws signed url to put an item
 * @Params
 *    key: string - the filename to be retreived from s3 bucket
 * @Returns:
 *    a url as a string
 */
export function getPutSignedUrl(key: string) {
  return s3Handler(key, "putObject");
}
