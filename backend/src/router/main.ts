import express from "express";
import Controllers from "../controller/controllers";

const router = express.Router();

router.get("/post", (req, res) => {
  const ret = Controllers.postController.getPost();
  res.send(JSON.stringify({ data: ret }));
});

export default router;
