import { argv, env, exit } from "process";
import { readFileSync } from "fs";

import * as azdev from "azure-devops-node-api";

const args = argv.slice(2);
const fileNameArg = args[0];

if (!fileNameArg) {
  console.log("No file provided.");
  exit(1);
}

type WorkItem = {title: string, description: string, type: string, children: WorkItem[]};
