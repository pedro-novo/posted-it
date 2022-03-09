import React from "react";
import { Box, Typography } from "@mui/material";
import SortedView from "./SortedView";

const Sidebar = () => {
   return (
      <Box
         display='flex'
         flexDirection='column'
         justifyContent='center'
         marginTop={6}
      >
         <Box>
            <Typography
               textAlign='center'
               variant='h4'
               sx={{ fontSize: "2rem" }}
            >
               Most Up Voted
            </Typography>
            <SortedView sortOption='votes-desc' />
         </Box>
         <Box marginTop={6}>
            <Typography
               textAlign='center'
               variant='h4'
               sx={{ fontSize: "2rem" }}
            >
               Most Recent
            </Typography>
            <SortedView sortOption='date-asc' />
         </Box>
      </Box>
   );
};

export default Sidebar;
