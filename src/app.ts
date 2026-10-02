import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import { env } from "./config/env.js";
// error handling middleware
import {
  globalErrorHandler,
  notFound,
} from "./middlewares/error.middleware.js";

const app = express();

// CORS configuration
app.use(
  cors({
    origin: env.FRONTEND_URL,
    credentials: true,
  }),
);
// middlewares
app.use(express.json()); // body parsing middleware
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies
app.use(cookieParser()); // Parse Cookie header and populate req.cookies

// error handling middleware
app.use(notFound);
app.use(globalErrorHandler);

export default app;
