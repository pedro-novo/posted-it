import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { IndividualPostCommentProps } from "../../../src/types";
import NestedCommentBox from "./NestedCommentBox";

const IndividualPostComment = ({
   postID,
   comments,
   comment,
   commentsWithParentID,
}: IndividualPostCommentProps) => {
   const [displayCommentBox, displayCommentBoxSet] = useState(false);

   return (
      <Box>
         <Typography variant='subtitle1' fontSize='0.9rem'>
            {comment.text}
         </Typography>
         <Button
            variant='text'
            onClick={() => displayCommentBoxSet(!displayCommentBox)}
         >
            {displayCommentBox ? `Close` : `Comment`}
         </Button>
         {displayCommentBox && (
            <NestedCommentBox
               postID={postID}
               parentID={comment.id}
               comments={comments}
            />
         )}
         {commentsWithParentID.map((nestedComment) => {
            if (comment.id === nestedComment.parentID) {
               return (
                  <Box
                     key={nestedComment.id}
                     display='flex'
                     alignItems='center'
                     marginTop={2}
                     padding={3}
                     borderRadius={2}
                     sx={{ background: "#FFF" }}
                  >
                     <IndividualPostComment
                        postID={postID}
                        comments={comments}
                        comment={nestedComment}
                        commentsWithParentID={commentsWithParentID}
                     />
                  </Box>
               );
            }
         })}
      </Box>
   );
};

export default IndividualPostComment;
