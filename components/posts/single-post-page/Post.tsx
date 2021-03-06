import React from "react";
import { Box, Typography } from "@mui/material";
import { usePostContext } from "../../context/PostContext";
import Tags from "../tags/Tags";
import LikesDislikes from "../likes-and-dislikes/LikesDislikes";
import PostComments from "./PostComments";
import { filterCurrentPost } from "../../../utils/filterCurrentPost";
import CommentBox from "./CommentBox";
import { IPostProps } from "../../../src/types";

const Post = ({ postID }: IPostProps) => {
   const { posts } = usePostContext();
   const currentPost = filterCurrentPost(posts, postID);

   return (
      <Box
         marginTop={4}
         padding={2}
         borderRadius={2}
         sx={{ background: "#fff" }}
      >
         <Tags tags={currentPost?.topics} />
         <Typography variant='h6' fontWeight={600}>
            {currentPost?.title}
         </Typography>
         {currentPost?.image && (
            <Box marginTop={2}>
               <img src={currentPost.image} width='80%' />
            </Box>
         )}
         {currentPost?.text && (
            <Typography variant='subtitle1' marginTop={2} fontSize='0.9rem'>
               {currentPost.text}
            </Typography>
         )}

         <Box display='flex' alignItems='center' marginTop={2}>
            <Typography
               variant='subtitle2'
               marginRight={2}
            >{`Comments: ${currentPost?.comments?.length}`}</Typography>
            <LikesDislikes
               postID={currentPost?.id}
               votes={currentPost?.votes}
            />
         </Box>
         <Box>
            <CommentBox postID={postID} comments={currentPost?.comments} />
         </Box>
         <PostComments postID={postID} comments={currentPost?.comments} />
      </Box>
   );
};

export default Post;
