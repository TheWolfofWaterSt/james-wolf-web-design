"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";

export default function SiteHeader() {
  const pathname = usePathname();

  if (pathname === "/") {
    return null;
  }

  return <Navbar />;
}
