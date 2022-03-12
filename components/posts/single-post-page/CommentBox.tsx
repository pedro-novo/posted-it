import React, { useState, useEffect } from "react";
import { Box, Button, TextField } from "@mui/material";
import BeenhereIcon from "@mui/icons-material/Beenhere";
import { updateComments } from "../../../firebase-config";
import { PostCommentsType, IComment } from "../../../src/types";
import { Guid } from "guid-ts";

interface CommentBoxProps {
   postID?: string;
   currentPostComments?: PostCommentsType;
}

const CommentBox = ({ postID, currentPostComments }: CommentBoxProps) => {
   const [commentText, commentTextSet] = useState<string>("");
   const [commentError, commentErrorSet] = useState<boolean>(false);
   const [commentsArrayToSub, commentsArrayToSubSet] =
      useState<PostCommentsType>(currentPostComments!);

   const handleSubmit = (e: any) => {
      e.preventDefault();
      commentErrorSet(false);

      if (!commentText) commentErrorSet(true);

      if (commentText) {
         commentsArrayToSub.push({
            id: Guid.newGuid().toString(),
            text: commentText,
         });
         updateComments(postID!, commentsArrayToSub);
         commentTextSet("");
      }
   };

   useEffect(() => {
      commentsArrayToSubSet(currentPostComments!);
   }, [postID, commentsArrayToSub]);

   return (
      <Box marginTop={6} display='block'>
         <form noValidate autoComplete='off' onSubmit={handleSubmit}>
            <TextField
               onChange={(e) => {
                  commentTextSet(e.target.value);
               }}
               label='Comment'
               variant='outlined'
               placeholder='Comment this post...'
               value={commentText}
               fullWidth
               required
               error={commentError}
               multiline
               rows={4}
               sx={{
                  marginTop: "10px",
                  marginBottom: "10px",
                  display: "block",
               }}
            />
            <Button
               type='submit'
               variant='contained'
               endIcon={<BeenhereIcon />}
               sx={{ color: "#EEEDDE" }}
            >
               Send
            </Button>
         </form>
      </Box>
   );
};

export default CommentBox;
