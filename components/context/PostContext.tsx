import { onSnapshot } from "firebase/firestore";
import React, {
   useState,
   useEffect,
   createContext,
   SetStateAction,
   useContext,
} from "react";
import { colRef } from "../../firebase-dev-config";
import { PostType, PostsType } from "../../src/types";

type PostContextProviderProps = {
   children: JSX.Element;
};

type PostContextType = {
   posts: PostsType;
   postsSet: React.Dispatch<SetStateAction<PostsType>>;
   recentPosts: PostsType;
   recentPostsSet: React.Dispatch<SetStateAction<PostsType>>;
};

const PostContext = createContext<PostContextType>({
   posts: [],
   postsSet: () => undefined,
   recentPosts: [],
   recentPostsSet: () => undefined,
});

export const PostContextProvider = ({ children }: PostContextProviderProps) => {
   const [posts, postsSet] = useState<PostsType>([]);
   const [recentPosts, recentPostsSet] = useState<PostsType>([]);

   useEffect(() => {
      onSnapshot(colRef, (snapshot) => {
         let array: PostsType = [];
         snapshot.docs.forEach((doc) => {
            array.push({ ...doc.data(), id: doc.id } as PostType);
         });
         postsSet(array);
      });
   }, []);

   return (
      <PostContext.Provider
         value={{
            posts,
            postsSet,
            recentPosts,
            recentPostsSet,
         }}
      >
         {children}
      </PostContext.Provider>
   );
};

export const usePostContext = () => useContext(PostContext);
