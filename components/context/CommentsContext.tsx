import React, {
   useState,
   useEffect,
   createContext,
   useContext,
   SetStateAction,
} from "react";
import { PostCommentsType } from "../../src/types";
import { usePostContext } from "./PostContext";
import { grabCommentsFromPostID } from "../../utils/grabCommentsFromPostID";
import { filterNestedComments } from "../../utils/filterNestedComments";

interface CommentContextProviderProps {
   children: JSX.Element;
}

interface ICommentContext {
   postID: string;
   postIDSet: React.Dispatch<SetStateAction<string>>;
   comments: PostCommentsType;
   commentsSet: React.Dispatch<SetStateAction<PostCommentsType>>;
   nestedComments: PostCommentsType;
   nestedCommentsSet: React.Dispatch<SetStateAction<PostCommentsType>>;
}

export const CommentContext = createContext<ICommentContext>({
   postID: "",
   postIDSet: () => undefined,
   comments: [],
   commentsSet: () => undefined,
   nestedComments: [],
   nestedCommentsSet: () => undefined,
});

export const CommentsContextProvider = ({
   children,
}: CommentContextProviderProps) => {
   const { posts } = usePostContext();
   const [postID, postIDSet] = useState("");
   const [comments, commentsSet] = useState<PostCommentsType>([]);
   const [nestedComments, nestedCommentsSet] = useState<PostCommentsType>([]);

   useEffect(() => {
      commentsSet(grabCommentsFromPostID(posts, postID));
      nestedCommentsSet(filterNestedComments(comments));
   }, [postID, comments]);

   return (
      <CommentContext.Provider
         value={{
            postID,
            postIDSet,
            comments,
            commentsSet,
            nestedComments,
            nestedCommentsSet,
         }}
      >
         {children}
      </CommentContext.Provider>
   );
};

export const useCommentContext = () => useContext(CommentContext);
