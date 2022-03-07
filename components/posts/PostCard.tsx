import React from "react";
import { Box, Typography } from "@mui/material";
import { PostType } from "../context/PostContext";
import Tags from "./tags/Tags";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import TextPost from "./text/TextPost";

interface PostCardProps {
   post: PostType;
}

const PostCard = ({ post }: PostCardProps) => {
   return (
      <Box
         key={post.id}
         marginBottom={2}
         padding={2}
         width='60vw'
         borderRadius={1}
         sx={{ background: "#79B4B7" }}
      >
         <Tags tags={post.topics} />
         <Typography
            variant='h6'
            component='h1'
            marginTop={1}
            color='secondary'
            sx={{ fontSize: "1rem" }}
         >
            {post.title}
         </Typography>
         {post.text && <TextPost text={post.text} />}
         <Box></Box>
      </Box>
   );
};

export default PostCard;
