import React, { ReactNode } from "react";
import Header from "@/app/(afterLogin)/_component/header";
import ReactQueryProvider from "@/app/(afterLogin)/_component/react-query-provider";

export default function Layout({
  children,
  modal,
}: {
  children: ReactNode;
  modal: ReactNode;
}) {
  return (
    <ReactQueryProvider>
      <main>
        <Header />
        {children}
        {modal}
      </main>
    </ReactQueryProvider>
  );
}
