import React, { FC } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
   Divider,
   Box,
   Button,
   Typography,
   useTheme,
   useMediaQuery,
} from "@mui/material";
import NavBarDesktopView from "./NavBarDesktopView";
import NavBarMobileView from "./NavBarMobileView";

const Navbar: FC = () => {
   const router = useRouter();
   const theme = useTheme();
   const isMobile = useMediaQuery(theme.breakpoints.down("md"));

   return (
      <Box>
         {isMobile ? <NavBarMobileView /> : <NavBarDesktopView />}
         <Divider />
      </Box>
   );
};

export default Navbar;
