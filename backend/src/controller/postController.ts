import { Post } from "../model/post";

export class PostController {
  getPost = (): Post => {
    return {
      title: "Some Title",
      text: "Some text",
      image:
        "https://d.newsweek.com/en/full/822411/pikachu-640x360-pokemon-anime.webp?w=737&f=66ec2b8bdbaa3255c91911a8a1271e26"
    };
  };
}
