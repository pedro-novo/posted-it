import React, { useEffect, useState } from "react";
import { usePostContext, PostsType } from "../context/PostContext";
import { sortBy } from "../../utils/sortBy";
import { Box, Typography } from "@mui/material";
import { textPostSize } from "../../utils/textPostSize";

interface SortedViewProps {
   sortOption: "votes-asc" | "votes-desc" | "date-asc" | "date-desc";
}

const SortedView = ({ sortOption }: SortedViewProps) => {
   const { posts } = usePostContext();
   const sortedPosts = sortBy(posts, sortOption, 5);
   console.log(sortedPosts);

   return (
      <Box>
         {sortedPosts?.map((post) => (
            <Box key={post.id}>
               <Typography variant='caption'>
                  {textPostSize(post.title, 6)}
               </Typography>
            </Box>
         ))}
      </Box>
   );
};

export default SortedView;
