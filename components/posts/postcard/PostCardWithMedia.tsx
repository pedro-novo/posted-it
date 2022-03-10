import React from "react";
import Link from "next/link";
import { PostType } from "../../context/PostContext";
import { Box, Typography } from "@mui/material";
import Tags from "../tags/Tags";
import TextPost from "../text/TextPost";
import LikesDislikes from "../likes-and-dislikes/LikesDislikes";

interface PostCardWithMediaProps {
   post: PostType;
}

const PostCardWithMedia = ({ post }: PostCardWithMediaProps) => {
   return (
      <Box
         key={post.id}
         flexDirection='row'
         marginBottom={2}
         padding={2}
         width='100%'
         borderRadius={1}
         sx={{ border: "1px solid #8F8F8F", background: "#79B4B7" }}
      >
         <Box>
            <Link href={`/${post.id}`}>
               <Box display='flex'>
                  <Box flexGrow={1}>
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
                  </Box>
                  <Box
                     display='flex'
                     justifyContent='center'
                     alignItems='center'
                     marginRight={2}
                  >
                     <img src={post.image} width='180vw' />
                  </Box>
               </Box>
            </Link>
            <Box alignItems='center'>
               <Typography
                  variant='caption'
                  sx={{ fontSize: "0.8rem" }}
               >{`Comments: ${post.comments?.length}`}</Typography>
               <LikesDislikes postID={post.id} votes={post.votes} />
            </Box>
         </Box>
      </Box>
   );
};

export default PostCardWithMedia;
