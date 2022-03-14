import { PostsType } from "../src/types";

type FilterByCategoryType = (posts: PostsType, category: string) => PostsType;

export const fiterByCategory: FilterByCategoryType = (posts, category) => {
   if (category === "all") {
      return posts;
   }
   let array = posts.filter((post) => {
      if (post.topics.includes(category.toLowerCase())) {
         return post;
      }
   });
   return array;
};
