import LoggedInHeader from "@/components/ui/logged-in-header";
import React from "react";

export default function Layout({ children, modal }) {
  return (
    <main>
      {children}
      {modal}
    </main>
  );
}
