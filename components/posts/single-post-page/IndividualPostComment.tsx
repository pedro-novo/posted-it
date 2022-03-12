import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { IComment } from "../../../src/types";
import NestedCommentBox from "./NestedCommentBox";

interface IEachPostComment {
   comment: IComment;
}

const IndividualPostComment = ({ comment }: IEachPostComment) => {
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
            Comment
         </Button>
         {displayCommentBox && <NestedCommentBox parentID={comment.id} />}
      </Box>
   );
};

export default IndividualPostComment;
