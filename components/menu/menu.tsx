"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "./navigation-menu";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import User from "./user";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/Redux/store";

const Menu = () => {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);

  const menuItems = [
    { label: "Home", address: "/" },
    { label: "Games", address: "/games" },
    { label: "About Me", address: "/aboutme" },
  ];

  return (
    <NavigationMenu className={`w-11/12 mx-auto`}>
      <NavigationMenuList className="justify-between bg-purple-950 p-2">
        <NavigationMenuItem>
          <Image
            src={"/logo.svg"}
            width={50}
            height={50}
            alt="logo"
            className="size-7"
          />
        </NavigationMenuItem>
        <div className="flex w-4/6 mx-auto">
          {menuItems.map((item, index) => (
            <NavigationMenuItem key={index}>
              <NavigationMenuLink href={item.address}>
                {item.label}
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </div>
        <NavigationMenuItem className="flex justify-end mr-2">
          {isLoggedIn ? (
            <User />
          ) : (
            <Button variant="default" className="text-black" size="sm">
              <Link href={"/login"}>Login</Link>
            </Button>
          )}
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Menu;
