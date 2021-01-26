import path from "path";
import express from "express";

import apiRouter from "./router/main";

// Setup business logic
import Controllers from "./controller/controllers";
import { PostController } from "./controller/postController";

Controllers.postController = new PostController();

const app = express();
const publicPath = path.join(__dirname, "..", "/build");
const port = process.env.PORT || 8080;
app.use(express.static(publicPath));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

app.use("/api/", apiRouter);

app.listen(port, () => {
  console.log(`Server is up on port ${port}!`);
});
