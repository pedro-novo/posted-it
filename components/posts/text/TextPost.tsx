import React from "react";
import { Box, Typography } from "@mui/material";
import { textPostSize } from "../../../utils/textPostSize";

interface TextProps {
   text: string;
}

const TextPost = ({ text }: TextProps) => {
   let textDisplay = textPostSize(text);

   return (
      <Typography variant='caption' color='#041C32'>
         {textDisplay}
      </Typography>
   );
};

export default TextPost;
