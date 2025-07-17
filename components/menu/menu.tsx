import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "./navigation-menu";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/Redux/store";
import { User2 } from "lucide-react";
const Menu = ({ className }: { className: string | undefined }) => {
  const menuItems = [
    { label: "Home", address: "/" },
    { label: "Games", address: "/games" },
    { label: "About Me", address: "/aboutme" },
  ];
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  return (
    <NavigationMenu className={`mt-3 ${className}`}>
      <NavigationMenuList className="justify-between">
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
            <Button variant="default" className="text-black" size="sm">
              <Link href={"/profile"}>
                <User2 />
              </Link>
            </Button>
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
