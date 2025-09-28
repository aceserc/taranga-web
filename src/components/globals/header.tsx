"use client";
import { Menu } from "lucide-react";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../ui/navigation-menu";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";


type Props = {
  routes: {
    href: string;
    label: string;
  }[];
  rightContent: React.ReactNode
}

export const Header = ({ routes, rightContent }: Props) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className="container -translate-x-1/2 left-1/2 top-5 fixed z-40 ">
      <header className="shadow-inner backdrop-blur-sm border border-secondary rounded-2xl flex justify-between items-center py-2 px-5 bg-card/80 mx-auto container">
        <Link href="/" className="font-bold text-lg flex items-center">
          <Image src={"/assets/images/logo.png"} width={50} height={50} alt="ACES" className="size-12 object-contain object-center" />
        </Link>
        {/* <!-- Mobile --> */}
        <div className="flex items-center lg:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen} >
            <SheetTrigger asChild>
              <Menu
                onClick={() => setIsOpen(!isOpen)}
                className="cursor-pointer lg:hidden"
              />
            </SheetTrigger>

            <SheetContent
              className="flex flex-col justify-between rounded-tr-2xl rounded-br-2xl bg-card border-secondary w-[250px]"
            >
              <div>
                <SheetHeader className="mb-4 ml-4">
                  <SheetTitle className="flex items-center">
                    <Link href="/" className="font-bold text-lg flex items-center">
                      <Image src={"/assets/images/logo.png"} width={50} height={50} alt="ACES" className="size-12 object-contain object-center" />
                    </Link>
                  </SheetTitle>
                </SheetHeader>

                <div className="flex flex-col gap-2">
                  {routes.map(({ href, label }) => (
                    <Button
                      key={href}
                      onClick={() => setIsOpen(false)}
                      asChild
                      variant="ghost"
                      className="justify-start text-base"
                    >
                      <Link href={href}>{label}</Link>
                    </Button>
                  ))}
                </div>
              </div>
              <SheetFooter className="w-full !justify-normal">
                {rightContent}
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>

        {/* <!-- Desktop --> */}
        <NavigationMenu className="hidden lg:block">
          <NavigationMenuList>
            <NavigationMenuItem>
              {routes.map(({ href, label }) => (
                <NavigationMenuLink key={href} asChild>
                  <Link href={href} className="text-base px-2 hover:underline underline-offset-4">
                    {label}
                  </Link>
                </NavigationMenuLink>
              ))}
            </NavigationMenuItem>

            <div className="hidden lg:flex !ml-6">
              {rightContent}
            </div>
          </NavigationMenuList>
        </NavigationMenu>

      </header>
    </div>
  );
};