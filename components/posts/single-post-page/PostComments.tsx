import React from "react";
import { Box, Typography } from "@mui/material";
import IndividualPostComment from "./IndividualPostComment";
import { useCommentContext } from "../../context/CommentsContext";

const PostComments = () => {
   const { comments } = useCommentContext();

   return (
      <Box marginTop={4}>
         <Box>
            <Typography>Comments:</Typography>
         </Box>
         {comments?.map((comment) => {
            if (!comment.parentID) {
               return (
                  <Box
                     key={comment.id}
                     display='flex'
                     alignItems='center'
                     marginTop={2}
                     padding={3}
                     borderRadius={2}
                     sx={{ background: "#EFEFEF" }}
                  >
                     <IndividualPostComment comment={comment} />
                  </Box>
               );
            }
         })}
      </Box>
   );
};

export default PostComments;
