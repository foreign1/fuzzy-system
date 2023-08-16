import express, { Router } from "express";
import serverless from "serverless-http";

const api = express();
const router = Router();

api.use("/api/v1/", router);

router.get("/", (req, res) => {res.json({message: "hello"})})

export const handler = serverless(api);