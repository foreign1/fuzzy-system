import express, { Router } from "express";
import serverless from "serverless-http";
import apiRouter from "../../src/routes/route";

const api = express();
const router = Router();

api.use("/", router);

router.use("/api/v1/", apiRouter)

export const handler = serverless(api);