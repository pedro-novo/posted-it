import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { IComment, IndividualPostCommentProps } from "../../../src/types";
import NestedCommentBox from "./NestedCommentBox";

const IndividualPostComment = ({
   comments,
   comment,
   postID,
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
      </Box>
   );
};

export default IndividualPostComment;
