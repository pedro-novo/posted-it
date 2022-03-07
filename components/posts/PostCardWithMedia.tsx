import React from "react";
import { PostType } from "../context/PostContext";
import { Box, Container, useTheme, useMediaQuery, Grid } from "@mui/material";

interface PostCardWithMediaProps {
   post: PostType;
}

const PostCardWithMedia = ({ post }: PostCardWithMediaProps) => {
   return <Box padding={2}>{post.title}</Box>;
};

export default PostCardWithMedia;
