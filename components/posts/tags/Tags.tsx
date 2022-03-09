import React, { FC } from "react";
import { Box, Typography } from "@mui/material";

interface TagsProps {
   tags: string[] | undefined;
}

const Tags = ({ tags }: TagsProps) => {
   return (
      <Box display='flex'>
         {tags?.map((tag, index) => (
            <Box
               key={index}
               padding={0.5}
               marginRight={1}
               borderRadius={1}
               sx={{ background: "#EEEDDE" }}
            >
               <Typography variant='subtitle2'>{tag}</Typography>
            </Box>
         ))}
      </Box>
   );
};

export default Tags;
