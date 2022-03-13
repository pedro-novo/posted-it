import React, { useState } from "react";
import { updateComments } from "../../../firebase-config";
import { Guid } from "guid-ts";
import { Box, TextField, Button } from "@mui/material";
import BeenhereIcon from "@mui/icons-material/Beenhere";
import { INestedCommentBoxProps } from "../../../src/types";

const NestedCommentBox = ({
   postID,
   parentID,
   comments,
}: INestedCommentBoxProps) => {
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
            parentID: parentID,
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
               placeholder='Answer this comment...'
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
               Answer
            </Button>
         </form>
      </Box>
   );
};

export default NestedCommentBox;
