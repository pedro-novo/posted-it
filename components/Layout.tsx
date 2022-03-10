import React, { ReactChild, ReactChildren } from "react";
import Navbar from "./Navbar/Navbar";

export interface AuxProps {
   children: ReactChild | ReactChildren;
}

const Layout = ({ children }: AuxProps) => {
   return (
      <div>
         <Navbar />
         {children}
      </div>
   );
};

export default Layout;
