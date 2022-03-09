import React from "react";
import Sidebar from "../components/sidebar/Sidebar";
import type { NextPage } from "next";
import Head from "next/head";
import {
   Box,
   Container,
   useTheme,
   useMediaQuery,
   Grid,
   Divider,
} from "@mui/material";
import Body from "../components/Body";

const Home: NextPage = () => {
   const theme = useTheme();
   const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

   return (
      <Container>
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
