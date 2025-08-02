"use client";

import { useEffect } from "react";
import { useSearchParams, usePathname } from "next/navigation";

export default function ScrollToStartup() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const query = searchParams.get("query");

  useEffect(() => {
    if (pathname === "/" && query) {
      const el = document.getElementById("startupsection");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [query, pathname]); // re-run whenever query or path changes

  return null;
}
