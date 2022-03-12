import React, { useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { Box, Container, Grid, useMediaQuery, useTheme } from "@mui/material";
import Sidebar from "../components/sidebar/Sidebar";
import Post from "../components/posts/single-post-page/Post";

const PostIDPage = () => {
   const router = useRouter();
   const { post } = router.query;
   const theme = useTheme();
   const isMobile = useMediaQuery(theme.breakpoints.down("md"));

   return (
      <Container>
         <Head>
            <title>Single Post Page</title>
            <meta
               name='viewport'
               content='initial-scale=1.0, width=device-width'
            />
         </Head>
         {isMobile ? (
            <Box display='flex' justifyContent='center' alignItems='center'>
               <Post postID={post as string} />
            </Box>
         ) : (
            <Grid container spacing={2}>
               <Grid item sm={8}>
                  <Post postID={post as string} />
               </Grid>
               <Grid item sm={4}>
                  <Sidebar />
               </Grid>
            </Grid>
         )}
      </Container>
   );
};

export default PostIDPage;
