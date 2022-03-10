import React, { useState, useEffect } from "react";
import { Box, Button, TextField } from "@mui/material";
import BeenhereIcon from "@mui/icons-material/Beenhere";
import { updateComments } from "../../../firebase-config";

interface CommentBoxProps {
   postID?: string;
   currentPostComments?: string[];
}

const CommentBox = ({ postID, currentPostComments }: CommentBoxProps) => {
   const [comment, commentSet] = useState<string>();
   const [commentError, commentErrorSet] = useState<boolean>(false);
   const [commentsArrayToSub, commentsArrayToSubSet] = useState<string[]>(
      currentPostComments!
   );

   const handleSubmit = (e: any) => {
      e.preventDefault();
      commentErrorSet(false);

      if (!comment) commentErrorSet(true);

      if (comment) {
         setTimeout(() => {});
         console.log(`comment: ${comment}`);
         console.log(`commentsArray B4 push: ${commentsArrayToSub}`);
         commentsArrayToSub.push(comment);
         console.log(`commentsArray After push: ${commentsArrayToSub}`);
         updateComments(postID!, commentsArrayToSub);
         commentSet("");
         console.log(`comment after being emptied: ${comment}`);
         console.log(`commentsArray end: ${commentsArrayToSub}`);
      }
   };
   return (
      <Box marginTop={6} display='block'>
         <form noValidate autoComplete='off' onSubmit={handleSubmit}>
            <TextField
               onChange={(e) => {
                  commentSet(e.target.value);
               }}
               label='Comment'
               variant='outlined'
               placeholder='Comment this post...'
               value={comment}
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
