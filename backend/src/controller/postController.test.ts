import { PostController } from "./postController";

describe("PostController()", () => {
  it("should return some post", () => {
    // Testing a boolean
    const postController = new PostController();
    expect(postController.getPost().title).toEqual("Some Title");
  });
});
