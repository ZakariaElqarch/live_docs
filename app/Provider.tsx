'use client'
import React, { ReactNode } from "react";

import Loader from "@/components/Loader";
import { ClientSideSuspense, LiveblocksProvider } from "@liveblocks/react/suspense";
const Provider = ({ children }: { children: ReactNode }) => {
  return (
    <LiveblocksProvider authEndpoint={"/api/liveblocks-auth"}>
      <ClientSideSuspense fallback={<Loader />}>{children}</ClientSideSuspense>
    </LiveblocksProvider>
  );
};

export default Provider;
