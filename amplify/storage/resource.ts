import { defineStorage } from "@aws-amplify/backend";
import { returnBucketName } from "../functions/returnBucketName/resource";

export const storage = defineStorage({
  name: "takagen-amplify-v6-export-test-fdshjk",
  access: (allow) => ({
    "files/*": [
      allow.resource(returnBucketName).to(["read", "write", "delete"]),
    ],
  }),
});
