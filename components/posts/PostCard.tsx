import React from "react";
import { Box, Typography } from "@mui/material";
import { PostType } from "../context/PostContext";

interface PostCardProps {
   post: PostType;
}

const PostCard = ({ post }: PostCardProps) => {
   return (
      <Box
         key={post.id}
         marginBottom={2}
         padding={2}
         width='90%'
         borderRadius={2}
         sx={{ background: "#203239" }}
      >
         <Typography color='secondary'>{post.title}</Typography>
      </Box>
   );
};

export default PostCard;
