import React, { FC } from "react";
import { Box } from "@mui/material";
import { usePostContext } from "../components/context/PostContext";
import PostCard from "./posts/postcard/PostCard";
import PostCardWithMedia from "./posts/postcard/PostCardWithMedia";
import TagsSidebarMobile from "./posts/tags/TagsSidebar";

const Body: FC = () => {
   const { filteredPosts } = usePostContext();

   return (
      <Box>
         <TagsSidebarMobile />
         <Box
            marginTop={6}
            display='flex'
            flexDirection='column'
            justifyContent='center'
         >
            {filteredPosts.map((post) => (
               <Box key={post.id}>
                  {post.image ? (
                     <PostCardWithMedia post={post} />
                  ) : (
                     <PostCard post={post} />
                  )}
               </Box>
            ))}
         </Box>
      </Box>
   );
};

export default Body;
