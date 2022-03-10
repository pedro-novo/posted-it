import React from "react";
import { Box, Typography } from "@mui/material";

interface PostCommentsProps {
   comments?: string[];
}

const PostComments = ({ comments }: PostCommentsProps) => {
   return (
      <Box marginTop={4}>
         <Box>
            <Typography>Comments:</Typography>
         </Box>
         {comments?.map((comment, index) => (
            <Box
               key={index}
               display='flex'
               alignItems='center'
               marginTop={2}
               padding={3}
               borderRadius={2}
               sx={{ background: "#EFEFEF" }}
            >
               <Typography variant='subtitle1' fontSize='0.9rem'>
                  {comment}
               </Typography>
            </Box>
         ))}
      </Box>
   );
};

export default PostComments;
