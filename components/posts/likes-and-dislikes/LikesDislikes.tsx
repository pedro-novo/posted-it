import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import { updateUpVotes, updateDownVotes } from "../../../firebase-config";

interface LikesAndDislikesProps {
   postID: string;
   votes: number;
}

const LikesDislikes = ({ postID, votes }: LikesAndDislikesProps) => {
   return (
      <Box display='flex'>
         <Box display='flex' alignItems='center'>
            <Box marginRight={1}>
               <Typography variant='subtitle2'>{`Votes: ${votes}`}</Typography>
            </Box>
         </Box>
         <Box>
            <IconButton
               color='secondary'
               component='span'
               onClick={() => {
                  updateUpVotes(postID);
               }}
            >
               <ThumbUpIcon />
            </IconButton>
            <IconButton
               color='secondary'
               component='span'
               onClick={() => {
                  updateDownVotes(postID);
               }}
            >
               <ThumbDownAltIcon />
            </IconButton>
         </Box>
      </Box>
   );
};

export default LikesDislikes;
