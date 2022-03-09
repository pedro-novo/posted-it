import React from "react";
import { useRouter } from "next/router";
import { Box, Container, Grid, useMediaQuery, useTheme } from "@mui/material";
import Sidebar from "../components/sidebar/Sidebar";
import Post from "../components/posts/single-post-page/Post";

const PostID = () => {
   const router = useRouter();
   const { post } = router.query;
   const theme = useTheme();
   const isMobile = useMediaQuery(theme.breakpoints.down("md"));

   return (
      <Container>
         {isMobile ? (
            <Box display='flex' justifyContent='center' alignItems='center'>
               <Post postID={post} />
            </Box>
         ) : (
            <Grid container spacing={2}>
               <Grid item sm={8}>
                  <Post postID={post} />
               </Grid>
               <Grid item sm={4}>
                  <Sidebar />
               </Grid>
            </Grid>
         )}
      </Container>
   );
};

export default PostID;
