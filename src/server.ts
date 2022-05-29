import "dotenv/config";
import express from "express";
import cors from "cors";
import { router } from "./router";

const app = express();

app.use(
  cors({
    origin: ["https://tag-memory-test.vercel.app/"],
  })
);
app.use(express.json());

app.use(router);

app.listen(process.env.PORT || 3333, () =>
  console.log(`🚀 Server is runing on PORT ${process.env.PORT}`)
);
