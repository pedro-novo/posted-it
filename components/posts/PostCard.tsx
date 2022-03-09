import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import { PostType } from "../context/PostContext";
import Tags from "./tags/Tags";
import TextPost from "./text/TextPost";
import LikesDislikes from "./likes-and-dislikes/LikesDislikes";

interface PostCardProps {
   post: PostType;
}

const PostCard = ({ post }: PostCardProps) => {
   return (
      <Box
         key={post.id}
         marginBottom={2}
         padding={2}
         width='100%'
         borderRadius={1}
         sx={{ border: "1px solid #8F8F8F", background: "#79B4B7" }}
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
         <Box display='flex' alignItems='center' marginTop={0.5}>
            <Typography
               variant='caption'
               sx={{ fontSize: "0.8rem" }}
            >{`Comments: ${post.comments?.length}`}</Typography>
         </Box>
         <Box>
            <LikesDislikes postID={post.id} votes={post.votes} />
         </Box>
      </Box>
   );
};

export default PostCard;
