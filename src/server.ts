import "dotenv/config";
import express from "express";
import cors from "cors";
import { router } from "./router";

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: ["https://tag-memory-test.vercel.app"],
    optionsSuccessStatus: 200,
  })
);

app.all("*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.use(router);

app.listen(process.env.PORT || 3333, () =>
  console.log(`🚀 Server is runing on PORT ${process.env.PORT}`)
);
