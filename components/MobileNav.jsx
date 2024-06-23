"use client";
import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { usePathname } from "next/navigation";
Link;
const MobileNav = () => {
  const navLinks = [
    { name: "Home", url: "/" },
    { name: "Service", url: "/service" },
    { name: "Resume", url: "/resume" },
    { name: "Work", url: "/work" },
    { name: "Contact", url: "/contact" },
  ];
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-accent text-[45]" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <div className="mt-32 mb-10 text-center  text-2xl">
          <Link href="/">
            <h1 className="text-2xl font-semibold">
              Portifolio<span className="">.</span>
            </h1>
          </Link>
        </div>
        <nav className=" flex gap-8 flex-col justify-between items-center">
          {navLinks.map((nav, index) => (
            <Link
              href={nav.url}
              key={index}
              className={`${
                nav.url === pathname
                  ? "text-accent border-b-2 border-accent"
                  : ""
              } font-medium hover:text-accent transition-all text-white`}
            >
              {nav.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
