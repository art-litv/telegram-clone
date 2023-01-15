import type { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { MantineProvider } from "@mantine/core";
import React from "react";

type AppProviderProps = {
  session: Session | null;
  children: React.ReactNode;
};

const AppProvider: React.FC<AppProviderProps> = ({ session, children }) => (
  <MantineProvider
    withGlobalStyles
    withNormalizeCSS
    theme={{
      colorScheme: "light",
      fontFamily: "Roboto, sans-serif",
    }}
  >
    <SessionProvider session={session}>{children}</SessionProvider>
  </MantineProvider>
);

export default AppProvider;
