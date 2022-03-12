import { PostsType, PostType, PostCommentsType } from "../src/types";

type grabCommentsFromPostID = (
   posts: PostsType,
   postID: string
) => PostCommentsType;

export const grabCommentsFromPostID: grabCommentsFromPostID = (
   posts,
   postID
) => {
   let currentPostComments = posts.filter((post) => post.id === postID);
   return currentPostComments[0]?.comments;
};
