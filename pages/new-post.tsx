import React, { useState } from "react";
import { useRouter } from "next/router";
import { createPost } from "../firebase-config";
import {
   Container,
   Box,
   TextField,
   Typography,
   Button,
   MenuItem,
   Select,
   InputLabel,
   FormControl,
   SelectChangeEvent,
   ListItemText,
   Checkbox,
   OutlinedInput,
   IconButton,
} from "@mui/material";
import styled from "@emotion/styled";
import { PhotoCamera } from "@mui/icons-material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const Input = styled("input")({
   display: "none",
});

const topicsAvailable = [
   "sports",
   "gaming",
   "food",
   " technology",
   "funny",
   "politics",
   "world",
   "curiosities",
   "ama",
   "others",
];

const NewPost = () => {
   const [title, titleSet] = useState<string>("");
   const [link, linkSet] = useState<string>("");
   const [image, imageSet] = useState<string>("");
   const [text, textSet] = useState<string>("");
   const [topics, topicsSet] = useState<string[]>([]);
   const [titleError, titleErrorSet] = useState<boolean>(false);
   const [topicsError, topicsErrorSet] = useState<boolean>(false);
   const router = useRouter();

   const handleSubmit = (e: any) => {
      e.preventDefault();
      titleErrorSet(false);
      topicsErrorSet(false);

      if (!title) titleErrorSet(true);
      if (topics.length < 1) topicsErrorSet(true);

      if (title && topics.length >= 1) {
         createPost({ title, link, image, text, topics });
         titleSet("");
         linkSet("");
         imageSet("");
         textSet("");
         topicsSet([]);
         router.push("/");
      }
   };

   const handleChange = (event: SelectChangeEvent<typeof topics>) => {
      const {
         target: { value },
      } = event;
      topicsSet(
         // On autofill we get a stringified value.
         typeof value === "string" ? value.split(",") : value
      );
   };

   return (
      <Container>
         <Box marginTop={6}>
            <Typography textAlign='center' fontWeight={500} variant='h3'>
               Create a New Post
            </Typography>
         </Box>
         <Box marginTop={6}>
            <form noValidate autoComplete='off' onSubmit={handleSubmit}>
               <TextField
                  onChange={(e) => {
                     titleSet(e.target.value);
                  }}
                  label='Post Title'
                  variant='outlined'
                  fullWidth
                  required
                  error={titleError}
                  sx={{
                     marginTop: "10px",
                     marginBottom: "10px",
                     display: "block",
                  }}
               />
               <TextField
                  onChange={(e) => {
                     linkSet(e.target.value);
                  }}
                  label='Link'
                  variant='outlined'
                  fullWidth
                  sx={{
                     marginTop: "10px",
                     marginBottom: "10px",
                     display: "block",
                  }}
               />
               <TextField
                  onChange={(e) => {
                     textSet(e.target.value);
                  }}
                  label='Text'
                  variant='outlined'
                  fullWidth
                  multiline
                  rows={4}
                  sx={{
                     marginTop: "10px",
                     marginBottom: "10px",
                     display: "block",
                  }}
               />
               <FormControl sx={{ width: 300 }} required error={topicsError}>
                  <InputLabel id='demo-multiple-checkbox-label'>
                     Tags
                  </InputLabel>
                  <Select
                     labelId='demo-multiple-checkbox-label'
                     id='demo-multiple-checkbox'
                     multiple
                     value={topics}
                     onChange={handleChange}
                     input={<OutlinedInput label='Tags' />}
                     renderValue={(selected) => selected.join(", ")}
                  >
                     {topicsAvailable.map((topic) => (
                        <MenuItem key={topic} value={topic}>
                           <Checkbox checked={topics.indexOf(topic) > -1} />
                           <ListItemText primary={topic} />
                        </MenuItem>
                     ))}
                  </Select>
               </FormControl>
               <IconButton
                  color='primary'
                  aria-label='upload picture'
                  sx={{ display: "block" }}
               >
                  <input type='file' hidden />
                  <PhotoCamera />
               </IconButton>
               <input type='file' hidden />
               <Button
                  type='submit'
                  variant='contained'
                  endIcon={<KeyboardArrowRightIcon />}
                  sx={{ color: "#EEEDDE" }}
               >
                  Submit
               </Button>
            </form>
         </Box>
      </Container>
   );
};

export default NewPost;
