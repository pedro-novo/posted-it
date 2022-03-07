import React from "react";
import Sidebar from "../components/Sidebar";
import type { NextPage } from "next";
import Head from "next/head";
import { Box, Container, useTheme, useMediaQuery, Grid } from "@mui/material";
import Body from "../components/Body";

const Home: NextPage = () => {
   const theme = useTheme();
   const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

   return (
      <Container>
         {isMobile ? (
            <Box>
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
