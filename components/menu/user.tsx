"use client";
import { CircleUserRound, LogOut, UserIcon } from "lucide-react";
import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { useDispatch } from "react-redux";
import { logOut } from "@/lib/Redux/features/auth/authSlice";
import Link from "next/link";
import { showToast } from "../ui/toasts";

const User = () => {
  const dispatch = useDispatch();
  const userLogOut = () => {
    try {
      dispatch(logOut());
      showToast({
        description: "You logged out successfully.",
        variant: "success",
      });
    } catch (error) {
      if (error instanceof Error)
        showToast({
          description: error.message,
          variant: "error",
        });
      else
        showToast({
          description: "Something went wrong.",
          variant: "error",
        });
    }
  };
  return (
    <div>
      <Popover>
        <PopoverTrigger className="cursor-pointer hover:text-purple-300">
          <CircleUserRound />
        </PopoverTrigger>
        <PopoverContent className="bg-purple-100 mr-5 text-black text-xs md:text-sm ">
          <Link
            href={"/profile"}
            className="flex items-center cursor-pointer gap-1 mb-3 hover:text-purple-600"
          >
            <UserIcon className="size-5 md:size-7" />
            <span>Profile</span>
          </Link>

          <div
            className="flex cursor-pointer items-center gap-1 hover:text-purple-600"
            onClick={userLogOut}
          >
            <LogOut className="size-5 md:size-7" />
            <span>Logout</span>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default User;
