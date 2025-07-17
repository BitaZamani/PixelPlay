"use client";
import { RootState } from "@/lib/Redux/store";
import { useRouter } from "next/navigation";

import React, { ReactNode, useEffect, useState } from "react";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const router = useRouter();

  const [hasHydrated, setHasHydrated] = useState(false);
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);

  useEffect(() => {
    setHasHydrated(true);
  }, []);

  useEffect(() => {
    if (!isLoggedIn) router.push("/login");
  }, [isLoggedIn, router]);
  if (!hasHydrated) return null;
  if (!isLoggedIn) return null;
  return <div>{children}</div>;
};

export default ProtectedRoute;
