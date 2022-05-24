import express from "express";

const app = express();

app.use(express.json());

app.listen(3000, () => console.log("🚀 Server is runing on PORT 3000"));
