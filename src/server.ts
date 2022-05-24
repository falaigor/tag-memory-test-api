import "dotenv/config";
import express from "express";
import cors from "cors";
import { router } from "./router";

const app = express();

app.use(express.json());
app.use(cors());

app.use(router);

app.get("/auth/github", (request, response) => {
  response.redirect(
    `https://github.com/login/oauth/authorize?scope=user&client_id=${process.env.GITHUB_API_CLIENT_ID}`
  );
});

app.get("/auth/github/callback", (request, response) => {
  const { code } = request.query;

  return response.json(code);
});

app.listen(process.env.SERVER_PORT || 4000, () =>
  console.log(`🚀 Server is runing on PORT ${process.env.SERVER_PORT}`)
);
