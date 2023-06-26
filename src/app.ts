import express, { Express } from "express";
import cors from "cors";
import { connectDb, disconnectDB } from "./config/database";
import { loadEnv } from "./config/envs"

loadEnv();

import { handleApplicationErrors } from './middlewares/errMiddleware';
import { itemsRoute } from "./routes/itemsRoute";

const app = express();
app
    .use(cors())
    .use(express.json())
    .use("/items", itemsRoute)
    .use(handleApplicationErrors);

export function init(): Promise<Express> {
    connectDb();
    return Promise.resolve(app);
}

export async function close(): Promise<void> {
    await disconnectDB();
}

export default app;