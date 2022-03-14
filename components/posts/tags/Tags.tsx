import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { usePostContext } from "../../../components/context/PostContext";
import { fiterByCategory } from "../../../utils/filterByCategory";

interface TagsProps {
   tags: string[] | undefined;
}

const Tags = ({ tags }: TagsProps) => {
   const { posts, filteredPostsSet } = usePostContext();

   const handleClick = (topic: string) => {
      filteredPostsSet(fiterByCategory(posts, topic));
   };

   return (
      <Box display='flex'>
         {tags?.map((tag, index) => (
            <Button
               key={index}
               variant='contained'
               size='small'
               onClick={() => {
                  handleClick(tag);
               }}
               sx={{ background: "#EEEDDE", marginRight: 1 }}
            >
               <Typography variant='caption' fontWeight={600}>
                  {tag}
               </Typography>
            </Button>
         ))}
      </Box>
   );
};

export default Tags;
