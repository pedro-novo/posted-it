import React, { FC } from "react";
import { Box, Typography } from "@mui/material";
import { usePostContext } from "../components/context/PostContext";
import PostCard from "./posts/PostCard";
import PostCardWithMedia from "./posts/PostCardWithMedia";

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
            <Box>
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