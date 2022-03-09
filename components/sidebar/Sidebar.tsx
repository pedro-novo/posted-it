import React from "react";
import { Box, Typography } from "@mui/material";
import SortedView from "./SortedView";

const Sidebar = () => {
   return (
      <Box display='flex' justifyContent='center' marginTop={6}>
         <Box textAlign='center'>
            <Typography variant='h6'>Most Up Voted</Typography>
            <SortedView sortOption='votes-desc' />
         </Box>
      </Box>
   );
};

export default Sidebar;
