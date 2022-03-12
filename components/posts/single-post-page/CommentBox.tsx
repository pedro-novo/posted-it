import React, { useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import BeenhereIcon from "@mui/icons-material/Beenhere";
import { updateComments } from "../../../firebase-dev-config";
import { Guid } from "guid-ts";
import { ICommentBoxProps } from "../../../src/types";

const CommentBox = ({ postID, comments }: ICommentBoxProps) => {
   const [commentText, commentTextSet] = useState<string>("");
   const [commentError, commentErrorSet] = useState<boolean>(false);

   const handleSubmit = (e: any) => {
      e.preventDefault();
      commentErrorSet(false);

      if (!commentText) commentErrorSet(true);

      if (commentText) {
         comments?.push({
            id: Guid.newGuid().toString(),
            text: commentText,
            parentID: "",
         });
         updateComments(postID!, comments!);
         commentTextSet("");
      }
   };

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
