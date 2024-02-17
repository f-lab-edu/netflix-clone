"use client";

import { useEffect, useState } from "react";
import { clearTimeout } from "node:timers";
import { getSearch } from "@/app/(afterLogin)/_lib/tmdb-api";

export default function useDebounce(value: string, delay: number) {
  const [debounceValue, setDebounceValue] = useState("");
  useEffect(() => {
    const handler = setTimeout(async () => {
      const response = await getSearch(value);
      setDebounceValue(response.results);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  return debounceValue;
}
