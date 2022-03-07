import React, { FC } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Divider, Box, Button, Typography } from "@mui/material";

const Navbar: FC = () => {
   const router = useRouter();

   return (
      <>
         <Box position='relative' height='100px' sx={{ background: "#fff" }}>
            <Box position='absolute' left='0%'>
               <Link href='/'>
                  <img src='/logo/Asset_1.png' style={{ height: "100px" }} />
               </Link>
            </Box>
            <Box position='absolute' left='50%' top='25%'>
               <Button
                  variant='contained'
                  onClick={() => router.push("/new-post")}
               >
                  <Typography variant='h6' color='#EEEDDE'>
                     New Post
                  </Typography>
               </Button>
            </Box>
         </Box>
         <Divider />
      </>
   );
};

export default Navbar;
