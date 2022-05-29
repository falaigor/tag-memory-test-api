import "dotenv/config";
import express from "express";
import cors from "cors";
import { router } from "./router";

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  app.use(cors());
  next();
});

app.use(router);

app.listen(process.env.PORT || 3333, () =>
  console.log(`🚀 Server is runing on PORT ${process.env.PORT}`)
);
