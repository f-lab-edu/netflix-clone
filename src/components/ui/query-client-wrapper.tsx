"use client";
import Header from "@/components/ui/header";
import { QueryClient, QueryClientProvider } from "react-query";
import React from "react";

export default function QueryClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      {children}
    </QueryClientProvider>
  );
}
