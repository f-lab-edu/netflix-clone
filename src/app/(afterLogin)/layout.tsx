import React, { ReactNode } from "react";
import Header from "@/app/(afterLogin)/_component/header";

export default function Layout({
  children,
  modal,
}: {
  children: ReactNode;
  modal: ReactNode;
}) {
  return (
    <main>
      <Header />
      {children}
      {modal}
    </main>
  );
}
