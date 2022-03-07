import { onSnapshot } from "firebase/firestore";
import React, {
   useState,
   useEffect,
   createContext,
   SetStateAction,
   useContext,
} from "react";
import { colRef } from "../../firebase-config";

export type PostType = {
   id: string;
   title: string;
   image?: string;
   link?: string;
   text?: string;
   topics: string[];
   likes: number;
   dislikes: number;
   comments?: string[];
};

export type PostsType = PostType[];

type PostContextProviderProps = {
   children: JSX.Element;
};

type PostContextType = {
   posts: PostsType;
   postsSet: React.Dispatch<SetStateAction<PostsType>>;
};

const PostContext = createContext<PostContextType>({
   posts: [],
   postsSet: () => undefined,
});

export const PostContextProvider = ({ children }: PostContextProviderProps) => {
   const [posts, postsSet] = useState<PostsType>([]);

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
      <PostContext.Provider value={{ posts, postsSet }}>
         {children}
      </PostContext.Provider>
   );
};

export const usePostContext = () => useContext(PostContext);
