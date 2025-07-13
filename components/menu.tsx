import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "./ui/navigation-menu";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
const Menu = () => {
  return (
    <NavigationMenu className="pt-3">
      <NavigationMenuList className="justify-between">
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Image src={"/logo.svg"} width={50} height={50} alt="logo" />
          </NavigationMenuLink>
        </NavigationMenuItem>
        <div className="flex w-4/6 mx-auto">
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href="/">Home</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href="/categories">Categories</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href="/aboutus">About Us</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </div>
        <NavigationMenuItem className="flex justify-end mr-2">
          <NavigationMenuLink asChild className=" ">
            <Button asChild variant="default" size="sm">
              <Link href={"/login"}>Login</Link>
            </Button>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Menu;
