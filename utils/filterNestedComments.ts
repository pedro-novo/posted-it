import { PostCommentsType } from "../src/types";

type FilterCurrentPostType = (comments: PostCommentsType) => PostCommentsType;

export const filterNestedComments: FilterCurrentPostType = (comments) => {
   let commentWithParentID = comments?.filter((comment) => comment.parentID);
   return commentWithParentID;
};
