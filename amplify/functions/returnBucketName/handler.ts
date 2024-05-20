import { Context } from "aws-lambda";
import { env } from "$amplify/env/returnBucketName";

export const handler = async (event, context: Context) => {
  return `Your bucket name is ${env.TAKAGEN_AMPLIFY_V_6_EXPORT_TEST_FDSHJK_BUCKET_NAME}`;
};
