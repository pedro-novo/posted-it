import React, { useState, useEffect } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { usePostContext } from "../components/context/PostContext";

const Home: NextPage = () => {
   const { posts } = usePostContext();

   return (
      <div>
         {posts.map((post) => (
            <div>{post.title}</div>
         ))}
      </div>
   );
};

export default Home;
