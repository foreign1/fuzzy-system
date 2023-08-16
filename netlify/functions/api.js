import express from "express";
import serverless from "serverless-http";
import router from "../../src/routes/route";

const api = express();

api.use("/api/v1/", router);

export const handler = serverless(api);