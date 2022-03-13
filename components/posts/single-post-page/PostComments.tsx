import React from "react";
import { Box, Typography } from "@mui/material";
import IndividualPostComment from "./IndividualPostComment";
import { IPostCommentsProps } from "../../../src/types";
import { filterNestedComments } from "../../../utils/filterNestedComments";
import { filterMainComments } from "../../../utils/filterMainPostComments";

const PostComments = ({ postID, comments }: IPostCommentsProps) => {
   const mainPostComments = filterMainComments(comments!);
   const commentsWithParentID = filterNestedComments(comments!);

   return (
      <Box marginTop={4}>
         <Box>
            <Typography>Comments:</Typography>
         </Box>
         {mainPostComments?.map((comment) => (
            <Box
               key={comment.id}
               display='flex'
               alignItems='center'
               marginTop={2}
               padding={3}
               borderRadius={2}
               sx={{ background: "#EFEFEF" }}
            >
               <IndividualPostComment
                  postID={postID}
                  comments={comments}
                  comment={comment}
                  commentsWithParentID={commentsWithParentID}
               />
            </Box>
         ))}
      </Box>
   );
};

export default PostComments;
