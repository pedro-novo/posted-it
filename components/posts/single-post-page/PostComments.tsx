import React from "react";
import { Box, Typography } from "@mui/material";
import { PostCommentsType } from "../../../src/types";

interface PostCommentsProps {
   comments?: PostCommentsType;
}

const PostComments = ({ comments }: PostCommentsProps) => {
   return (
      <Box marginTop={4}>
         <Box>
            <Typography>Comments:</Typography>
         </Box>
         {comments?.map((comment) => (
            <Box
               key={comment.id}
               display='flex'
               alignItems='center'
               marginTop={2}
               padding={3}
               borderRadius={2}
               sx={{ background: "#EFEFEF" }}
            >
               <Typography variant='subtitle1' fontSize='0.9rem'>
                  {comment.text}
               </Typography>
            </Box>
         ))}
      </Box>
   );
};

export default PostComments;
