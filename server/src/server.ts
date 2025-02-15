import "./lib/checks";
import "dotenv/config";
import express, { Application, Response } from "express";
import path from "path";

import csurf from "csurf";
import { Server } from "socket.io";
import Logger from "./lib/Logger";
import api from "./api";
import monitoringApi from "./monitoring-api";
import config from "./lib/config";

const app: Application = express();
const port = config.port;
const server = app.listen(port, () => {
  if (config.password.length === 0) {
    Logger.warn(
      "WARNING",
      "DB_PASSWORD is missing! Did you forget to set up .env file or config.ts?",
    );
  }

  if (config.jwtSecret.length === 0) {
    Logger.warn(
      "WARNING",
      "JWT_SECRET is missing! Did you forget to set up .env file or config.ts?",
    );
  }

  Logger.log("APP", `CAD IS RUNNING ON ${port}`);
});

const io = new Server(server, {
  cors: {
    origin: process.env.IS_DEV === "true" ? process.env.CLIENT_URL : "same-site",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  },
  cookie: {
    httpOnly: true,
  },
});
const protection = csurf({ cookie: true });
app.use("/api/v1", api, protection);
app.use(monitoringApi);

app.use("/static", express.static("public"));
app.use(express.static(path.join(__dirname, "../../client/build")));
app.get("/*", (_, res: Response) => {
  res.sendFile(path.join(__dirname, "../../client/build", "index.html"));
});

export { io };

import("./lib/socket");

process.on("uncaughtException", (error) => {
  const stack = error?.stack || `${error}`;

  Logger.error("UNCAUGHT_ERROR", stack);
});

process.on("unhandledRejection", (error) => Logger.error("unhandledRejection", `${error}`));

process.on("uncaughtExceptionMonitor", (error) => {
  const stack = error?.stack || `${error}`;

  Logger.error("uncaughtExceptionMonitor", stack);
});
