import { defineBackend } from "@aws-amplify/backend";
import { storage } from "./storage/resource";
import { returnBucketName } from "./functions/returnBucketName/resource";

const backend = defineBackend({ storage, returnBucketName });

export const bucketName =
  backend.storage.resources.cfnResources.cfnBucket.bucketName;
