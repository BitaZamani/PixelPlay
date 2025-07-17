import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "./navigation-menu";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
const Menu = ({ className }: { className: string | undefined }) => {
  const menuItems = [
    { label: "Home", address: "/" },
    { label: "Games", address: "/games" },
    { label: "About Me", address: "/aboutme" },
  ];

  return (
    <NavigationMenu className={`pt-3 ${className}`}>
      <NavigationMenuList className="justify-between">
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Image src={"/logo.svg"} width={50} height={50} alt="logo" />
          </NavigationMenuLink>
        </NavigationMenuItem>
        <div className="flex w-4/6 mx-auto">
          {menuItems.map((item, index) => (
            <NavigationMenuItem key={index}>
              <NavigationMenuLink asChild>
                <Link href={item.address}>{item.label}</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </div>
        <NavigationMenuItem className="flex justify-end mr-2">
          <NavigationMenuLink asChild className=" ">
            <Button asChild variant="default" className="text-black" size="sm">
              <Link href={"/login"}>Login</Link>
            </Button>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Menu;
