import React from "react";
import { Box, Typography } from "@mui/material";
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
         <LikesDislikes
            postID={post.id}
            likes={post.likes}
            dislikes={post.dislikes}
         />
         <Typography variant='caption'>{`Comments: ${post.comments?.length}`}</Typography>
      </Box>
   );
};

export default PostCard;
