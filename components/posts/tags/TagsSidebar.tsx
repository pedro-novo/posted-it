import React, { useState } from "react";
import { useRouter } from "next/router";
import {
   Typography,
   Box,
   Drawer,
   List,
   ListItem,
   ListItemText,
   Divider,
   IconButton,
} from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import { topics } from "../../../utils/topicsTags";
import { fiterByCategory } from "../../../utils/filterByCategory";
import { usePostContext } from "../../context/PostContext";

type Anchor = "left";

const TagsSidebarMobile = () => {
   const { posts, filteredPostsSet } = usePostContext();
   const [state, setState] = useState({
      left: false,
   });

   const toggleDrawer =
      (anchor: Anchor, open: boolean) =>
      (event: React.KeyboardEvent | React.MouseEvent) => {
         if (
            event.type === "keydown" &&
            ((event as React.KeyboardEvent).key === "Tab" ||
               (event as React.KeyboardEvent).key === "Shift")
         ) {
            return;
         }

         setState({ ...state, [anchor]: open });
      };

   const handleFilter = (topic: string) => {
      filteredPostsSet(fiterByCategory(posts, topic));
   };

   const list = () => (
      <Box
         width={250}
         marginTop={16}
         role='presentation'
         onClick={toggleDrawer("left", false)}
         onKeyDown={toggleDrawer("left", false)}
      >
         <Typography
            textAlign='center'
            variant='h6'
            component='h4'
            marginBottom={2}
         >
            Topics
         </Typography>
         <Divider />
         <List sx={{ marginTop: 2 }}>
            <ListItem button onClick={() => handleFilter("all")}>
               <ListItemText primary={"All"} />
            </ListItem>
            {topics.map((topic) => (
               <ListItem
                  button
                  key={topic.id}
                  onClick={() => handleFilter(topic.name)}
               >
                  <ListItemText primary={topic.name} />
               </ListItem>
            ))}
         </List>
      </Box>
   );

   return (
      <Box marginTop={2}>
         <React.Fragment>
            <IconButton
               aria-label='open drawer'
               edge='end'
               onClick={toggleDrawer("left", true)}
            >
               <FilterListIcon color='secondary' />
            </IconButton>
            <Drawer
               anchor={"left"}
               open={state["left"]}
               onClose={toggleDrawer("left", false)}
            >
               {list()}
            </Drawer>
         </React.Fragment>
      </Box>
   );
};

export default TagsSidebarMobile;
