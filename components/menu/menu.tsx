import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "./navigation-menu";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { cookies } from "next/headers";
import User from "./user";
const Menu = async () => {
  const menuItems = [
    { label: "Home", address: "/" },
    { label: "Games", address: "/games" },
    { label: "About Me", address: "/aboutme" },
  ];
  const cookie = await cookies();
  const user = cookie.get("user");
  let isLoggedIn = false;
  if (user) {
    isLoggedIn = JSON.parse(user.value).isLoggedIn;
  }

  return (
    <NavigationMenu className={`w-11/12 mx-auto`}>
      <NavigationMenuList className="justify-between bg-purple-950">
        <NavigationMenuItem>
          <Image src={"/logo.svg"} width={50} height={50} alt="logo" />
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
