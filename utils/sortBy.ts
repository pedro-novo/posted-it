import { CropPortrait } from "@mui/icons-material";
import { PostsType } from "../components/context/PostContext";

type sortedVotes = (
   postsArray: PostsType,
   sortByOption: "votes-asc" | "votes-desc" | "date-asc" | "date-desc",
   limit?: number
) => PostsType | undefined;

export const sortBy: sortedVotes = (postsArray, sortByOption, limit) => {
   if (sortByOption === "votes-desc") {
      return postsArray
         .sort((a, b) => {
            if (a.votes > b.votes) {
               return 1;
            }
            if (a.votes < b.votes) {
               return -1;
            }
            return 0;
         })
         .reverse()
         .slice(0, limit);
   } else if (sortByOption === "votes-asc") {
      return postsArray
         .sort((a, b) => {
            if (a.votes > b.votes) {
               return 1;
            }
            if (a.votes < b.votes) {
               return -1;
            }
            return 0;
         })
         .slice(0, limit);
   } else if (sortByOption === "date-asc") {
      return postsArray
         .sort((a, b) => {
            if (a.createdAt > b.createdAt) {
               return 1;
            }
            if (a.createdAt < b.createdAt) {
               return -1;
            }
            return 0;
         })
         .reverse()
         .slice(0, limit);
   } else if (sortByOption === "date-desc") {
      return postsArray
         .sort((a, b) => {
            if (a.createdAt > b.createdAt) {
               return 1;
            }
            if (a.createdAt < b.createdAt) {
               return -1;
            }
            return 0;
         })
         .slice(0, limit);
   }
   return postsArray;
};
