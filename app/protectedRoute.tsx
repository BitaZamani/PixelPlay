"use client";
import { RootState } from "@/lib/Redux/store";
import { useRouter } from "next/navigation";

import React, { ReactNode, useEffect } from "react";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const router = useRouter;
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  useEffect(() => {
    if (!isLoggedIn) router.apply("/login");
  }, [isLoggedIn, router]);
  if (!isLoggedIn) return null;
  return <div>{children}</div>;
};

export default ProtectedRoute;
