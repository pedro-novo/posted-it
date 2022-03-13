import { PostsType, PostType } from "../src/types";

type FilterCurrentPostType = (
   posts: PostsType,
   id: string
) => PostType | undefined;

export const filterCurrentPost: FilterCurrentPostType = (posts, id) => {
   return posts.find((post) => post.id == id);
};
