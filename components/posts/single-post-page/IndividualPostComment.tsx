import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { IComment } from "../../../src/types";
import NestedCommentBox from "./NestedCommentBox";
import { useCommentContext } from "../../../components/context/CommentsContext";
import BeenhereIcon from "@mui/icons-material/Beenhere";

interface IEachPostComment {
   comment: IComment;
}

const IndividualPostComment = ({ comment }: IEachPostComment) => {
   const { nestedComments } = useCommentContext();
   const [displayCommentBox, displayCommentBoxSet] = useState(false);
   const [displaySecondCommentBox, displaySecondCommentBoxSet] =
      useState(false);

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
         {displayCommentBox && <NestedCommentBox parentID={comment.id} />}
         {nestedComments?.map((nestedComment) => {
            if (nestedComment.parentID === comment.id) {
               return (
                  <Box
                     key={comment.id}
                     marginTop={2}
                     padding={3}
                     borderRadius={2}
                     sx={{ background: "#FFFFFF" }}
                  >
                     {nestedComment?.text}
                     <Button
                        variant='text'
                        onClick={() =>
                           displaySecondCommentBoxSet(!displaySecondCommentBox)
                        }
                        sx={{ display: "block" }}
                     >
                        {displaySecondCommentBox ? `Close` : `Answer`}
                     </Button>
                     {displaySecondCommentBox && (
                        <NestedCommentBox parentID={nestedComment.id} />
                     )}
                  </Box>
               );
            }
         })}
      </Box>
   );
};

export default IndividualPostComment;
