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
      <Box marginTop={3}>
         {sortedPosts?.map((post) => (
            <Box key={post.id} marginBottom={3}>
               <Box>
                  <Typography variant='subtitle2' sx={{ fontSize: "1rem" }}>
                     {textPostSize(post.title, 6)}
                  </Typography>
               </Box>
               <Box>
                  <Typography
                     marginRight={2}
                     variant='caption'
                     sx={{ fontSize: "0.8rem" }}
                  >
                     {`Votes: ${post.votes}`}
                  </Typography>
                  <Typography variant='caption' sx={{ fontSize: "0.8rem" }}>
                     {`Comments: ${post.comments?.length}`}
                  </Typography>
               </Box>
            </Box>
         ))}
      </Box>
   );
};

export default SortedView;
