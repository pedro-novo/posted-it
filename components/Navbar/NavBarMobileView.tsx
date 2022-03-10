import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Box, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const NavBarMobileView = () => {
   const router = useRouter();

   return (
      <Box position='relative' height='100px' sx={{ background: "#fff" }}>
         <Box position='absolute' left='0%'>
            <Link href='/'>
               <img src='/logo/Asset_1.png' style={{ height: "100px" }} />
            </Link>
         </Box>
         <Box position='absolute' right='5%' top='25%'>
            <Button
               variant='contained'
               onClick={() => router.push("/new-post")}
            >
               <AddIcon sx={{ color: "#EEEDDE" }} />
            </Button>
         </Box>
      </Box>
   );
};

export default NavBarMobileView;
