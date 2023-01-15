import { type AppType } from "next/app";
import { type Session } from "next-auth";

import Head from "@app/document/head";
import AppProvider from "@app/providers";
import { trpcAPI } from "@shared/api/trpc";

import "@app/styles/globals.css";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <>
      <Head />
      <AppProvider session={session}>
        <Component {...pageProps} />
      </AppProvider>
    </>
  );
};

export default trpcAPI.withTRPC(MyApp);
