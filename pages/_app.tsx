import * as React from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";
import Layout from "../components/Layout";
import theme from "../src/theme";
import createEmotionCache from "../src/createEmotionCache";
import { PostContextProvider } from "../components/context/PostContext";
import { CommentsContextProvider } from "../components/context/CommentsContext";

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
   emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
   const {
      Component,
      emotionCache = clientSideEmotionCache,
      pageProps,
   } = props;
   return (
      <CacheProvider value={emotionCache}>
         <Head>
            <meta
               name='viewport'
               content='initial-scale=1, width=device-width'
            />
         </Head>
         <ThemeProvider theme={theme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <PostContextProvider>
               <Layout>
                  <Component {...pageProps} />
               </Layout>
            </PostContextProvider>
         </ThemeProvider>
      </CacheProvider>
   );
}
