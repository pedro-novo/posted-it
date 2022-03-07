import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import { updateLikes, updateDislikes } from "../../../firebase-config";

interface LikesAndDislikesProps {
   postID: string;
   likes: number;
   dislikes: number;
}

const LikesDislikes = ({ postID, likes, dislikes }: LikesAndDislikesProps) => {
   return (
      <Box display='flex'>
         <Box marginRight={1}>
            <Typography variant='subtitle2'>{`Up: ${likes}`}</Typography>
            <IconButton
               color='secondary'
               component='span'
               onClick={() => {
                  updateLikes(postID);
               }}
            >
               <ThumbUpIcon />
            </IconButton>
         </Box>
         <Box>
            <Typography variant='subtitle2'>{`Down: ${dislikes}`}</Typography>
            <IconButton
               color='secondary'
               component='span'
               onClick={() => {
                  updateDislikes(postID);
               }}
            >
               <ThumbDownAltIcon />
            </IconButton>
         </Box>
      </Box>
   );
};

export default LikesDislikes;
