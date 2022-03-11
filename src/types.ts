import { FieldValue } from "firebase/firestore";

export interface IComment {
   id?: string;
   text?: string;
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
   comments?: PostCommentsType[];
   createdAt: FieldValue;
};

export type CommentType = {
   id: string;
   text: string;
   parentID?: string;
};
