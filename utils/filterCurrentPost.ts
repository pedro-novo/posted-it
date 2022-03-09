import { PostsType } from "../components/context/PostContext";

export const filterCurrentPost = (
   posts: PostsType,
   id: string | string[] | undefined
) => {
   return posts.find((post) => post.id == id);
};
