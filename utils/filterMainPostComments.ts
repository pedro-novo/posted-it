import { IComment, PostCommentsType } from "../src/types";

type filterMainCommentsType = (comments: PostCommentsType) => PostCommentsType;

export const filterMainComments: filterMainCommentsType = (comments) => {
   let commentWithoutParentID = comments?.filter(
      (comment) => !comment.parentID
   );
   return commentWithoutParentID as PostCommentsType;
};
