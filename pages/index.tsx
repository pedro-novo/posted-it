import React from "react";
import Sidebar from "../components/sidebar/Sidebar";
import type { NextPage } from "next";
import Head from "next/head";
import { Box, Container, useTheme, useMediaQuery, Grid } from "@mui/material";
import Body from "../components/Body";
const Home: NextPage = () => {
   const theme = useTheme();
   const isMobile = useMediaQuery(theme.breakpoints.down("md"));

   return (
      <Container>
         <Head>
            <title>Posted IT</title>
            <meta
               name='viewport'
               content='initial-scale=1.0, width=device-width'
            />
         </Head>
         {isMobile ? (
            <Box display='flex' justifyContent='center' alignItems='center'>
               <Body />
            </Box>
         ) : (
            <Grid container spacing={2}>
               <Grid item sm={8}>
                  <Body />
               </Grid>
               <Grid item sm={4}>
                  <Sidebar />
               </Grid>
            </Grid>
         )}
      </Container>
   );
};

export default Home;
