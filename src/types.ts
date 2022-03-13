import { FieldValue } from "firebase/firestore";

export interface IComment {
   id?: string;
   text?: string;
   parentID?: string;
}

export type PostCommentsType = IComment[];

export type PostIDType = string;

export type PostType = {
   id: string;
   title: string;
   image?: string;
   link?: string;
   text?: string;
   topics: string[];
   votes: number;
   comments: PostCommentsType;
   createdAt: FieldValue;
};

export type PostsType = PostType[];

export interface IPostProps {
   postID: string;
}

export interface IPostCommentsProps {
   postID?: string;
   comments?: PostCommentsType;
}

export interface ICommentBoxProps {
   postID: string;
   comments?: PostCommentsType;
}

export interface IndividualPostCommentProps {
   postID?: string;
   comment: IComment;
   comments?: PostCommentsType;
   commentsWithParentID: PostCommentsType;
}

export interface INestedCommentBoxProps {
   postID?: string;
   parentID?: string;
   comments?: PostCommentsType;
}
