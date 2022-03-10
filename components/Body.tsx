import React, { FC } from "react";
import { Box } from "@mui/material";
import { usePostContext } from "../components/context/PostContext";
import PostCard from "./posts/postcard/PostCard";
import PostCardWithMedia from "./posts/postcard/PostCardWithMedia";

const Body: FC = () => {
   const { posts } = usePostContext();
   return (
      <Box
         marginTop={6}
         display='flex'
         flexDirection='column'
         justifyContent='center'
      >
         {posts.map((post) => (
            <Box key={post.id}>
               {post.image ? (
                  <PostCardWithMedia post={post} />
               ) : (
                  <PostCard post={post} />
               )}
            </Box>
         ))}
      </Box>
   );
};

export default Body;
